import React from "react";

const EventPractice = () => {
  return (
    <div>
      <h1>Event Practice</h1>
      <input
        type="text"
        name="message"
        placeholder="input anything"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};

export default EventPractice;
