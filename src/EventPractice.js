import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="message"
        placeholder="input anything"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <div>{message}</div>
    </div>
  );
};

export default EventPractice;
