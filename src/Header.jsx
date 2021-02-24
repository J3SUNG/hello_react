import React from "react";
import "./Header.css";

const Header = ({ todos }) => {
  return (
    <div>
      <h1>Hello Todo Application</h1>
      <div className="countInfo">
        todo : {todos.filter((v) => v.status === "todo").length}
      </div>
    </div>
  );
};

export default Header;
