import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/modal.css";

const Modal = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className={`modal--custom ${store.showModal ? `block` : `hidden`}`}>
      <span className="modal__close-btn" onClick={actions.showModalHandler}>
        ❌
      </span>
      <h3>Sign up or login for adding favorites!</h3>
    </div>
  );
};

export default Modal;
