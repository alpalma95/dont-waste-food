import React, { Component } from "react";
import "../../styles/footer.css";
import logo from "../../../img/pick_me3.png";

export const Footer = () => (
  <footer className="footer mt-auto text-center mt-auto text-white">
    <div className="row g-0">
      <div className="col-4 company">
        <h5>Company</h5>
        <ul>
          <li>Important Information</li>
          <li>Our Story</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="col-4">
        <img className="logo" src={logo} />
        <p>Get social - Join us!</p>
        <div className="icons">
          <i class="bi bi-instagram"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
        </div>
      </div>

      <div className="col-4 suscribe">
        <h5>Get the latest news</h5>
        <input type="text" placeholder="Email Address" />
        <input type="submit" value="Suscribe" />
      </div>
    </div>
    <p style={{ color: "black" }}>
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <a style={{ color: "white" }} href="https://github.com/Jules-11">
        @Jules-11
      </a>
      <span> & </span>
      <a style={{ color: "white" }} href="https://github.com/sardinhas12">
        @sardinhas12
      </a>
      <span> & </span>
      <a style={{ color: "white" }} href="https://github.com/alpalma95">
        @alpalma95
      </a>
    </p>
  </footer>
);
