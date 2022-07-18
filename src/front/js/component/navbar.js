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
      className="navbar navbar-expand-md navbar-light p-3 sticky-top d-flex justify-content-end"
      style={{ backgroundColor: "#009688" }}
    >
      <div className="container-fluid">
        <Link to="/" className="me-auto" style={{ textDecoration: "none" }}>
          <h1 className="navbar-brand" style={{ color: "white" }} href="#">
            Don't Waste My Food
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-lg-0">
            <li className="text-end m-1">
              {store.userToken ? (
                <Link to="/">
                  <button
                    className="btn btn-outline-dark m-1 w-100"
                    onClick={removeTokenHandler}
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Log out
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button
                    className="btn border-white m-1 text-white w-100"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Login
                  </button>
                </Link>
              )}
            </li>
            <li className="text-end m-1">
              {store.userToken ? (
                <Link to="/favorites">
                  <button
                    className="btn border-white m-1 text-white w-100"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Favorites
                  </button>
                </Link>
              ) : (
                <Link to="/signup">
                  <button
                    className="btn border-white m-1 text-white w-100"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Sign up
                  </button>
                </Link>
              )}
            </li>
            <li className="text-end m-1">
              <Link to="/search">
                {!store.userToken ? (
                  <button
                    className="btn bg-danger border-white m-1 text-white w-100"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Search recipes
                  </button>
                ) : (
                  <button
                    className="btn border-white m-1 text-white w-100"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse.show"
                  >
                    Search recipes
                  </button>
                )}
              </Link>
            </li>
            <li className="text-end m-1">
              <div className="dropdown">
                <button
                  className="btn btn-dark dropdown-toggle m-1 w-100"
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
                        <span
                          className="btn btn-dark mt-3"
                          data-bs-toggle="collapse"
                          data-bs-target=".navbar-collapse.show"
                        >
                          Shopping list
                        </span>
                      )}
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
