import React from "react";

const ScrollBox = () => {
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };

  const innerStyle = {
    width: "100px",
    height: "650px",
    background: "liner-gradient(white, black)",
  };
  return (
    <div style={style}>
      <div style={innerStyle} />
    </div>
  );
};

export default ScrollBox;
