import React from "react";
import SearchBar from "../component/SearchBar";
import "../../styles/home.css";
import Recipes from "../component/Recipes";


export const Home = () => (
  <div>
    <SearchBar />
    <Recipes />
  </div>
);
