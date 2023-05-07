import "./App.css";
import React from 'react'

import Register from "./pages/LoginRegister/Register";
import Login from "./pages/LoginRegister/Login";
import ChatPage from "./pages/ChatPage/ChatPage";

function App() {
  return <>
<div className="App-main"><Login/></div>
<div className="App-main"><Register/></div>

<div className="App-main"><ChatPage/></div>

  </>;
}

export default App;
