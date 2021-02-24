import React, { useEffect, useReducer } from "react";
import List from "./List.jsx";
import useFetch from "./useFetch.js";
import Header from "./Header.jsx";
import Form from "./Form.jsx";

export const TodoContext = React.createContext();

const todoReducer = (todos, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...todos, { title: payload, id: todos.length, status: "todo" }];
    case "SET_INIT_DATA":
      return payload;
    case "CHANGE_TODO_STATUS":
      return todos.map((todo) => {
        if (todo.id === +payload) {
          if (todo.status === "done") {
            todo.status = "todo";
          } else {
            todo.status = "done";
          }
        }
        return todo;
      });
    default:
      return;
  }
};

const TodoStore = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const setInitData = (initData) => {
    dispatch({ type: "SET_INIT_DATA", payload: initData });
  };

  const loading = useFetch(setInitData, "http://localhost:8080/todo");

  useEffect(() => {
    console.log("list render");
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, loading, dispatch }}>
      <Header />
      <Form />
      <List />
    </TodoContext.Provider>
  );
};

export default TodoStore;
