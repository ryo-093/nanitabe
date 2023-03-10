import { useSearchParams } from "react-router-dom";

import Footer from './../js/mkFooter';

import { DataStore } from '@aws-amplify/datastore';
import { SellTable } from './../models';

import {useState, useEffect} from 'react';

import { useNavigateAction } from "@aws-amplify/ui-react/internal";

const ComponentG = () => {
    // パラメータの取得
    const [searchParams] = useSearchParams();
    const getSellId = searchParams.get("sellId");

    const [list, setList] = useState([]);

    const fetchData = async() => {
        const res = await DataStore.query(SellTable, getSellId);
        setList(res)
        console.log(res)
    };

    const buttonOnClick = useNavigateAction({
        type: "url",
        url: `${"./invchat?sellId="}${list.id}`,
      });

    useEffect( ()=> {
        fetchData()
    }, [])

    return (
        <body>
            {/* <h1>詳細</h1> */}
            {/* <header className="header">
                <h3>{list.goodsName}</h3>
                <h1>￥{list.price}</h1>
            </header> */}
            <div className="image">
                <img src={list.imageUrl} style={{width: "100%"}}/>
            </div>
            <div className='detail'>
                <h1>{list.goodsName}</h1>
                <div className="flex">
                <figure className="userIcon">
                    <img src={list.imageUrl2} />
                </figure>
                    <p className="userText">{list.userName}</p>
                </div>
                <div style={{paddingTop:"20px"}}>
                <p><font size="4">{list.comment}</font></p>
                </div>
                <h3>詳細情報</h3>
                <p>受取り場所：<br />
                {list.PickupPlace}
                </p>
                <p>募集期間：<br />
                {list.createdDate} <br />
                ~ {list.salesTerm}
                </p>
            </div>
            <div class="button01">
                <button onClick={() => {buttonOnClick();}}>チャットする</button>
            </div>
            <Footer />
        </body>
    )
}

export default ComponentG