import React, { useState, useEffect, useCallback, useMemo } from "react";

const App = () => {
  const [count, setCount] = useState(30);
  const [flag, setFlag] = useState(false);
  const [input, setInput] = useState("");
  const printInput = useMemo(() => {
    return input;
  }, [input]);
  // const printInput = useCallback(() => {
  //   return Math.random() + count;
  // }, []);
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onClick = (event) => {
    event.preventDefault();
    setFlag(!flag);
    setCount(count + 1);
    console.log(count);
  };
  useEffect(() => {
    console.log(printInput);
  });

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
