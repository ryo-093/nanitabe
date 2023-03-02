import { useNavigate } from "react-router-dom"

const ComponentC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>マップ</p>
            <button onClick={() => navigate('/')}>戻る</button>
        </div>
    )
}
export default ComponentC