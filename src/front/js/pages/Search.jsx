import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Recipes from "../component/Recipes";
import SearchBar from "../component/SearchBar";

const Search = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchFavorites();
  }, []);
  return (
    <div className="m-5">
      <SearchBar />
      <Recipes />
    </div>
  );
};

export default Search;
