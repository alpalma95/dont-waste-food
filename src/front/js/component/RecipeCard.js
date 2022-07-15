import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import AddFavorite from "./AddFavorite.jsx";

const RecipeCard = ({ item, index }) => {
  const { store, actions } = useContext(Context);
  const [addFavoriteShow, setAddFavoriteShow] = useState(false);

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

  const [starFav, setStarFav] = useState(false);

  const addToFavoriteHandler = () => {
    setStarFav((previousState) => {
      return !previousState;
    });
    setAddFavoriteShow(true);
    console.log(
      "Et maintenant, à toi de jouer Alvaro :P !!! (ces't moi, Al: mrd)"
    );
  };
  let star = starFav ? (
    <i className="bi bi-star-fill"></i>
  ) : (
    <i className="bi bi-star"></i>
  );

  const cardContent = (
    <>
      <img src={item.recipe.image} alt={item.recipe.label} />
      <div className="card-body">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#nutrientsRecipe" + index}
              aria-expanded="false"
              aria-controls={"nutrientsRecipe" + index}
            >
              <h5>Nutrients</h5>
            </button>
          </h2>
          <div
            id={"nutrientsRecipe" + index}
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
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
          </div>
        </div>
        <br />
        <div className="text-center">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed p-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#ingredientsRecipe" + index}
                aria-expanded="false"
                aria-controls={"ingredientsRecipe" + index}
              >
                <h5>Ingredients</h5>
              </button>
            </h2>
            <div
              id={"ingredientsRecipe" + index}
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body small text-start p-0">
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
              </div>
            </div>
          </div>
        </div>
        <div className="card-body d-flex justify-content-between pb-0">
          <span
            onClick={addToFavoriteHandler}
            style={{ fontSize: "30px", color: "#FFD300" }}
          >
            {star}
          </span>
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
        </div>
      </div>
    </>
  );

  return (
    <div className="col-12 col-sm-4 col-xl-3">
      <div className="card" style={{ marginTop: "40px" }}>
        <div
          style={{
            paddingTop: "10px",
            height: "90px",
          }}
        >
          <h5
            className="card-title text-center"
            style={
              {
                // fontSize: "20px",
                // overflow: "hidden",
                // textOverflow: "ellipsis",
              }
            }
          >
            {item.recipe.label}{" "}
          </h5>
        </div>
        {addFavoriteShow ? <AddFavorite setAddFavoriteShow={setAddFavoriteShow} item={item} /> : cardContent}
      </div>
    </div>
  );
};

export default RecipeCard;
