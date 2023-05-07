import React from "react";
import "./Contacts.css";
import dp from "./../../img/dp.jpg";

const Contacts = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-dp">
        <img src={dp} alt="" />
      </div>
      <div className="contact-info">
        <p>UserName</p>
        <p>This was my last message</p>
      </div>
    </div>
  );
};

export default Contacts;
