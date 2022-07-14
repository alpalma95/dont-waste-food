import React from "react";
import SearchBar from "../component/SearchBar";
import "../../styles/home.css";
import Recipes from "../component/Recipes";

export const Home = () => (
  <div className="m-5">
    <SearchBar />
    <Recipes />
  </div>
);
