import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Start React",
      checked: true,
    },
    {
      id: 2,
      text: "Style Component",
      checked: true,
    },
    {
      id: 3,
      text: "Make a Todo App",
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
