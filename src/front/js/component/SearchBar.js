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

  const dietRequirementHandler = (e) => {
    console.log("change option handler", searchOption.current.value);
    if (searchOption.current.value === "By Diet Requirements") {
      setdietReqDiv(true);
    } else {
      setdietReqDiv(false);
      actions.clearPillArr();
    }
  };

  const dietPills = (
    <div className="col-6 offset-3 bg-light p-4 rounded">
      {" "}
      {dietArr.map((diet, index) => {
        return <Pill diet={diet} key={index} />;
      })}{" "}
    </div>
  );

  return (
    <div className="row mt-5 pt-5">
      <div className="row">
        <div className="col-6 offset-3">
          <form onSubmit={searchBarHandler}>
            <div className="input-group mb-3">
              <select
                className="btn btn-dark dropdown-toggle"
                type="button"
                ref={searchOption}
                onChange={dietRequirementHandler}
              >
                <option>By Ingredients</option>
                <option>By Diet Requirements</option>
              </select>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
                placeholder="What's in your fridge"
                ref={searchRef}
              />
              <div className="input-group-append">
                <button className="btn btn-success" type="submit">
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
