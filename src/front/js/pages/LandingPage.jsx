import React from "react";
import { render } from "react-dom";
import tableImage from "../../../img/table.jpg";

const LandingPage = () => {
  const styles = {
    backgroundImage: `url(${tableImage})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <div className="image" style={styles}>
      <div className="box">
        <h1>The fridge is where magic happens</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="text">
                Your Ingredients
                <span className="description">
                  {" "}
                  Use ingredients you already have on hand
                </span>
              </div>
            </div>
            <div className="col-sm">
              <div className="text">
                Find Recipes
                <span className="description">
                  {" "}
                  Find and select the recipes you want to try. Save them to your
                  library
                </span>
              </div>
            </div>
            <div className="col-sm">
              <div className="text">
                Enjoy your meal
                <span className="description">
                  {" "}
                  Discover the recipes to try new dishes and make your family
                  delicious meals
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
