import React, { useContext } from "react";
import { Context } from "../store/appContext";

const PillFavorite = ({ categoryName, showHandler, show }) => {
  const { store, actions } = useContext(Context);
  const displayCategory =
    categoryName === "Breakfast"
      ? store.showBreakfast
      : categoryName === "Lunch"
      ? store.showLunch
      : categoryName === "Dinner"
      ? store.showDinner
      : categoryName === "Snack"
      ? store.showSnack
      : store.showAll;

  let favoriteCategory;
  if (categoryName !== "All") {
    favoriteCategory = store.favoriteItems.filter(
      (x) => x.category_name === categoryName.toLowerCase()
    );
  } else {
    favoriteCategory = [...store.favoriteItems];
  }

  return (
    <div
      className={`btn btn-${
        displayCategory ? "primary" : "secondary"
      } d-block d-flex justify-content-between`}
      onClick={() => {
        showHandler();
      }}
    >
      {categoryName}{" "}
      <span className="badge bg-success">{favoriteCategory.length}</span>
    </div>
  );
};

export default PillFavorite;
