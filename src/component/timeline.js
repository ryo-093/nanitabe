import { useNavigate } from "react-router-dom"

import {
    Timeline,
    Fooder
   } from './../ui-components';

const ComponentB = () => {
    const navigate = useNavigate()
    return (
        <div className="Timeline">
            <p>componentB!!!</p>
            <Timeline alignItems="center"/>
            <Fooder width="100vw" />
            <button onClick={() => navigate('/')}>もどる</button>

        </div>
    )
}
export default ComponentB