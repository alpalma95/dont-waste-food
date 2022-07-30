import React, { Component } from "react";

export const Footer = () => (
  <footer
    className="footer mt-auto pt-2 text-center mt-auto text-white"
    style={{ backgroundImage: "linear-gradient(to right, #187a26, #1e9c31)" }}
  >
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
