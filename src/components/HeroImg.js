import "./HeroImgStyle.css";
import React from "react";
import IntroImg from "../asscet/home-upper.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="heroImgHome" />
        <div className="content">
          <p>Hi, I AM A FRONT_END WEB LEARNER</p>
          <h1>React Developer.</h1>
          <div></div>

          <Link className="btn" to="/project">
            Projects
          </Link>
          <Link className="btn btn-light" to="/contact">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
