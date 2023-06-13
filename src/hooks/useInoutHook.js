import { useRef, useState } from "react";

export const useInputHook = (validityFunction) => {
  const [valueIsValid, setValueIsValid] = useState(null);
  const inputRef = useRef();
  const resetValueAndValidity = () => {
    setValueIsValid(null);
    inputRef.current.value = "";
  };

  const checkIfValueIsValid = () => {
    console.log(inputRef.current);
    const isValid = validityFunction(inputRef.current.value.trim());
    //pour afficher l'erreur sur l'input
    setValueIsValid(isValid);
    //afin  d'évaluer si le formulaire est valide
    return isValid;
  };

  return {
    valueIsValid,
    setValueIsValid,
    resetValueAndValidity,
    checkIfValueIsValid,
    inputRef,
  };
};
