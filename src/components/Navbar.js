import React from "react";
import { NavLink } from "react-router-dom";
import StudioGhibliLogo from "../assets/images/studio-ghibli-logo.svg";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <h1 className="nav-text">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://ghibliapi.herokuapp.com/"
        >
          Studio Ghibli
        </a>
      </h1>
      <img className="nav-image" src={StudioGhibliLogo} alt="" />
      <NavLink exact to="/" className="nav-link" activeClassName="nav-active">
        Films
      </NavLink>
      <NavLink
        to="/locations"
        className="nav-link"
        activeClassName="nav-active"
      >
        Locations
      </NavLink>
      <NavLink to="/people" className="nav-link" activeClassName="nav-active">
        People
      </NavLink>
      <NavLink to="/species" className="nav-link" activeClassName="nav-active">
        Species
      </NavLink>
    </nav>
  );
};

export default Navbar;
