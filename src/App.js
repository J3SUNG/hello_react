import React from "react";
import MyComponent from "./MyComponent";

const App = () => {
  const name = "React";
  const id = undefined;
  return (
    <>
      <div>{name === "React" && "Hello, React!"}</div>
      <div>{id || "ID is undefined."}</div>
      <MyComponent />
    </>
  );
};

export default App;
