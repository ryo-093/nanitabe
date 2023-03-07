// こいつを廃止にしたい
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentA from "./component/helloNanitabe";
import ComponentB from "./component/timeline";
import ComponentC from "./component/map";
import ComponentD from "./component/post";
import ComponentE from "./component/chat";
import ComponentF from "./component/mypage";
import ComponentG from "./component/detail";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComponentA/>}/>
                <Route path="/timeline" element={<ComponentB/>}/>
                <Route path="/map" element={<ComponentC/>}/>
                {/* <Route path="/" element={<ComponentC/>}/> */}
                <Route path="/post" element={<ComponentD/>}/>
                <Route path="/chat" element={<ComponentE/>}/>
                <Route path="/mypage" element={<ComponentF/>}/>
                <Route path="/detail" element={<ComponentG/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers