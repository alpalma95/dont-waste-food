import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PillFavorite from "./PillFavorite.jsx";

const FavoritePillsSection = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex flex-sm-row flex-md-column gap-3 flex-wrap pb-5">
      <PillFavorite
        categoryName="Breakfast"
        showHandler={actions.showBreakfastHandler}
        show={store.showBreakfast}
      />
      <PillFavorite
        categoryName="Lunch"
        showHandler={actions.showLunchHandler}
        show={store.showLunch}
      />
      <PillFavorite
        categoryName="Dinner"
        showHandler={actions.showDinnerHandler}
        show={store.showDinner}
      />
      <PillFavorite
        categoryName="Snack"
        showHandler={actions.showSnackHandler}
        show={store.showSnack}
      />
      <PillFavorite
        categoryName="All"
        showHandler={actions.showAllHandler}
        show={store.showAll}
      />
    </div>
  );
};

export default FavoritePillsSection;
