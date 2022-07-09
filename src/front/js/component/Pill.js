import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const Pill = (props) => {
  const { store, actions } = useContext(Context);
  // const element = store.pillDietInput.find((elem) => {
  //   return elem === props.diet.key
  // })
  // let pillExist = false
  // if( element === undefined){
  //   pillExist = false;
  // }  else {
  //   pillExist = true;
  // }
  const [pillState, setPillState] = useState(false);
  const pillHandler = () => {
    setPillState((prevState) => {
      return !prevState;
    });
    actions.updatePillArr(props.diet.key);
  };

  return (
    <span
      className={`badge rounded-pill ${pillState ? "bg-success" : "bg-info"}`}
      onClick={pillHandler}
      style={{ cursor: "pointer" }}
    >
      {props.diet.name}
    </span>
  );
};

export default Pill;
