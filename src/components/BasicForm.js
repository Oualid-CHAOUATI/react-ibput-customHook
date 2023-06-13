import { useEffect, useRef, useState } from "react";
import SimpleInput from "./SimpleInput";
import { useInputHook } from "../hooks/useInoutHook";

const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(null);

  const verifyNameValidity = (value) => {
    console.log(value);
    return value.trim() !== "";
  };
  const verifyLastNameValidity = verifyNameValidity;
  const verifyEmailValidity = (value) => {
    return value.trim() !== "" && value.includes("@");
  };

  const {
    valueIsValid: nameIsValid,
    setValueIsValid: setNameIsValid,
    resetValueAndValidity: resetNameValueAndValidity,
    checkIfValueIsValid: checkIfNameIsValid,
    inputRef: nameInputRef,
  } = useInputHook(verifyNameValidity);
  const {
    valueIsValid: lastNameIsValid,
    setValueIsValid: setLastNameIsValid,
    resetValueAndValidity: resetLastNameValueAndValidity,
    checkIfValueIsValid: checkIfLastNameIsValid,
    inputRef: lastNameInputRef,
  } = useInputHook(verifyLastNameValidity);

  const {
    valueIsValid: emailIsValid,
    setValueIsValid: setEmailIsValid,
    resetValueAndValidity: resetEmailValueAndValidity,
    checkIfValueIsValid: checkIfEmailIsValid,
    inputRef: emailInputRef,
  } = useInputHook(verifyEmailValidity);

  const nameErrorMessage = "name must not be empty ";
  const lastNameErrorMessage = "lastname must not be empty ";
  const emailErrorMessage = "email must not be empty and must include @ ";
  const nameLabel = "name";
  const lastNameLabel = "lastname";
  const emailLabel = "Email";

  useEffect(() => {
    setFormIsValid(nameIsValid && lastNameIsValid && emailIsValid);
  }, [nameIsValid, lastNameIsValid, emailIsValid]);

  const submitHandler = (e) => {
    e.preventDefault();

    //! ce bloc sert uniquement si quequn enlève la valeur disabled manuellement avec l'insecteur, ce qui donnera possibilité à la soumission du formulaire

    //si value =false => setToFalse => ne rien faire
    // si value ==null (erreur non affichée) => setToFasle => afficher l'erreur
    checkIfNameIsValid();
    checkIfLastNameIsValid();
    checkIfEmailIsValid();
    // --------------------------

    if (!formIsValid) return;

    // else
    resetNameValueAndValidity();
    resetLastNameValueAndValidity();
    resetEmailValueAndValidity();

    console.log("valid name");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <SimpleInput
          {...{
            verifyInputValidity: checkIfNameIsValid,
            valueIsValid: nameIsValid,
            setValueIsValid: setNameIsValid,
            errorMessage: nameErrorMessage,
            label: nameLabel,
            ref: nameInputRef,
          }}
        />
        <SimpleInput
          {...{
            verifyInputValidity: checkIfLastNameIsValid,
            valueIsValid: lastNameIsValid,
            setValueIsValid: setLastNameIsValid,
            errorMessage: lastNameErrorMessage,
            label: lastNameLabel,
            ref: lastNameInputRef,
          }}
        />
        <SimpleInput
          {...{
            verifyInputValidity: checkIfEmailIsValid,
            valueIsValid: emailIsValid,
            setValueIsValid: setEmailIsValid,
            errorMessage: emailErrorMessage,
            label: emailLabel,
            ref: emailInputRef,
          }}
        />
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid && " "}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
