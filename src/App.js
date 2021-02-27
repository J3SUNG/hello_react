import React, { useState, useEffect, useCallback, useMemo } from "react";

const App = () => {
  const [flag, setFlag] = useState(false);
  const [input, setInput] = useState("");
  const printInput = useCallback(() => {
    return Math.random();
  }, [flag]);
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onClick = (event) => {
    event.preventDefault();
    setFlag(!flag);
  };
  useEffect(() => console.log(printInput()));

  return (
    <>
      <form>
        <input value={input} onChange={onChange} />
        <button onClick={onClick}>Click</button>
      </form>
    </>
  );
};

export default App;
