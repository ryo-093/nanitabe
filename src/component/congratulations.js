import { useNavigateAction } from "@aws-amplify/ui-react/internal";
import { Auth } from 'aws-amplify'
import {useState, useEffect} from 'react';

import congimage from './../mock/congraturations.png' 

const ComponentI = () => {
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
        // url: `${"./timeline"}`,
        url: `${"./map?name="}${user}`,
      });

    return (
        <body>
            <div className='cong'>
                <img src={congimage}  />
                <div class="button01" >
                    <button onClick={() => {buttonOnClick();}}>もどる</button>
                </div>
            </div>
            {/* <Footer /> */}
        </body>
    )
}
export default ComponentI