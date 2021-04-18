import React from "react";
import EventPractice from "./EventPractice";
import MyComponent from "./MyComponent";
import Say from "./Say";

const App = () => {
  const name = "React";
  const id = undefined;
  return (
    <>
      {/* <div>{name === "React" && "Hello, React!"}</div> */}
      {/* <div>{id || "ID is undefined."}</div> */}
      {/* <MyComponent>Hello</MyComponent> */}
      {/* <Say /> */}
      <EventPractice />
    </>
  );
};

export default App;
