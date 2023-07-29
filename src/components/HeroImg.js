import "./HeroImgStyle.css";
import React from "react";
import IntroImg from "../asscet/home-upper.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  const test = "{ front-end web developer }";
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="heroImgHome" />
        <div className="content">
          {/* <p>Hi, I AM A FRONT_END WEB LEARNER</p> */}
          <p>
            hi ,{" "}
            <span
              style={{
                textTransform: "capitalize",
              }}
            >
              i'm FOYSAL
            </span>{" "}
            {"  "}
          </p>
          <h1>{test}</h1>
          <p>html . css . javascript . react</p>
          <div style={{ margin: "25px 0" }}>
            <Link className="btn" to="/project">
              Projects
            </Link>
            <Link className="btn btn-light" to="/contact">
              contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
