import React, { useState, useRef, useContext } from "react";
import { Context } from "../store/appContext";
import Pill from "./Pill";

const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const searchRef = useRef();
  const searchOption = useRef();
  const [dietReqDiv, setdietReqDiv] = useState(false);
  const dietArr = [
    {
      key: "vegetarian",
      name: "Vegetarian",
    },
    {
      key: "vegan",
      name: "Vegan",
    },
    {
      key: "gluten-free",
      name: "Gluten Free",
    },
    {
      key: "wheat-free",
      name: "Wheat Free",
    },
    {
      key: "dairy-free",
      name: "Lactose Free",
    },
    {
      key: "sugar-conscious",
      name: "Low Sugar",
    },
    {
      key: "pork-free",
      name: "Pork Free",
    },
    {
      key: "egg-free",
      name: "Egg Free",
    },
    {
      key: "peanut-free",
      name: "Peanut Free",
    },
  ];

  const searchBarHandler = (e) => {
    e.preventDefault();
    console.log("Testing Search Bar", searchOption.current.value);
    actions.searchInputHandler(searchRef.current.value);
    actions.searchAPI();
  };

  const onFocusSearchBarHandler = () => {
    searchRef.current.value = "";
  };

  const dietRequirementHandler = (e) => {
    console.log("change option handler", searchOption.current.value);
    if (searchOption.current.value === "Diet") {
      setdietReqDiv(true);
    } else {
      setdietReqDiv(false);
      actions.clearPillArr();
    }
  };

  const dietPills = (
    <div className="col-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-6 offset-lg-3 pl-3 rounded">
      {" "}
      {dietArr.map((diet, index) => {
        return <Pill diet={diet} key={index} />;
      })}{" "}
    </div>
  );

  return (
    <div className="row">
      <div className="row">
        <div className="col-12 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
          <form onSubmit={searchBarHandler}>
            <div className="input-group mb-3">
              <select
                className="btn btn-dark dropdown-toggle"
                style={{
                  backgroundColor: "#187a26",
                  color: "white",
                  boxShadow: "none",
                  border: "0",
                }}
                type="button"
                ref={searchOption}
                onChange={dietRequirementHandler}
              >
                <option>Ingredients</option>
                <option>Diet</option>
              </select>
              <input
                type="text"
                className="form-control"
                style={{ boxShadow: "none" }}
                aria-label="Text input with dropdown button"
                placeholder="What's in your fridge"
                ref={searchRef}
                onFocus={onFocusSearchBarHandler}
              />
              <div className="input-group-append">
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#187a26",
                    color: "white",
                    boxShadow: "none",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                  }}
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        {dietReqDiv && dietPills}
      </div>
    </div>
  );
};

export default SearchBar;
