import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const onClickEnter = () => {
    setMessage("Enter");
  };
  const onClickExit = () => {
    setMessage("Exit");
  };

  return (
    <>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickExit}>Exit</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        Red
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        Blue
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        Green
      </button>
    </>
  );
};

export default Say;
