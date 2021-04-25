import React, { useRef } from "react";

const RefSample = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    input.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

export default RefSample;
