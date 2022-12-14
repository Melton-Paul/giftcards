import React from "react";

const UseInput = (validateFunc) => {
  const [inputVal, setInputVal] = React.useState("");
  const [inputTouched, setInputTouched] = React.useState(false);
  const isValid = validateFunc(inputVal);
  const isError = inputTouched && !isValid;

  function handleChange(e) {
    setInputVal(e.target.value);
  }
  function handleBlur() {
    setInputTouched(true);
  }

  function reset() {
    setInputVal("");
    setInputTouched(false);
  }

  return {
    value: inputVal,
    setInputTouched,
    isValid,
    isError,
    handleChange,
    handleBlur,
    reset,
  };
};

export default UseInput;
