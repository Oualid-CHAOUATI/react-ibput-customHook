import { useEffect, useRef, useState } from "react";
import SimpleInput from "./SimpleInput";

const BasicForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(null);
  // const checkFormValidity = (string) => {
  //   const object = {
  //     emailIsValid,
  //     namelIsValid,
  //     lastNamelIsValid: lastNameIsValid,
  //   };

  //   console.log({ string });
  //   const keys = Object.keys(object).filter((key) => key === string);
  //   console.table(keys);
  //   let validity = true;

  //   for (let key in keys) {
  //     if (!object[key]) {
  //       validity = false;
  //       break;
  //     }
  //   }

  //   setFormIsValid(validity);
  // };
  const checkFormValidity = () => {};

  const verifyNameValidity = (name) => {
    return name.trim() !== "";
  };
  const verifyLastNameValidity = verifyNameValidity;
  const verifyEmailValidity = (email) => {
    return email.trim() !== "" && email.includes("@");
  };

  const nameErrorMessage = "name must not be empty ";
  const lastNameErrorMessage = "lastname must not be empty ";
  const emailErrorMessage = "email must not be empty and must include @ ";
  const nameLabel = "name";
  const lastNameLabel = "lastname";
  const emailLabel = "Email";
  const [nameIsValid, setNameIsValid] = useState(null);
  const nameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const [lastNameIsValid, setLastNameIsValid] = useState(null);
  const [emailIsValid, setEmailIsValid] = useState(null);

  useEffect(() => {
    setFormIsValid(nameIsValid && lastNameIsValid && emailIsValid);
  }, [nameIsValid, lastNameIsValid, emailIsValid]);
  const submitHandler = (e) => {
    e.preventDefault();
    //si nameIsValid =false => setToFalse => ne rien faire
    // si nameIsValid ==null => setToFasle => afficher l'erreur
    if (!nameIsValid) setNameIsValid(false);
    if (!lastNameIsValid) setLastNameIsValid(false);
    //dernier élément à vérifier donc return si
    if (!lastNameIsValid) setLastNameIsValid(false);
    if (!formIsValid) return;

    // else
    nameInputRef.current.value = "";
    lastNameInputRef.current.value = "";
    emailInputRef.current.value = "";

    setNameIsValid(null);
    setLastNameIsValid(null);
    setEmailIsValid(null);

    console.log("valid name");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <SimpleInput
          {...{
            setFormIsValid,
            checkFormValidity,
            verifyInputValidity: verifyNameValidity,
            valueIsValid: nameIsValid,
            setValueIsValid: setNameIsValid,
            errorMessage: nameErrorMessage,
            label: nameLabel,
            ref: nameInputRef,
          }}
        />
        <SimpleInput
          {...{
            setFormIsValid,
            checkFormValidity,
            verifyInputValidity: verifyLastNameValidity,
            valueIsValid: lastNameIsValid,
            setValueIsValid: setLastNameIsValid,
            errorMessage: lastNameErrorMessage,
            label: lastNameLabel,
            ref: lastNameInputRef,
          }}
        />
        <SimpleInput
          {...{
            setFormIsValid,
            checkFormValidity,
            verifyInputValidity: verifyEmailValidity,
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
