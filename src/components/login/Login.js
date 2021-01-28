import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="box-login">
      <div className="box-form">
        <h1 className="title">Signe In</h1>
        <form className="form">
          <input className="box-input" type="text" placeholder="Your Email" />
          <input
            className="box-input"
            type="text"
            placeholder="Your Password"
          />
          <input className="box-input" type="submit" value="Send" />
        </form>
        <p className="title">Forgot password ?</p>
      </div>
    </div>
  );
};
