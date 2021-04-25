import React from "react";
import EventPractice from "./EventPractice";
import MyComponent from "./MyComponent";
import RefSample from "./RefSample";
import Say from "./Say";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

const App = () => {
  const name = "React";
  const id = undefined;
  return (
    <>
      {/* <div>{name === "React" && "Hello, React!"}</div> */}
      {/* <div>{id || "ID is undefined."}</div> */}
      {/* <MyComponent>Hello</MyComponent> */}
      {/* <Say /> */}
      {/* <EventPractice /> */}
      {/* <ValidationSample /> */}
      {/* <RefSample /> */}
      <ScrollBox />
    </>
  );
};

export default App;
