import React, { useState } from "react";
import "./NavStyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>FOYSALIMTIAJ.</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
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

      <div className="hamburger" onClick={handelClick}>
        {click ? (
          <FaTimes size={25} style={{ color: "white" }} />
        ) : (
          <FaBars size={25} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;
