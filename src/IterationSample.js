import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "snowman" },
    { id: 2, text: "ice" },
    { id: 3, text: "snow" },
    { id: 4, text: "wind" },
  ]);
  const [input, setInput] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInput(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: input,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInput("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={input} onChange={onChange} />
      <button onClick={onClick}>Add</button> <br />
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
