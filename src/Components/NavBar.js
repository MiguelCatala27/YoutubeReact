import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Icon from "./elements/OilPaintingAbout.png";

const NavBar = ({ setVideoShow }) => {
  const reset = () => {
    setVideoShow([]);
  };

  return (
    <nav>
      <NavLink to="/">
        <img
          onClick={reset}
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg"
          alt="Yt logo"
        />
        <NavLink to="default" />
      </NavLink>
      <NavLink to="/about" className="About">
        <img src={Icon} alt="icon" />
      </NavLink>
    </nav>
  );
};

export default NavBar;
