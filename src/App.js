import React, { useMemo, useRef, useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const printInput = () => {
    console.log({ input });
    return input;
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    setInput(value);
  };
  const value = useMemo(() => printInput(), [input]);
  return (
    <div>
      <input value={input} ref={inputRef} onChange={onChange} />
      <button
        onClick={() => {
          printInput();
        }}
      >
        Print
      </button>
    </div>
  );
};
export default App;
