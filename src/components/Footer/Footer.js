import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Made by -{" "}
        <a href="/">
          By Siddalingavva
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="/">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="/">
          <i className="fas fa-link fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;