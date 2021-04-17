import React from "react";

const MyComponent = ({ name, children }) => {
  return (
    <>
      <div>New Component!</div>
      <div>I'm {name}</div>
      <div>Children is {children}</div>
    </>
  );
};

MyComponent.defaultProps = {
  name: "undefined",
};

export default MyComponent;
