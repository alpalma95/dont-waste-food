import React from "react";
import "../../styles/userSettings.css";

/*
  On mount, fetch user details. IMPLEMENT ENDPOINT!! Need to get username and name

  If store.username OR name == "", then show the inputs. Othetwise, show the name / username and submit
  btn should be "change" or something. -> On click, will show the input and when the user sends the new
  information, the page should reload.

  On store: implement several put paths 
*/


const UserSettings = () => {
  return (
    <div className="container settings">
      <h1 className="settings__h1">Configure your account</h1>
      <h2 className="settings__h2">Your name</h2>
      <input type="text" />
      <button>Submit</button>
      <h2 className="settings__h2">Your username</h2>
      <input type="text" />
      <button>Submit</button>
      <h2 className="settings__h2">Change your password</h2>
      <input type="password" />
      <button>Submit</button>
    </div>
  );
};

export default UserSettings;
