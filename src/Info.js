import React, { useEffect, useReducer, useState } from "react";
import useInput from "./useInput";

const Info = () => {
  const [state, onChange] = useInput({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>name :</b> {name}
      </div>
      <div>
        <b>nickname :</b> {nickname}
      </div>
    </div>
  );
};

export default Info;
