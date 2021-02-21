import React, { useState } from "react";
import List from "./List.jsx";
function App() {
  const [todos, setTodos] = useState(["study"]);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos(...todos, newTodo);
  };

  return (
    <>
      <h1>todo list</h1>
      <form action="">
        <input type="text" name="" onChnage={changeInputData} />
        <button onClick={addTodo}>add todo</button>
      </form>
      <List todos={todos} />
    </>
  );
}

export default App;
