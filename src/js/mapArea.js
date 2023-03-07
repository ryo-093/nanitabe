import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from 'leaflet';

function defCustomMarker(imageUrl){
    const customMarker = new L.Icon({
        shadowUrl: null,
        iconUrl: imageUrl,
        iconRetinaUrl: imageUrl,
        popupAnchor:  [-0, -0],
        iconSize: [45,45],
        className: "icon",
    });
    return customMarker;
}

const MapArea = () => {
    // とりあえず都庁
    const position = [35.689634, 139.692101]; 
    //テスト用
    const datas = require('./testForPositions.json')

    const MapContainerStyle = {
        width: "100%",
        height: "80vh",
        // display: "inline-block",
        // padding: "5px"
    };

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
            {datas.map((data) => (
					<Marker key={data.id} position={[ data.position[0], data.position[1] ]} icon={defCustomMarker(data.imageUrl)}>
						<Popup position={[ data.position[0], data.position[1] ]}>
							<div>
								<h3>{data.food}</h3>
								<h4>金額：{data.amount}円</h4>
                                <p>{data.comment}</p>
                                <a href="./timeline">詳細を見る</a>
							</div>
						</Popup>
					</Marker>
				))}
        </MapContainer>
    );
};

export default MapArea;