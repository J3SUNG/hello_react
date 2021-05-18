import React from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="Input Todo" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
