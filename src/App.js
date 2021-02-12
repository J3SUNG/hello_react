import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const counter = () => setCount(count + 1);

  return (
    <div>
      <div>{count}</div>
      <button onClick={counter}> Click </button>
    </div>
  );
};

export default App;
