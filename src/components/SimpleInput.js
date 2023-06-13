import React from "react";

const SimpleInput = React.forwardRef(
  (
    {
      setFormIsValid,
      checkFormValidity,
      verifyInputValidity,
      valueIsValid = null,
      setValueIsValid,
      errorMessage,
      label,
      id = null,
    },
    ref
  ) => {
    if (id === null) id = label;
    const localVerifyInputValidity = (value) => {
      if (!verifyInputValidity(value)) {
        setValueIsValid(false);
        // setFormIsValid(false);
      } else {
        setValueIsValid(true);
        // checkFormValidity(`${id[0].toUpperCase() + id.slice(1)}IsValid`);
      }
    };

    const handleValue = (e) => {
      const value = e.target.value;
      localVerifyInputValidity(value);
    };

    // const changeHandler = (e) => {
    //   const value = e.target.value;
    //   localVerifyInputValidity(value);
    // };

    return (
      <div className="form-control" invalid={valueIsValid === false && ""}>
        <label htmlFor={id}>{label}</label>
        <input
          type="text"
          id={id}
          onBlur={handleValue}
          onChange={handleValue}
          ref={ref}
        />
        {valueIsValid === false && <p>{errorMessage}</p>}
      </div>
    );
  }
);

export default SimpleInput;
