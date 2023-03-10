import {
    SellForm2 ,
   } from './../ui-components';
import { useParams } from "react-router-dom";
import Footer from './../js/mkFooter';

import { useNavigateAction } from "@aws-amplify/ui-react/internal";

import { DataStore } from '@aws-amplify/datastore';
import { UserTable } from './../models';
import { SellTable } from './../models';

import {useState, useEffect} from 'react';
import { useSearchParams } from "react-router-dom";

const ComponentD = () => {
    // パラメータの取得
    const [searchParams] = useSearchParams();
    const getNickname = searchParams.get("name");

    const [ulist, setuList] = useState([]);

    const fetchData = async() => {
        const res = (await DataStore.query(UserTable)).filter(c => c.nickname === getNickname);
        setuList(res[0])
        console.log('getting user info. success')
    };

    useEffect( ()=> {
        fetchData()
    }, [])

    // const buttonOnClick = useNavigateAction({
    //     type: "url",
    //     url: `${"./congratulations"}`,
    //   });

    const buttonOnClick = useNavigateAction({
        type: "url",
        url: `${"./congratulations"}`,
      });
    
    async function postData() {
        // await DataStore.save(
        //     new SellTable({
        //         "goodsName": "Lorem ipsum dolor sit amet",
        //         "comment": "Lorem ipsum dolor sit amet",
        //         "PickupPlace": "Lorem ipsum dolor sit amet",
        //         "userName": "Lorem ipsum dolor sit amet",
        //         "createdDate": "1970-01-01T12:30:23.999Z",
        //         "imageUrl": "Lorem ipsum dolor sit amet",
        //         "salesTerm": "1970-01-01T12:30:23.999Z",
        //         "imageUrl2": "Lorem ipsum dolor sit amet"
        //     })
        // );
        // console.log("success!!");
    };

    const [pGoodsName, setpGoodsName] = useState();
    const [pImageUrl, setpImageUrl] = useState();

    return (
        <body>
            <h1>出品</h1>
            {/* <h2>{this.props.route.name}aa</h2> */}
            <div style={{textAlign: "left"}}>
                {/* <SellForm2 width={"100vw"}/> */}
            </div>
            <form className='formField' > 
                <div>
                    <label>商品名< br/>
                        <input type="text" name="goodsName"
                        value={pGoodsName}
                        onChange={(event) => setpGoodsName(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>画像< br/>
                        <input type="text" name="imageUrl"
                        value={pImageUrl}
                        onChange={(event) => setpImageUrl(event.target.value)} />
                    </label>
                </div>
                <div>
                    <label>説明< br/>
                        <textarea name="comment" rows="4">
                        </textarea>
                    </label>
                </div>
                <div>
                    <label>受取り場所< br/>
                        <input type="text" name="PickupPlace"></input>
                    </label>
                </div>
                <div>
                    <label>販売期間< br/>
                        <input type="date" name="salesTerm"></input>
                    </label>
                </div>
                <div>
                禁止されている行為および出品物を必ずご確認ください。また、プライバシーポリシーに同意の上、「出品する」ボタンを押してください。
                </div>
                <div className="button01">
                    {/* <button onClick={() => {buttonOnClick();}}>出品する</button> */}
                    <input
                        type="button"
                        value="出品する"
                        className='button02' 
                        onClick={async () => {
                            await DataStore.save(
                                new SellTable({
                                    "goodsName": pGoodsName,
                                    "comment": "Lorem ipsum dolor sit amet",
                                    "PickupPlace": "Lorem ipsum dolor sit amet",
                                    "userName": ulist.nickname,
                                    "createdDate": "1970-01-01T12:30:23.999Z",
                                    "imageUrl": pImageUrl,
                                    "salesTerm": "1970-01-01T12:30:23.999Z",
                                    "imageUrl2": ulist.iconUrl,
                            }));
                            console.log("success!!");
                        }}
                    />
                </div>
            </form>
            <Footer />

        </body>
    )
}
export default ComponentD