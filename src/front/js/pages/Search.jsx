import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Recipes from "../component/Recipes";
import SearchBar from "../component/SearchBar";
import Modal from "../component/Modal.jsx";

const Search = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.userToken) actions.fetchFavorites();

    actions.getUserDetails();
  }, []);
  return (
    <div className="m-5">
      <Modal />
      <SearchBar />
      <Recipes />
    </div>
  );
};

export default Search;
