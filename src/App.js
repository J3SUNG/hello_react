import React, { useState, useEffect } from "react";
import List from "./List.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();
  const [loading, setLoading] = useState(false);
  const data = [
    { title: "study", id: 1, status: "todo" },
    { title: "learn", id: 2, status: "todo" },
    { title: "read", id: 3, status: "todo" },
    { title: "write", id: 4, status: "todo" },
  ];

  const changeInputData = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
  };

  const fetchInitalData = async () => {
    setLoading(true);
    // const response = await fetch("http://localhost:8080/todo");
    // const initialData = await response.json();
    const initialData = data;
    setTodos(initialData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    console.log("list render");
  }, [todos]);

  useEffect(() => {
    fetchInitalData();
  }, []);

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
