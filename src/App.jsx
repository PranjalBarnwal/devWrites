import "./App.css";
import React from 'react'

import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import ChatPage from "./pages/ChatPage/ChatPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return <>  
  {/* <Routes> */}
    {/* <Route path="/" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/chat" element={<ChatPage/>}/> */}
 {/* <div className="App-main"><Register/></div> 
 <div className="App-main"><Login/></div> */}

<div className="App-main"><ChatPage/></div> 

  {/* </Routes>; */}
</>
}

export default App;

