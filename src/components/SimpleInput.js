import React from "react";

const SimpleInput = React.forwardRef(
  (
    {
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

    return (
      <div className="form-control" invalid={valueIsValid === false && ""}>
        <label htmlFor={id}>{label}</label>
        <input
          ref={ref}
          type="text"
          id={id}
          onBlur={verifyInputValidity}
          onChange={verifyInputValidity}
        />
        {valueIsValid === false && <p>{errorMessage}</p>}
      </div>
    );
  }
);

export default SimpleInput;
