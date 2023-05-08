import React from "react";
import "./Received.css"
import dp from "./../../img/dp.jpg";
const Sent = () => {
  return (
    <div className="recieved-parent">
    <div className="sent-wrapper">
      <div className="sentdp-time">
        
        <div className="received-dp">
          <img src={dp} alt="" />
        </div>
        
        <p>just now</p>
      </div>
      <div className="sent-text"><p> debitis voluptatum cumque ipsam! Quas doloribus reiciendis eos saepe a dicta nihil, error fugiat magni.</p></div>
    </div>
    </div>

  );
};

export default Sent;
