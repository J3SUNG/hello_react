import React, { useState } from "react";
import Print from "./Print";

export const Store = React.createContext();

const App = () => {
  const [text, setText] = useState("Hello!!");
  return (
    <Store.Provider value={text}>
      <Print />
    </Store.Provider>
  );
};

export default App;
