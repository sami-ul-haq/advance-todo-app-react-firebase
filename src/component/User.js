import React from "react";
import logo from "../assets/logo.jpg"

const User = () => {
  return <div className="user">
  <div className="logo">
    <img src={logo} alt="logo" />
  </div>
  <div className="info">
    <p>Todo List</p>
    <a href="/">Logout</a>
  </div>
  </div>;
};

export default User;