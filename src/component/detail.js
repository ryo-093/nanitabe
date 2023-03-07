import { useSearchParams } from "react-router-dom";

import { DataStore } from '@aws-amplify/datastore';
import { Sells } from './../models';

import {useState, useEffect} from 'react';

import {
    ChatButton 
   } from './../ui-components';

const ComponentG = () => {
    // パラメータの取得
    const [searchParams] = useSearchParams();
    const getSellId = searchParams.get("sellId");

    const [list, setList] = useState([]);

    const fetchData = async() => {
        const res = await DataStore.query(Sells, getSellId);
        setList(res)
        console.log(res)
    };

    useEffect( ()=> {
        fetchData()
    }, [])

    return (
        <body>
            {/* <h1>詳細</h1> */}
            <header className="header">
                <h3>{list.goodsName}</h3>
                <h1>￥{list.price}</h1>
            </header>
            <div className="image">
                <img src={list.imageUrl1} style={{width: "60%"}}/>
            </div>
            <div className='detail'>
                <h3>説明</h3>
                <p>{list.comment}</p>
                <h3>受取場所</h3>
                <p>{list.PickupPlace}</p>
            </div>
                <ChatButton alignItems="center"/>
        </body>
    )
}

export default ComponentG