// import { useRef, useState } from "react";

// const SimpleInput = (props) => {
//   const nameInputRef = useRef();
//   const emailInputRef = useRef();
//   const [nameIsValid, setNameIsValid] = useState(null);
//   const [emailIsValid, setEmailIsValid] = useState(null);
//   const [formIsValid, setFormIsValid] = useState(false);

//   const verifyNameValidity = (name) => {
//     if (name.trim() === "") {
//       setNameIsValid(false);
//       setFormIsValid(false);
//     } else {
//       setNameIsValid(true);
//       setFormIsValid(emailIsValid);
//     }
//   };

//   const verifyEmailValidity = (email) => {
//     if (email.trim() === "" || !email.includes("@")) {
//       setEmailIsValid(false);
//       setFormIsValid(false);
//     } else {
//       setEmailIsValid(true);
//       setFormIsValid(nameIsValid);
//     }
//   };

//   const blurHandlerName = (e) => {
//     const value = e.target.value;
//     verifyNameValidity(value);
//   };
//   const blurHandlerEmail = (e) => {
//     const value = e.target.value;
//     verifyEmailValidity(value);
//   };

//   const changeHandlerName = (e) => {
//     const value = e.target.value;
//     verifyNameValidity(value);
//   };
//   const changeHandlerEmail = (e) => {
//     const value = e.target.value;
//     verifyEmailValidity(value);
//   };
//   const submitHandler = (e) => {
//     e.preventDefault();
//     //si nameIsValid =false => setToFalse => ne rien faire
//     // si nameIsValid ==null => setToFasle => afficher l'erreur
//     if (!nameIsValid) setNameIsValid(false);
//     if (!emailIsValid) return setEmailIsValid(false);
//     nameInputRef.current.value = "";
//     emailInputRef.current.value = "";
//     setNameIsValid(null);
//     setEmailIsValid(null);

//     console.log("valid name");
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       <div className="form-control" invalid={nameIsValid === false && ""}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           onBlur={blurHandlerName}
//           onChange={changeHandlerName}
//           ref={nameInputRef}
//         />
//         {nameIsValid === false && <p>Name must not be empty</p>}
//       </div>
//       <div className="form-control" invalid={emailIsValid === false && ""}>
//         <label htmlFor="name">Your Email</label>
//         <input
//           type="text"
//           id="name"
//           onBlur={blurHandlerEmail}
//           onChange={changeHandlerEmail}
//           ref={emailInputRef}
//         />
//         {emailIsValid === false && (
//           <p>email must not be not empty nad must include @</p>
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
