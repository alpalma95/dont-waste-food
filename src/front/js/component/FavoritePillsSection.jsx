import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PillFavorite from "./PillFavorite.jsx";

const FavoritePillsSection = () => {
  const {store, actions} = useContext(Context);

  return (
    <div className="d-flex flex-sm-row flex-md-column gap-3 flex-wrap">
      <PillFavorite categoryName="Breakfast" showHandler={actions.showBreakfastHandler} />
      <PillFavorite categoryName="Lunch" showHandler={actions.showLunchHandler} />
      <PillFavorite categoryName="Dinner"  showHandler={actions.showDinnerHandler}/>
      <PillFavorite categoryName="Snack" showHandler={actions.showSnackHandler}/>
      <PillFavorite categoryName="All" showHandler={actions.showAllHandler}/>
    </div>
  );
};

export default FavoritePillsSection;
