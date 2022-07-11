import React, { useContext } from "react";
import { Context } from "../store/appContext";

const RecipeCard = ({ item }) => {
  const { store, actions } = useContext(Context);
  const nutrientsArr = ["CA", "CHOLE", "FAT", "FIBTG", "SUGAR", "NA", "FE"];
  const checkBoxHandler = (e) => {
    console.log("tick", e);
    if (e.target.checked) {
      const ingredient = {
        ingredientIndex: e.target.getAttribute("data-recipe-ingredient-index"),
        ingredientText: e.target.getAttribute("data-recipe-ingredient-text"),
        recipeUri: e.target.getAttribute("data-recipe-uri"),
      };

      actions.addShoppingList(ingredient);
      console.log(store.shoppingList);
    } else {
      const ingredient = {
        ingredientIndex: e.target.getAttribute("data-recipe-ingredient-index"),
        ingredientText: e.target.getAttribute("data-recipe-ingredient-text"),
        recipeUri: e.target.getAttribute("data-recipe-uri"),
      };

      actions.removeShoppingList(ingredient);
      console.log(store.shoppingList);
    }
  };

  const addToShopList = () => {
    console.log("adding");
  };
  return (
    <div className="col-6 offset-3">
      <div className="card" style={{ marginTop: "40px" }}>
        <div style={{ paddingTop: "20px", paddingLeft: "20px" }}>
          <h2 className="card-title text-center">{item.recipe.label} </h2>
        </div>
        <img
          src={item.recipe.image}
          alt={item.recipe.label}
          style={{ padding: "10px 60px" }}
        />
        <div className="card-body">
          <div className="card-text fw-light">
            <div className="text-center">
              <h3>Nutrients</h3>
            </div>
            <ul>
              {nutrientsArr.map((nut, index) => {
                return (
                  <li className="nutrients-list" key={index}>
                    {item.recipe.totalNutrients[nut].label +
                      ": " +
                      item.recipe.totalNutrients[nut].quantity.toFixed(0) +
                      " " +
                      item.recipe.totalNutrients[nut].unit}
                  </li>
                );
              })}
            </ul>
          </div>
          <br />
          <div className="text-center">
            <h3>Ingredients</h3>
          </div>
          {item.recipe.ingredients.map((ing, index) => (
            <div
              className="custom-control custom-checkbox list-group-item"
              key={index}
            >
              <label
                className="custom-control-label"
                htmlFor={`${item.recipe.uri}${index}`}
              >
                {ing.text}
              </label>
              <div className="d-flex justify-content-end">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={`${item.recipe.uri}${index}`}
                  onClick={checkBoxHandler}
                  data-recipe-uri={item.recipe.uri}
                  data-recipe-ingredient-index={index}
                  data-recipe-ingredient-text={ing.text}
                />
              </div>
            </div>
          ))}

          <div className="card-body d-flex justify-content-around">
            <button type="button" className="btn btn-dark">
              <a
                href={item.recipe.url}
                target="_blank"
                className="card-link text-white"
                style={{ textDecoration: "none" }}
              >
                Full Recipe!
              </a>
            </button>
            {/* <button type="button" className="btn btn-dark">
              <a
                href="#"
                className="card-link text-white"
                onClick={addToShopList}
                style={{ textDecoration: "none" }}
              >
                Add To Shopping List
              </a>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
