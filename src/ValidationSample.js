import React, { useState } from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState("");
  const [validated, setValidated] = useState("");
  const onChange = (e) => {
    setPassword(e.target.value);
  };
  const onClick = () => {
    setClicked(true);
    setValidated(password === "000");
  };
  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={onChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
      ></input>
      <button onClick={onClick}>Check</button>
    </div>
  );
};

export default ValidationSample;
