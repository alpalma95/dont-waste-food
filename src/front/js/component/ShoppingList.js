import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/shoppingList.css";
import greenImage from "../../../img/green.jpg";

const ShoppingList = () => {
  const { store, actions } = useContext(Context);

  const linethroughHandler = (e) => {
    console.log("LINETHROUGH!!!", e.target.getAttribute("data-index"));
    actions.shoppingListLineToggle(e.target.getAttribute("data-index"));
  };

  const clearHandler = (e) => {
    actions.clearShoppingList();
  };

  let oldRecipeLabel = "";
  const shoppingListItem = store.shoppingList
    .sort((a, b) => {
      if (a.recipeLabel.toUpperCase() < b.recipeLabel.toUpperCase()) {
        return -1;
      } else {
        return 1;
      }
    })
    .map((item, index) => {
      const ing = (
        <div
          className={
            item.isChecked
              ? "shopping__recipe__ingredient line-through"
              : "shopping__recipe__ingredient"
          }
          key={index}
          onClick={linethroughHandler}
          data-index={index}
        >
          {`
${
  item.quantity == 0
    ? ""
    : item.quantity % 1 == 0
    ? Number(item.quantity).toFixed(0)
    : Number(item.quantity).toFixed(1)
} ${!item.measure || item.measure[0] == "<" ? "" : item.measure} ${item.food}
`}
        </div>
      );
      const recipeTitle = oldRecipeLabel !== item.recipeLabel && (
        <div className="shopping__recipe__label">{item.recipeLabel}</div>
      );
      oldRecipeLabel = item.recipeLabel;
      return (
        <>
          {recipeTitle}
          {ing}
        </>
      );
    });

  return (
    <div
      className="row p-5"
      style={{
        backgroundImage: `url(${greenImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-4 offset-lg-4 mt-3 shopping__list">
        <div>
          <h1>SHOPPING LIST</h1>
        </div>

        <div className="row">{shoppingListItem}</div>
        <button
          className="btn btn-danger d-block m-auto mt-4"
          onClick={clearHandler}
        >
          Clear!
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;

// https://papik.pro/en/uploads/posts/2022-06/1654814258_27-papik-pro-p-cute-drawing-on-the-phone-wallpaper-28.jpg
// ROSE COLOR PICKER #cf529f
