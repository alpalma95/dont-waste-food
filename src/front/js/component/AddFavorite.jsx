import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddFavorite = ({ setAddFavoriteShow, item }) => {
  const { store, actions } = useContext(Context);
  const [listValue, setListValue] = useState();

  const setListValueHandler = (e) => {
    setListValue(e.target.value);
  };

  const setAddFavoriteShowHandler = () => {
    setAddFavoriteShow(false);
  };

  const newFavorite = {
    recipe_id: item.recipe.uri,
    recipe_url: item.recipe.url,
    recipe_title: item.recipe.label,
    category_name: listValue,
    recipe_img: item.recipe.image,
  };
  return (
    <div className="w-100 p-5">
      <h3 className="mb-3">Select category:</h3>
      <select
        className="form-select mb-5"
        aria-label="Default select example"
        onChange={setListValueHandler}
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>
      <div className="d-flex">
        <button
          className="btn btn-primary d-block"
          onClick={() => {
            actions.addFavorite(newFavorite);
            actions.sendToDatabase(newFavorite);
            setAddFavoriteShowHandler();
          }}
        >
          Confirm
        </button>
        <button
          className="btn btn-danger d-block ms-auto"
          onClick={setAddFavoriteShowHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddFavorite;
