import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ShoppingList = () => {
  const { store, actions } = useContext(Context);
  const mainContainer = {
    boxShadow: "7px 7px 12px 0px #006a5b",
    padding: "50px",
    borderTopLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    // backgroundColor: "#009688",
    backgroundImage:
      "url(https://papik.pro/en/uploads/posts/2022-06/1654814258_27-papik-pro-p-cute-drawing-on-the-phone-wallpaper-28.jpg)",
    opacity: "0.9",
  };

  const container = {
    marginTop: "5px",
    borderBottom: "1px solid white",
    padding: "6px",
    color: "black",
  };
  const title = {
    textAlign: "center",
    marginBottom: "40px",
    color: "black",
  };

  const list = {
    maxHeight: "310px",
    overflowY: "scroll",
  };

  const shoppingListItem = store.shoppingList.map((item, index) => {
    return (
      <div style={container} key={index}>
        {item.quantity + " "} {item.measure + " "} {item.food}
      </div>
    );
  });

  return (
    <div className="row p-5">
      <div
        className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-4 offset-lg-4 mt-3"
        style={mainContainer}
      >
        <div>
          <h1 style={title}>SHOPPING LIST</h1>
        </div>

        <div className="row" style={list}>
          {shoppingListItem}
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;

// https://papik.pro/en/uploads/posts/2022-06/1654814258_27-papik-pro-p-cute-drawing-on-the-phone-wallpaper-28.jpg
// ROSE COLOR PICKER #cf529f
