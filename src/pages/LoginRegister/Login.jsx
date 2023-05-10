import React, { useState } from "react";
import "./Register.css";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register_container">
      <div className="register">
        <div className="register_name">Dev Chats</div>
        <div className="register_text">Login</div>
        <form>
          <div className="register_details">
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

          <button className="signup"><Link to="/chat">Sign In</Link></button>
        </form>
        <div className="already_acc">
          Don't have an account? <Link to="/">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
