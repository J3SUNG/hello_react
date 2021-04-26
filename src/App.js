import React, { useState } from "react";
import Average from "./Average";
import Counter from "./Counter";
import EventPractice from "./EventPractice";
import Info from "./Info";
import IterationSample from "./IterationSample";
import MyComponent from "./MyComponent";
import RefSample from "./RefSample";
import Say from "./Say";
import ScrollBox from "./ScrollBox";
import ValidationSample from "./ValidationSample";

const App = () => {
  // const name = "React";
  // const id = undefined;
  const [visible, setVisible] = useState(false);
  return (
    <>
      {/* <div>{name === "React" && "Hello, React!"}</div> */}
      {/* <div>{id || "ID is undefined."}</div> */}
      {/* <MyComponent>Hello</MyComponent> */}
      {/* <Say /> */}
      {/* <EventPractice /> */}
      {/* <ValidationSample /> */}
      {/* <RefSample /> */}
      {/* <ScrollBox /> */}
      {/* <IterationSample /> */}
      {/* <Counter /> */}
      {/* <Info /> */}
      <Average />
    </>
  );
};

export default App;
