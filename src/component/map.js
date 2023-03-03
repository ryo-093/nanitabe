import { useNavigate } from "react-router-dom"

import MapArea from "./mapArea";

const ComponentC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>マップ</p>
            <MapArea />
            <button onClick={() => navigate('/')}>戻る</button>
        </div>
    )
}
export default ComponentC