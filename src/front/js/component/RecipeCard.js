import React, { useContext } from "react";
import { Context } from "../store/appContext";

const RecipeCard = ({ item, index }) => {
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
    <div className="col-12 col-sm-4 col-xl-3">
      <div className="card" style={{ marginTop: "40px" }}>
        <div
          style={{
            paddingTop: "10px",
            maxHeight: "100px",
            minHeight: "100px",
          }}
        >
          <h4 className="card-title text-center" style={{}}>
            {item.recipe.label}{" "}
          </h4>
        </div>
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

          {/* <div className="card-text fw-light">
            <div className="text-center">
              <h5>Nutrients</h5>
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
          </div> */}
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
                <div className="accordion-body">
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

            {/* <h5>Ingredients</h5> */}
          </div>
          {/* {item.recipe.ingredients.map((ing, index) => (
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
          ))} */}

          <div className="card-body d-flex justify-content-between pb-0">
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
            <span type="button">
              <a
                href="#"
                className="card-link"
                style={{ fontSize: "30px", color: "#FFD300" }}
              >
                <i className="bi bi-star"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
