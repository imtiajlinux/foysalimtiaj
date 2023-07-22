import "./AboutContentStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../asscet/about.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>who am i?</h1>
        <p>
          im a react font-end developer. I create responsive secure websites{" "}
        </p>
        <Link to="/contact" className="btn">
          contact
        </Link>
      </div>

      <div className="right">
        <img src={aboutimg} alt=" aboutimg" />
      </div>
    </div>
  );
};

export default AboutContent;
