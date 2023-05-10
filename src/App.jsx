import "./App.css";
import React,{useContext} from 'react'

import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import ChatPage from "./pages/ChatPages/ChatPage";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser}=useContext(AuthContext);
console.log(currentUser);
  return <>  
  <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/chat" element={<ChatPage/>}/>
 {/* <div className="App-main"><Register/></div>  */}
 {/* <div className="App-main"><Login/></div> */}

{/* <div className="App-main"><ChatPage/></div>  */}

  </Routes>;
</>
}

export default App;

