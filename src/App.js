import React, { useState, useEffect } from "react";
import List from "./List.jsx";
import useFetch from "./useFetch.js";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, "http://localhost:8080/todo");

  const changeInputData = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { title: newTodo, id: todos.length, status: "todo" }]);
  };

  useEffect(() => {
    console.log("list render");
  }, [todos]);

  return (
    <>
      <h1>todo list</h1>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>add todo</button>
      </form>
      <List todos={todos} loading={loading} />
    </>
  );
};

export default App;
