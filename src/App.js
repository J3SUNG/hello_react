import React from "react";

const App = () => {
  const name = "React";
  const id = undefined;
  return (
    <>
      <div>{name === "React" && "Hello, React!"}</div>
      <div>{id || "ID is undefined."}</div>
    </>
  );
};

export default App;
