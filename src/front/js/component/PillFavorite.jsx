import React, { useContext } from "react";
import { Context } from "../store/appContext";

const PillFavorite = ({ categoryName, showHandler }) => {
  const { store, actions } = useContext(Context);
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
      className="btn btn-primary d-block d-flex justify-content-between"
      onClick={showHandler}
    >
      {categoryName}{" "}
      <span className="badge bg-secondary">{favoriteCategory.length}</span>
    </div>
  );
};

export default PillFavorite;
