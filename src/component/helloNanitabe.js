import { useNavigate } from "react-router-dom"
import imgNanitabe from "./../img/nanitabe.png"

const ComponentA = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p><img src={ imgNanitabe } alt="helloNanitabe"　/></p>
            <p><button onClick={() => navigate('/post')}>これたべた</button></p>
            <p><button onClick={() => navigate('/timeline')}>timeline</button></p>
        </div>
    )
}
export default ComponentA