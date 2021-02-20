import React, { useState } from "react";
import List from "./List.jsx";
function App() {
  const [todos, setTodos] = useState(["study"]);
  return (
    <>
      <h1>todo list</h1>
      <form action="">
        {" "}
        <input type="text" name="" />
        <button>add todo</button>
      </form>
      <List todos={todos} />
    </>
  );
}

export default App;
