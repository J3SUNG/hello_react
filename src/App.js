import React, { useState, useEffect } from "react";
import List from "./List.jsx";

function App() {
  const [todos, setTodos] = useState(["study", "learn"]);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    console.log("new Render");
  }, [todos]);

  return (
    <>
      <h1>todo list</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>add todo</button>
      </form>
      <List todos={todos} />
    </>
  );
}

export default App;
