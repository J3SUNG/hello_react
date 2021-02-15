import React, { useRef, useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0); // 0 값이 refCount.current에 저장됩니다.

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, []);
  return (
    <>
      {count}
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          refCount.current++;
        }}
      >
        ref increment
      </button>
      <button
        onClick={() => {
          console.log("current ref is...", refCount);
        }}
      >
        show Ref
      </button>
    </>
  );
}
export default App;
