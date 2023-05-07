import React, { useState, useRef } from "react";
import "./Register.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import addAvatar from "./../../img/addAvatar.png";
import { Link } from "react-router-dom";

const Register = () => {
  const fileInputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register_container">
      <div className="register">
        <div className="register_name">Dev Chats</div>
        <div className="register_text">Register</div>
        <form>
          <div className="register_details">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="E-mail" />
            <div className="password_wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span className="eye">
              {showPassword ? (
                <AiFillEye className="" onClick={handleTogglePassword} />
              ) : (
                <AiFillEyeInvisible
                  className=""
                  onClick={handleTogglePassword}
                />
              )}
              </span>
            </div>
          </div>
          <div className="add_avatar">
            <input
              type="file"
              id="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
            />
            <label htmlFor="file">
              <img src={addAvatar} alt="" />
            </label>
            <a href="#" onClick={handleAvatarClick}>
              Add an avatar
            </a>
          </div>
          <label htmlFor="file">
            <button className="signup">Sign Up</button>
          </label>
        </form>
        <div className="already_acc">
          {/* Already have an account? <Link to="/login">Login</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
