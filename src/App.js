import React, { useRef } from "react";

const App = () => {
  const valueRef = useRef(10);
  console.log(valueRef);

  return <div>{valueRef.current}</div>;
};

export default App;
