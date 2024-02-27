import React from "react";
import "../scss/components/_navbar.scss";
import logo from "../images/navbar-logo.svg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      {/* <div className="bg-cycle blue-cycle"></div> */}
      <img alt="logo" src={logo} />
      <ul className="navbar__list">
        <Link to="/">
          <li className={props.activePage === "about" ? "active-page" : ""}>
            about
          </li>
        </Link>
        <Link to="/pricing">
          <li className={props.activePage === "pricing" ? "active-page" : ""}>
            pricing
          </li>
        </Link>
        <Link to="/signup">
          <li className={props.activePage === "sign up" ? "active-page" : ""}>
            sign up
          </li>
        </Link>
        <Link to="/login">
          <li className={props.activePage === "log in" ? "active-page" : ""}>
            log in
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
