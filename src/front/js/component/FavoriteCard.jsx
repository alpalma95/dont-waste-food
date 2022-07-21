import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Spinner from "./Spinner.jsx";

const FavoriteCard = ({ recipeUrl, recipeTitle, recipeId, imgUrl }) => {
  const { store, actions } = useContext(Context);
  // const [image, setImage] = useState(imgUrl);

  // const fetchImage = (id) => {
  //   fetch(
  //     `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=e5010e00&app_key=0326e037783040d1e8513857ee63d982&field=image`
  //   )
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setImage(data.recipe.image);
  //     });
  // };

  // useEffect(() => {
  //   fetchImage(recipeId);
  // }, []);

  return (
    <div className="card col-5" style={{ width: "18rem" }}>
      <div
        style={{
          paddingTop: "10px",
          height: "90px",
        }}
      >
        <h5 className="card-title text-center">{recipeTitle} </h5>
      </div>

      <img src={imgUrl} className="card-img-top" alt="..." />

      <div className="card-body">
        <div className="d-flex">
          <span id={recipeId} style={{ fontSize: "30px", color: "#FFD300" }}>
            <i className="bi bi-star-fill d-inline-block"></i>
          </span>

          <button type="button" className="btn btn-dark d-block ms-auto">
            <a
              href={recipeUrl}
              target="_blank"
              className="card-link text-white"
              style={{ textDecoration: "none" }}
            >
              Full Recipe!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
