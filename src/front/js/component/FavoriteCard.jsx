import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Spinner from "./Spinner.jsx";

const FavoriteCard = ({ recipeUrl, recipeTitle, recipeId, imgUrl }) => {
  const { store, actions } = useContext(Context);

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
          <span style={{ fontSize: "30px", color: "#FFD300" }}>
            <i
              id={recipeId}
              onClick={(e) => {
                actions.deleteFavorite(e);
                actions.deleteFavoriteDatabase(e);
              }}
              className="bi bi-star-fill d-inline-block"
            ></i>
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
