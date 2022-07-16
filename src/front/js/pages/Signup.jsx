import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const { store, actions } = useContext(Context);
  const [emailValue, setEmailValue] = useState(``);
  const [usernameValue, setUsernameValue] = useState(``);
  const [nameValue, setNameValue] = useState(``);

  const [passwordValue, setPasswordValue] = useState(``);
  const [passwordConfirmedValue, setPasswordConfirmedValue] = useState(``);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const setEmailValueHandler = (e) => {
    setEmailValue(e.target.value);
  };

  const setPasswordValueHandler = (e) => {
    setPasswordValue(e.target.value);
  };

  const setUsernameValueHandler = (e) => {
    setUsernameValue(e.target.value);
  };

  const setNameValueHandler = (e) => {
    setNameValue(e.target.value);
  };

  const setPasswordConfirmedValueHandler = (e) => {
    setPasswordConfirmedValue(e.target.value);
  };

  const submitUserInfo = () => {
    if (emailValue && passwordValue) {
      fetch(`${process.env.BACKEND_URL}/api/signup`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
          username: usernameValue,
          name: nameValue,
          confirmed_password: passwordConfirmedValue,
        }),
      })
        .then(setRedirectToLogin(true))
        .catch((err) => {
          alert("Something went wrong! " + err.message);
        });
    }
  };

  return !redirectToLogin ? (
    <div className="container w-50 mx-auto  vh-100 d-flex flex-column">
      <h1 className="mt-5">Create an account!</h1>
      <label className="mt-5" htmlFor="email_input">
        Email:
      </label>
      <input
        type="text"
        placeholder="user@email.com"
        id="email_input"
        value={emailValue}
        onChange={setEmailValueHandler}
      />
      <br />
      <label htmlFor="username_input">Username:</label>
      <input
        type="text"
        placeholder="username"
        id="username_input"
        value={usernameValue}
        onChange={setUsernameValueHandler}
      />
      <br />
      <label htmlFor="name_input">Name:</label>
      <input
        type="text"
        placeholder="Jon"
        id="name_input"
        value={nameValue}
        onChange={setNameValueHandler}
      />
      <br />
      <label htmlFor="password_input">Password:</label>
      <input
        type="password"
        placeholder=""
        value={passwordValue}
        id="password_input"
        onChange={setPasswordValueHandler}
      />
      <br />
      <br />
      <label htmlFor="password_confirmed_input">Confirm your password:</label>
      <input
        type="password"
        placeholder=""
        value={passwordConfirmedValue}
        id="password_confirmed_input"
        onChange={setPasswordConfirmedValueHandler}
      />
      <button className="btn btn-outline-dark" onClick={submitUserInfo}>
        Submit
      </button>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default Signup;
