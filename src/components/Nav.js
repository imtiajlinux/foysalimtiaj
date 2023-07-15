import React from "react";
import "./NavStyle.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>FOYSALIMTIAJ</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
