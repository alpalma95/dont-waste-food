import React, { useEffect, useContext } from "react";
import PillFavorite from "../component/PillFavorite.jsx";
import FavoriteCategory from "../component/FavoriteCategory.jsx";
import { Context } from "../store/appContext.js";

const Favorites = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    if (store.favoriteItems.length === 0) {
      actions.fetchFavorites();
    }
  }, []);

  return (
    <div className="container mx-auto mt-3">
      <FavoriteCategory categoryName="Breakfast" />
      <FavoriteCategory categoryName="Lunch" />
      <FavoriteCategory categoryName="Dinner" />
      <FavoriteCategory categoryName="Snack" />
    </div>
  );
};

export default Favorites;
