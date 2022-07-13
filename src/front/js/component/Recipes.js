import React, { useState, useEffect, useContext } from "react";
import RecipeCard from "./RecipeCard";
import { Context } from "../store/appContext";

const Recipes = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.searchAPI(store.searchInput);
  }, [store.searchInput]);

  if (store.error) {
    return <>{store.error.message}</>;
  } else if (!store.isLoaded || store.items.length === 0) {
    return <>loading....</>;
  } else if (store.items.length != 0) {
    console.table(store.items);
    return (
      <div className="row">
        {store.items.map((item, index) => (
          <RecipeCard item={item} key={item.recipe.uri} index={index} />
        ))}
        ;
      </div>
    );
  }
};

export default Recipes;
