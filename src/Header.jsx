import React from "react";
import "./Header.css";

const Header = ({ todos }) => {
  return (
    <div>
      <h1>Hello Todo Application</h1>
      <div className="countInfo">todo : {todos.length}</div>
    </div>
  );
};

export default Header;
