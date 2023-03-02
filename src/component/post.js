import { useNavigate } from "react-router-dom"

const ComponentD = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>投稿する</p>
            <button onClick={() => navigate('/')}>戻る</button>
        </div>
    )
}
export default ComponentD