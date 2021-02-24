import React, { useState, useEffect } from "react";
import List from "./List.jsx";
import useFetch from "./useFetch.js";
import Header from "./Header.jsx";
import Form from "./Form.jsx";

export const TodoContext = React.createContext();

const TodoStore = () => {
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

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === +id) {
        if (todo.status === "done") {
          todo.status = "todo";
        } else {
          todo.status = "done";
        }
      }
      return todo;
    });
    setTodos(updateTodos);
    console.log(updateTodos);
  };

  useEffect(() => {
    console.log("list render");
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, changeInputData, loading, changeTodoStatus }}
    >
      <Header />

      <Form />
      <List
        todos={todos}
        loading={loading}
        changeTodoStatus={changeTodoStatus}
      />
    </TodoContext.Provider>
  );
};

export default TodoStore;
