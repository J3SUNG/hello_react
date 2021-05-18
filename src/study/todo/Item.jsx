import React, { useContext } from "react";
import "./Item.css";
import { TodoContext } from "./TodoStore.js";

const Item = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const toggleItem = (event) => {
    const id = event.target.dataset.id;
    dispatch({ type: "CHANGE_TODO_STATUS", payload: id });
  };
  const itemClassName = todo.status === "done" ? "done-item" : "";
  return (
    <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>
      {todo.title}
    </li>
  );
};

export default Item;
