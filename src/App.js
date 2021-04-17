import React from "react";
import MyComponent from "./MyComponent";
import Say from "./Say";

const App = () => {
  const name = "React";
  const id = undefined;
  return (
    <>
      {/* <div>{name === "React" && "Hello, React!"}</div>
      <div>{id || "ID is undefined."}</div>
      <MyComponent>Hello</MyComponent> */}
      <Say />
    </>
  );
};

export default App;
