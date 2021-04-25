import React from "react";

const IterationSample = () => {
  const names = ["snowman", "ice", "snow", "wind"];
  const result = names.map((name) => <li>{name}</li>);
  console.log(result);
  return <ul>{result}</ul>;
};

export default IterationSample;
