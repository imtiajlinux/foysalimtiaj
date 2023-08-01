import "./HeroImgStyle.css";
import React from "react";
import IntroImg from "../asscet/home-upper.jpg";
import { Link } from "react-router-dom";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import Myphoto from "../asscet/my photo in haji.png";

const HeroImg = () => {
  const test = "{ front-end web developer }";
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="heroImgHome" />
        <div className="content">
          {/* <p>Hi, I AM A FRONT_END WEB LEARNER</p> */}
          <img src={Myphoto} alt="photo" className="myphotoo" />
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
          <p>
            <FaHtml5 className="hero-icon" /> .{" "}
            <FaCss3Alt className="hero-icon" /> .{" "}
            <SiJavascript className="hero-icon" /> .{" "}
            <FaReact className="hero-icon" />
          </p>
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
