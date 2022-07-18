import React from "react";
import Recipes from "../component/Recipes";
import SearchBar from "../component/SearchBar";

const Search = () => {
  return (
    <div className="m-5">
      <SearchBar />
      <Recipes />
    </div>
  );
};

export default Search;
