import React, { useContext } from "react";
import { Store } from "./App.js";

const Print = () => {
  const { text } = useContext(Store);
  return <div>{text}</div>;
};

export default Print;
