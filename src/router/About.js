import React from "react";
import "./AboutStyle.css";
import Heroimg2 from "../components/Heroimg2";
import me from "../asscet/red&cyan me.png";

const data = {
  name: "about",
  titel:
    "this is all about me i am here to tell you about me . my hobbe and happyness",
  img: me,
};

const About = () => {
  return (
    <div>
      <Heroimg2 data={data}></Heroimg2>
    </div>
  );
};

export default About;
