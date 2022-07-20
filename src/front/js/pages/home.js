import React, { useContext } from "react";
import "../../styles/home.css";
import LandingPage from "./LandingPage.jsx";
import Dashboard from "./Dashboard.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return <div>{store.userToken ? <Dashboard /> : <LandingPage />}</div>;
};
