import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentA from "./component/helloNanitabe";
import ComponentB from "./component/timeline";
import ComponentC from "./component/map";
import ComponentD from "./component/post";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComponentA/>}/>
                <Route path="/timeline" element={<ComponentB/>}/>
                <Route path="/map" element={<ComponentC/>}/>
                <Route path="/post" element={<ComponentD/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers