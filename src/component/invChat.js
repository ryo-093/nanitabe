import Footer from './../js/mkFooter';

import { DataStore } from '@aws-amplify/datastore';
import { SellTable } from './../models';

import {useState, useEffect} from 'react';

import { useSearchParams } from "react-router-dom";

// モック用のチャット画面
import chatimage from './../mock/mock.png' 

const ComponentH = () => {
    // パラメータの取得
    const [searchParams] = useSearchParams();
    const getSellId = searchParams.get("sellId");

    const [list, setList] = useState([]);

    const fetchData = async() => {
        const res = await DataStore.query(SellTable, getSellId);
        setList(res)
        console.log(res)
    };

    useEffect( ()=> {
        fetchData()
    }, [])

    return (
        <body>
            <header className="header">
                <div className="flex2">
                    <figure className="foodIcon">
                        <img src={list.imageUrl} className="foodImage"/>
                    </figure>
                    <div className='chatHeader'>
                        <h3>{list.goodsName}</h3>
                        <div className="flex">
                            <figure className="userIcon">
                                <img src={list.imageUrl2} />
                            </figure>
                                <p className="userText">{list.userName}</p>
                        </div>
                    </div>
                </div>
            </header>
            <div>
                <img src={chatimage}/>
            </div>
            <Footer />
        </body>
    )
}
export default ComponentH