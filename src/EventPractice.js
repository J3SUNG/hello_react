import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const onClick = () => {
    alert(username + ": " + message);
    setUsername("");
    setMessage("");
  };
  const onChange = (e) => {
    e.target.name == "username"
      ? setUsername(e.target.value)
      : setMessage(e.target.value);
  };
  const pressKey = (e) => {
    if (e.key === "Enter") {
      onChange();
    }
  };
  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
        onKeyPress={pressKey}
      />
      <input
        type="text"
        name="message"
        placeholder="input anything"
        value={message}
        onChange={onChange}
        onKeyPress={pressKey}
      />
      <button onClick={onClick}>Button</button>
      <div>{username}</div>
      <div>{message}</div>
    </div>
  );
};

export default EventPractice;
