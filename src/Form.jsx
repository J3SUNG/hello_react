import React, { useContext, useRef } from "react";
import { TodoContext } from "./TodoStore.js";

const Form = () => {
  const inputRef = useRef(false);
  const { addTodo } = useContext(TodoContext);

  const addTodoData = (event) => {
    event.preventDefault();
    addTodo(inputRef.current.value);
  };

  return (
    <>
      <form action="">
        <input type="text" ref={inputRef} />
        <button onClick={addTodoData}>add todo</button>
      </form>
    </>
  );
};

export default Form;
