import React, { useContext } from "react";
import "./Header.css";
import { TodoContext } from "./TodoStore.js";

const Header = ({}) => {
  const { todos } = useContext(TodoContext);
  return (
    <>
      <h1>Hello Todo Application</h1>
      <div className="countInfo">
        todo : {todos.filter((v) => v.status === "todo").length}
      </div>
    </>
  );
};

export default Header;
