import React from "react";
import { render } from "react-dom";
import tableImage from "../../img/table.jpg"

const LandingPage = () =>{
  const styles = {
      backgroundImage: `url(${tableImage})`,
      backgroundSize:"cover",
      backgroundPosition: "center"
  };
    return(  
      <div className="container-fluid" >
        <div className = "image" style={styles}>
        <h1> The fridge is where magic happens!</h1>
       </div>
        <div className = "description">
          <h2> How it works</h2>
          <div className = "row"> 
      <div className = "col-sm">
      <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/000000/external-vegetable-healthy-lifestyle-icongeek26-outline-icongeek26.png"/>
      <h4>Your Ingredients</h4>
        <p>Use ingredients you already have on hand</p>
      </div>
      <div className = "col-sm">
        <img src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-recipe-kitchen-cooking-becris-lineal-becris.png"/>
        <h4>Find Recipes</h4>
          <p>Find and select the recipes you want to try.
            Save them to your library</p>
        </div>
      <div className = "col-sm">
      <img src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-cooking-coping-skills-becris-lineal-becris.png"/>
        <h4>
          Enjoy Cooking</h4>
          <p>Discover the recipes to try new dishes and make your family delicious meals</p>
        </div>
        </div>
        </div>
        </div>
)
};
export default LandingPage;