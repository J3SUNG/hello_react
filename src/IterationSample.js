import React from "react";

const IterationSample = () => {
  const numbers = [1, 2, 3, 4, 5];
  const result = numbers.map((num) => num + num);
  console.log(result);
  return (
    <>
      <ul>
        <li>snowman</li>
        <li>ice</li>
        <li>snow</li>
        <li>wind</li>
      </ul>
    </>
  );
};

export default IterationSample;
