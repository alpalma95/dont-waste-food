import React, { useContext, useEffect } from "react";
import FavoriteCard from "./FavoriteCard.jsx";
import { Context } from "../store/appContext";
const FavoriteCategory = ({ categoryName }) => {
  const { store, actions } = useContext(Context);
  const favoriteCategory = store.favoriteItems.filter(
    (x) => x.category_name === categoryName.toLowerCase()
  );
  useEffect(() => {
    console.log(favoriteCategory);
  }, []);

  return (
    <div>
      {favoriteCategory.length != 0 ? (
        <div className="container mb-2">
          <h2 className="text-danger mb-5">{categoryName}</h2>
          <div className="d-flex overflow-auto gap-5">
            {favoriteCategory.map((x, i) => (
              <FavoriteCard
                key={i}
                recipeUrl={x.recipe_url}
                recipeTitle={x.recipe_title}
                recipeId={x.recipe_id}
                imgUrl={x.image_url}
              />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FavoriteCategory;
