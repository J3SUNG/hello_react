import React from "react";
import "./Item.css";

const Item = ({ todo, changeTodoStatus }) => {
  const toggleItem = (event) => {
    const id = event.target.dataset.id;
    changeTodoStatus(id);
  };
  const itemClassName = todo.status === "done" ? "done-item" : "";
  return (
    <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>
      {todo.title}
    </li>
  );
};

export default Item;
