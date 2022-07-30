import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/form.css";

const Signup = () => {
  const { store, actions } = useContext(Context);
  const [emailValue, setEmailValue] = useState(``);
  const [usernameValue, setUsernameValue] = useState(``);
  const [nameValue, setNameValue] = useState(``);
  const [passwordValue, setPasswordValue] = useState(``);
  const [passwordConfirmedValue, setPasswordConfirmedValue] = useState(``);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const [showEmail, setShowEmail] = useState(false);
  const [showUsername, setShowUsername] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const setEmailValueHandler = (e) => {
    setEmailValue(e.target.value);
    setShowEmail(true);
    e.target.placeholder = "";
  };

  const setPasswordValueHandler = (e) => {
    setPasswordValue(e.target.value);
    setShowPassword(true);
    e.target.placeholder = "";
  };

  const setUsernameValueHandler = (e) => {
    setUsernameValue(e.target.value);
    setShowUsername(true);
    e.target.placeholder = "";
  };

  const setNameValueHandler = (e) => {
    setNameValue(e.target.value);
    setShowName(true);
    e.target.placeholder = "";
  };

  const setPasswordConfirmedValueHandler = (e) => {
    setPasswordConfirmedValue(e.target.value);
    setShowPassConfirm(true);
    e.target.placeholder = "";
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
    <div className="container">
      <div className="form-custom">
        <h1 className="">Create Account</h1>
        <label
          className={`${showEmail ? `bottomToTop` : `hidden`}`}
          htmlFor="email_input"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="Email"
          id="email_input"
          value={emailValue}
          onChange={setEmailValueHandler}
        />

        <label
          className={`${showUsername ? `bottomToTop` : `hidden`}`}
          htmlFor="username_input"
        >
          Username
        </label>
        <input
          type="text"
          placeholder="Username"
          id="username_input"
          value={usernameValue}
          onChange={setUsernameValueHandler}
        />

        <label
          className={`${showName ? `bottomToTop` : `hidden`}`}
          htmlFor="name_input"
        >
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          id="name_input"
          value={nameValue}
          onChange={setNameValueHandler}
        />

        <label
          className={`${showPassword ? `bottomToTop` : `hidden`}`}
          htmlFor="password_input"
        >
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          value={passwordValue}
          id="password_input"
          onChange={setPasswordValueHandler}
        />

        <label
          className={`${showPassConfirm ? `bottomToTop` : `hidden`}`}
          htmlFor="password_confirmed_input"
        >
          Confirm your password
        </label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={passwordConfirmedValue}
          id="password_confirmed_input"
          onChange={setPasswordConfirmedValueHandler}
        />
        <button className="btn btn-outline-dark" onClick={submitUserInfo}>
          Submit
        </button>
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default Signup;
