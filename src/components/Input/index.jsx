import React from "react";

const Input = (props) => {
  return (
    <input
      type="number"
      id="inputLength"
      name="passwordSize"
      value={props.passwordSize}
      onChange={(e) => props.setPasswordSize(+e.target.value)}
      min={6}
    />
  );
};

export default Input;
