import { useNavigateAction } from "@aws-amplify/ui-react/internal";
import { Auth } from 'aws-amplify'
import {useState, useEffect} from 'react';

const ComponentA = () => {
    const [user, setUser] = useState([]);

    const fetchData = async () => {
        const res = await Auth.currentAuthenticatedUser()
        setUser(res.attributes.nickname)
    };

    useEffect( ()=> {
        fetchData()
    }, [])

    const buttonOnClick = useNavigateAction({
        type: "url",
        // url: `${"./invchat?sellId="}${list.id}`,
        url: `${"./map?name="}${user}`,
    });

    return (
        <body className="hello">
            <div className="cong">
                <h1 style={{"color":"#ffffff"}}>OSUSOWAKE</h1>
                <p style={{"color":"#ffffff"}}> 練馬区自治会 Nerima Community Association</p>
                <div>
                    <button class="button03" onClick={() => { buttonOnClick(); }}>はじめる</button>
                </div>
            </div>
        </body>
    )
}
export default ComponentA