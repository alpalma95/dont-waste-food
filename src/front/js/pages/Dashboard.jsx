import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const Dashboard = () => {
  const {store, actions} = useContext(Context);
  

  return (
    <div className="container-fluid pt-5 d-flex justify-content-center">
      <h1>I'm the dashboard!</h1>
      <p>I should appear if the user is logged in.</p>
      <h2>Quick searchbar</h2>
      <h2>Featured recipes</h2>
    </div>
  );
};

export default Dashboard;
