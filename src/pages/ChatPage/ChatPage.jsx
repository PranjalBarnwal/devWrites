import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlinePaperClip } from "react-icons/ai";
import { AiOutlineSend } from "react-icons/ai";

import "./ChatPage.css";
import Contacts from "./Contacts";
const ChatPage = () => {
  return (
    <div className="chatpage">
      <div className="chatpage-container">
        <div className="usercontrol">
          <p className="app-name">DevChat</p>
          <ul>
            <li>
              <FaUserCircle size={25} />
            </li>
            <li>Username</li>
            <button className="logout">logout</button>
          </ul>
        </div>
        <div className="chatlist">
          <input type="text" placeholder="Search contacts" />

          <Contacts />
          <Contacts />
          <Contacts />
          <Contacts />
          <Contacts />
          
        </div>
        <div className="chatnav">
          <p>ContactName</p>
          <ul>
            <FaVideo />
            <FaUserPlus />
            <BsThreeDots />
          </ul>
        </div>
        <div className="chatsection">
        </div>
        <div className="messagecontrol">

          <input type="text" placeholder="Type Your Message.." />
          <ul>
            <BiImageAdd/>
            <AiOutlinePaperClip/>
            <button><AiOutlineSend/></button>
           
          </ul>

        </div>
      </div>
    </div>
  );
};

export default ChatPage;
