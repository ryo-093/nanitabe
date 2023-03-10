import './App.css';

import { Routes, Route } from "react-router-dom";
import ComponentA from "./component/helloNanitabe";
import ComponentB from "./component/timeline";
import ComponentC from "./component/map";
import ComponentD from "./component/post";
import ComponentE from "./component/chat";
import ComponentF from "./component/mypage";
import ComponentG from "./component/detail";
import ComponentH from "./component/invChat";
import ComponentI from "./component/congratulations";
// import Footer from './js/mkFooter';

// ログイン機能
import { Authenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
            <Routes>
                <Route path="/" element={<ComponentA/>}/>
                {/* <Route index element={<ComponentA/>}/> */}
                <Route path="/timeline" element={<ComponentB/>}/>
                <Route path="/map" element={<ComponentC/>}/>
                {/* <Route path="/" element={<ComponentC/>}/> */}
                {/* <Route path="post" element={<ComponentD/>} /> */}
                <Route path="post" element={<ComponentD/>}/>
                <Route path="chat" element={<ComponentE/>}/>
                <Route path="mypage" element={<ComponentF/>}/>
                <Route path="detail" element={<ComponentG/>}/>
                <Route path="invchat" element={<ComponentH/>}/>
                <Route path="congratulations" element={<ComponentI/>}/>
            </Routes>
            {/* <Footer /> */}
        </div>
      )}
    </Authenticator>
  );
}

export default App;