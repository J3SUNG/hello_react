import React from "react";

const Form = ({ addTodo, changeInputData }) => {
  return (
    <>
      <form action="">
        <input type="text" name="" onChange={changeInputData} />
        <button onClick={addTodo}>add todo</button>
      </form>
    </>
  );
};

export default Form;
