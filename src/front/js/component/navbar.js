import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import UserIcon from "./UserIcon.jsx";
import logo from "../../../img/pick_me3.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const removeIngredientHandler = (e) => {
    const index = parseInt(e.target.parentNode.getAttribute("data-index"));
    actions.removeShoppingListByIndex(index);
    console.log("Delete ITEM", e);
  };

  const removeTokenHandler = () => {
    sessionStorage.removeItem("jwt-token");
    actions.getToken();
  };

  let list = store.shoppingList.map((item, index) => (
    <li
      className="list-group-item p-2 d-flex flex-row justify-content-between small"
      key={index}
    >
      <div>
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
      className="navbar navbar-expand-md navbar-light p-2 sticky-top d-flex justify-content-end"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--dark-green), var(--medium-green))",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="me-auto" style={{ textDecoration: "none" }}>
          <img className="logo" src={logo} />
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
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="text-end m-1">
              {store.userToken ? (
                <UserIcon />
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
                <button
                  className="btn border-white m-1 text-white w-100"
                  data-bs-toggle="collapse"
                  data-bs-target=".navbar-collapse.show"
                >
                  Search recipes
                </button>
              </Link>
            </li>
            <li className="text-end m-1">
              {store.userToken ? (
                <div className="dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle m-1 w-100"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                    style={{
                      marginRight: "40px",
                      boxShadow: "none",
                    }}
                  >
                    Shopping List
                    <span className="badge text-bg-secondary">
                      {store.shoppingList.length}
                    </span>
                  </button>

                  <div
                    className="list-group-flush dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton1"
                    style={{ marginTop: "-5px", marginLeft: "6px" }}
                  >
                    <ul
                      className="p-0"
                      style={{ overflowY: "scroll", maxHeight: "200px" }}
                    >
                      {list}
                    </ul>

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
                  </div>
                </div>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
