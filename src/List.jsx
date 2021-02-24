import React, { useContext } from "react";
import Item from "./Item.jsx";
import { TodoContext } from "./TodoStore.js";

const List = () => {
  const { todos, loading, changeTodoStatus } = useContext(TodoContext);
  let todoList = <div>Loading...</div>;
  if (!loading) {
    todoList = todos.map((todo) => (
      <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
    ));
  }
  return <ul>{todoList}</ul>;
};

export default List;
