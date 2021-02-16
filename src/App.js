import React, { useRef, useState, useEffect } from "react";

const App = () => {
  const [edit, setEdit] = useState(false);
  const toggleEdit = () => {
    setEdit(!edit);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (edit) {
      inputRef.current.focus();
    }
  }, [edit]);

  return (
    <div>
      {edit && <input ref={inputRef} />}
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
};

export default App;
