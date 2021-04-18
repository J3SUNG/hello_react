import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const onClick = () => {
    alert(message);
    setMessage("");
  };
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div>
      <h1>Event Practice</h1>
      <button onClick={onClick}>Button</button>
      <input
        type="text"
        name="message"
        placeholder="input anything"
        value={message}
        onChange={onChange}
      />
      <div>{message}</div>
    </div>
  );
};

export default EventPractice;
