import React from "react";
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
    </nav>
  );
};

export default Navbar;
