import React, { useMemo, useRef, useState, useCallback } from "react";

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
  const value = useCallback(() => printInput(), []);
  return (
    <div>
      <input value={input} ref={inputRef} onChange={onChange} />
      <button
        onClick={() => {
          value();
        }}
      >
        Print
      </button>
    </div>
  );
};
export default App;
