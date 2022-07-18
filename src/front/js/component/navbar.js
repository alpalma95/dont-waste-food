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

  const removeTokenHandler = () => {
    localStorage.removeItem("jwt-token");
    actions.getToken();
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
    <nav
      className="navbar navbar-light mb-3 p-3 sticky-top d-flex justify-content-end"
      style={{ backgroundColor: "#009688" }}
    >
      <Link to="/" className="me-auto" style={{ textDecoration: "none" }}>
        <h1 className="navbar-brand" style={{ color: "white" }} href="#">
          Don't Waste My Food
        </h1>
      </Link>
      <Link to="/login">
        {store.userToken ? (
          <></>
        ) : (
          <button className="btn border-white m-1 text-white">Login</button>
        )}
      </Link>
      <Link to="/search">
        {!store.userToken ? (
          <></>
        ) : (
          <button className="btn border-white m-1 text-white">
            Search recipes
          </button>
        )}
      </Link>
      <Link to="/">
        {store.userToken ? (
          <button
            className="btn btn-outline-dark m-1"
            onClick={removeTokenHandler}
          >
            Log out
          </button>
        ) : (
          <></>
        )}
      </Link>
      <Link to="/signup">
        {store.userToken ? (
          <></>
        ) : (
          <button className="btn border-white m-1 text-white">Sign up</button>
        )}
      </Link>
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

            <Link to="/shoppinglist" style={{ textDecoration: "none" }}>
              <li className="d-flex justify-content-center">
                {store.shoppingList.length !== 0 && (
                  <span className="btn btn-dark mt-3">Shopping list</span>
                )}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
