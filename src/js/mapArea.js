import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

import { useSearchParams } from "react-router-dom";
import { DataStore } from '@aws-amplify/datastore';
import { UserTable } from './../models';
import { SellTable } from './../models';

import { useState, useEffect } from 'react';

import { getLatLng , getLatLngArray} from "./../js/api.js";

function defCustomMarker(imageUrl) {
    const customMarker = new L.Icon({
        shadowUrl: null,
        iconUrl: imageUrl,
        iconRetinaUrl: imageUrl,
        popupAnchor: [-0, -0],
        iconSize: [45, 45],
        className: "icon",
    });
    return customMarker;
}

const MapArea = () => {
    const [searchParams] = useSearchParams();
    const getNickname = searchParams.get("name");

    const [list, setList] = useState([]);
    const [goods, setGoods] = useState([]);
    const [position, setPosition] = useState([35.689634, 139.692101]);
    // const [gPosition, setGPosition] = useState({"lat": 35.689634, "lng": 139.692101});
    const [gPosition, setGPosition] = useState([]);

    // const fetchData = async () => {
    //     const res = (await DataStore.query(UserTable)).filter(c => c.nickname === getNickname);
    //     setList(res[0]);

    //     getLatLng(res[0].currentAddress, (latlng) => {
    //         setPosition([latlng.lat, latlng.lng])
    //         console.log("getting user info. success")
    //     });
    // };

    // const fetchGdata = async () => {
    //     console.log('getting position info started')
    //     const res = await DataStore.query(SellTable);
    //     setGoods(res);

    //     // console.log(res)

    //     getLatLngArray(res, (latlng) => {
    //         setGPosition(latlng)
    //         console.log("getting position info. success")
    //         },
    //         (re) => console.log(re)
    //         )
    // };

    // useEffect(() => {
    //     fetchGdata()    //商品情報
    //     fetchData()     //ユーザー情報
    // }, []);

    useEffect(() => {
        // fetchGdata()    //商品情報
        const fetchData = async () => {
            const res1 = (await DataStore.query(UserTable)).filter(c => c.nickname === getNickname);
            setList(res1[0]);
    
            console.log('ユーザー情報取得開始')
            getLatLng(res1[0].currentAddress, (latlng) => {
                setPosition([latlng.lat, latlng.lng])
                console.log("getting user info. success")
            });
    
            console.log('getting position info started')
            const res = await DataStore.query(SellTable);
            setGoods(res);
    
            // console.log(res)  
    
            getLatLngArray(res, (latlng) => {
                setGPosition(latlng)
                // console.log(latlng)
                // console.log(gPosition)
                // console.log(latlng)
                console.log("getting position info. success")
                },
                (re) => console.log(re)
                )
        };

        fetchData()     //ユーザー情報
        console.log('実行されました')
    }, []);

    //テスト
    // const goods = require('./testForPositions.json')

    const MapContainerStyle = {
        width: "100%",
        height: "80vh",
        // display: "inline-block",
        // padding: "5px"
    };

    // console.log(goods[0])
    // console.log({gPosition})

    return (
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={MapContainerStyle}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    You're here!
                </Popup>
            </Marker>
            {goods.map((good, index) => (
					<Marker key={good.id} position={[ gPosition[index].lat, gPosition[index].lng ]} icon={defCustomMarker(good.imageUrl)}>
						<Popup position={[ gPosition[index].lat, gPosition[index].lng ]}>
                    {/* // <Marker key={good.id} position={[35.689634, 139.692101]} icon={defCustomMarker(good.imageUrl)}>
					// 	<Popup position={[35.689634, 139.692101]}> */}
							<div>
								<h3>{good.goodsName}</h3>
                                <p>{good.comment}</p>
                                <a href="./detail">詳細を見る</a>
							</div>
						</Popup>
					</Marker>
				))}
        </MapContainer>
    );
};

export default MapArea;