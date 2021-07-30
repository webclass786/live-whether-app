import React from "react";
import "./NavInshorts.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavInshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Apple_News_icon_%28iOS%29.png/600px-Apple_News_icon_%28iOS%29.png"
        height="80%"
        alt="logo"
      />
    </div>
  );
};

export default NavInshorts;