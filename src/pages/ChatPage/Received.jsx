import React from "react";
import "./Received.css"
import dp from "./../../img/dp.jpg";
const Received = () => {
  return (
    <div className="recieved-parent">
    <div className="received-wrapper">
      <div className="dp-time">
        
        <div className="received-dp">
          <img src={dp} alt="" />
        </div>
        
        <p>just now</p>
      </div>
      <div className="received-text"><p>Lorem ipsum dolor,  culpa cupiditate asperiores, assumenda sequi dolom amet rerum eos expedita optio, nemo voluptatibus eveniet nesciunt mollitia debitis voluptatum cumque ipsam! Quas doloribus reiciendis eos saepe a dicta nihil, error fugiat magni.</p></div>
    </div>
    </div>
  );
};

export default Received;

