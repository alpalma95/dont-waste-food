import React, { useContext } from "react";
import "../../styles/home.css";
import LandingPage from "./LandingPage.jsx";
import Dashboard from "./Dashboard.jsx";
import { Context } from "../store/appContext";

<<<<<<< HEAD
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="m-5">
      {store.userToken ? <Dashboard /> : <LandingPage />}
    </div>
  );
};
=======

export const Home = () => (
  <div>
    <SearchBar />
    <Recipes />
  </div>
);
>>>>>>> origin/patricia
