import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const removeIngredientHandler = (e) => {
    const index = parseInt(e.target.parentNode.getAttribute("data-index"));
    actions.removeShoppingListByIndex(index);
    console.log("Delete ITEM", e);
  };

  console.log("NEW INGREDIENTS", store.shoppingList);
  let list = store.shoppingList.map((ingredient, index) => (
    <li
      className="list-group-item p-0 d-flex flex-row align-items-center justify-content-between"
      key={index}
    >
      <div>{ingredient.ingredientText}</div>
      <div onClick={removeIngredientHandler} data-index={index}>
        <i className="bi bi-trash3"></i>
      </div>
    </li>
  ));

  if (store.shoppingList.length === 0) {
    list = <li className="text-center">Add Only what you need!</li>;
  }

  return (
    <nav className="navbar navbar-light bg-light mb-3 p-3 fixed-top">
      <a className="navbar-brand" href="#">
        Don't Waste My Food
      </a>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            aria-expanded="true"
            style={{ marginRight: "40px", boxShadow: "none" }}
          >
            Shopping List
            <span className="badge text-bg-secondary">
              {store.shoppingList.length}
            </span>
          </button>

          <ul
            className="list-group-flush dropdown-menu dropdown-menu-right p-4"
            aria-labelledby="dropdownMenuButton1"
          >
            {list}

            <li className="d-flex justify-content-center">
              {store.shoppingList.length !== 0 && (
                <Link className="btn btn-secondary mt-4">Shopping List</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
