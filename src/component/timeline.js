import { useNavigate } from "react-router-dom"

const ComponentB = () => {
    const navigate = useNavigate()
    return (
        <div>
            <p>componentB!!!</p>
            <button onClick={() => navigate('/')}>もどる</button>
        </div>
    )
}
export default ComponentB