import React from "react";
import "./Header.css";
import { TodoContext } from "./App.js";

const Header = ({ todos }) => {
  return (
    <TodoContext.Consumer>
      {({ todos }) => (
        <>
          <h1>Hello Todo Application</h1>
          <div className="countInfo">
            todo : {todos.filter((v) => v.status === "todo").length}
          </div>
        </>
      )}
    </TodoContext.Consumer>
  );
};

export default Header;
