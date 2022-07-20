import React, { useEffect, useContext } from "react";
import PillFavorite from "../component/PillFavorite.jsx";
import FavoriteCategory from "../component/FavoriteCategory.jsx";
import { Context } from "../store/appContext.js";
import FavoritePillsSection from "../component/FavoritePillsSection.jsx";

const Favorites = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    if (store.favoriteItems.length === 0) {
      actions.fetchFavorites();
    }
  }, []);

  return (
    <div className="container mx-auto mt-3">
      <div className="row">
        <div
          className="col-12 col-md-2 d-flex flex-sm-row flex-md-column"
          style={{ height: "95%" }}
        >
          <FavoritePillsSection />
        </div>
        <div
          className="col-12 col-md-10"
          style={{ height: "80vh", overflow: "scroll" }}
        >
          {store.showBreakfast ? (
            <FavoriteCategory categoryName="Breakfast" />
          ) : (
            <></>
          )}
          {store.showLunch ? <FavoriteCategory categoryName="Lunch" /> : <></>}
          {store.showDinner ? (
            <FavoriteCategory categoryName="Dinner" />
          ) : (
            <></>
          )}
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
      </div>
    </div>
  );
};

export default Favorites;
