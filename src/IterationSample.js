import React from "react";

const IterationSample = () => {
  const names = ["snowman", "ice", "snow", "wind"];
  const result = names.map((name, index) => <li key={index}>{name}</li>);
  console.log(result);
  return <ul>{result}</ul>;
};

export default IterationSample;
