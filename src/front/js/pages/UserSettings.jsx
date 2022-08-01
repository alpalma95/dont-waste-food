import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/userSettings.css";
import DeleteBtns from "../component/DeteleBtns.jsx";

const UserSettings = () => {
  useEffect(() => {
    actions.getUserDetails();
  }, []);

  const { store, actions } = useContext(Context);
  const [borderError, setBorderError] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [showModifyName, setShowModifyName] = useState(
    store.userName ? true : false
  );
  const [showModifyUsername, setShowModifyUsername] = useState(
    store.userUsername ? true : false
  );
  const [showDelete, setShowDelete] = useState(false);

  const setNameValueHandler = (e) => {
    setNameValue(e.target.value);
  };

  const setUsernameValueHandler = (e) => {
    setUsernameValue(e.target.value);
  };

  const setUsername = () => {
    const token = sessionStorage.getItem("jwt-token");
    fetch(`${process.env.BACKEND_URL}/api/user/username`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ username: usernameValue }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        if (data === "Username already exists!") setBorderError("border-error");
        if (data === "Username modified") {
          actions.setUserUsernameStore(usernameValue);
        }
      });
  };

  return (
    <div className="container settings">
      <h1 className="settings__h1">Configure your account</h1>
      <h2 className="settings__h2">Your name</h2>
      <>
        {!store.userName ? (
          <>
            <input
              type="text"
              value={nameValue}
              onChange={setNameValueHandler}
            />
            <button
              onClick={() => {
                actions.setUserName(nameValue);
                actions.setUserNameStore(nameValue);
                // setShowModifyName(false);
              }}
            >
              Submit
            </button>
          </>
        ) : (
          <>
            <p>
              Hello, <strong>{store.userName}</strong>
            </p>
            <button onClick={() => actions.clearUserNameStore()}>
              Modify your name
            </button>
          </>
        )}
      </>
      <h2 className="settings__h2">Your username</h2>
      <>
        {!store.userUsername ? (
          <>
            <input
              className={`${borderError}`}
              type="text"
              value={usernameValue}
              onChange={setUsernameValueHandler}
            />
            <button
              onClick={() => {
                setUsername();
                setShowModifyUsername(false);
              }}
            >
              Submit
            </button>{" "}
          </>
        ) : (
          <>
            <p>
              Your username: <strong>{store.userUsername}</strong>
            </p>
            <button onClick={() => actions.clearUserUsernameStore()}>
              Modify your username
            </button>
          </>
        )}
      </>
      <h2 className="settings__h2">Delete your account</h2>
      {showDelete ? (
        <DeleteBtns setShowDelete={setShowDelete} />
      ) : (
        <button
          className="settings__delete-btn"
          onClick={() => setShowDelete(true)}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default UserSettings;
