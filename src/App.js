import React, { useState, useRef } from "react";

const App = () => {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const idRef = useRef();
  const pwRef = useRef();

  const loginRequest = (event) => {
    event.preventDefault();

    console.log(idRef.current);
    console.log(pwRef.current);
  };
  const onChange = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    setId = event.target.value;
  };

  console.log(idRef);
  console.log(pwRef);

  return (
    <form onSubmit={loginRequest}>
      <label>
        id:
        <input id="id" ref={idRef} type="text" value={id} onChange={onChange} />
      </label>
      <label>
        pw:
        <input
          pw="pw"
          ref={pwRef}
          type="password"
          value={pw}
          onChange={onChange}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default App;
