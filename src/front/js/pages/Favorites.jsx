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
      {store.showBreakfast ? (
        <FavoriteCategory categoryName="Breakfast" />
      ) : (
        <></>
      )}
      {store.showLunch ? <FavoriteCategory categoryName="Lunch" /> : <></>}
      {store.showDinner ? <FavoriteCategory categoryName="Dinner" /> : <></>}
      {store.showSnack ? <FavoriteCategory categoryName="Snack" /> : <></>}
      {store.showAll ? (
        <>
          <FavoriteCategory categoryName="Breakfast" />
          <FavoriteCategory categoryName="Lunch" />
          <FavoriteCategory categoryName="Dinner" />
          <FavoriteCategory categoryName="Snack" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Favorites;
