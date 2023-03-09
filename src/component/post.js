import {
    SellForm2 
   } from './../ui-components';
import { useParams } from "react-router-dom";

const ComponentD = () => {
    const params = useParams();
    return (
        <body>
            <h1>出品</h1>
            {/* <h2>{this.props.route.name}aa</h2> */}
            <div style={{textAlign: "left"}}>
                <SellForm2 width={"100vw"}/>
            </div>
            {/* <form>

            </form> */}

        </body>
    )
}
export default ComponentD