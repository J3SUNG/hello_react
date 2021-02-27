import React, { useState, useMemo, useEffect } from "react";

const App = () => {
  const [flag, setFlag] = useState(false);
  const [input, setInput] = useState("");
  const printInput = useMemo(() => {
    return input;
  }, [flag]);
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onClick = (event) => {
    event.preventDefault();
    setFlag(!flag);
  };
  useEffect(() => console.log(printInput));

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
