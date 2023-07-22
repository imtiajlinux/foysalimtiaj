import React from "react";
import "./AboutStyle.css";
import Heroimg2 from "../components/Heroimg2";
import me from "../asscet/red&cyan me.png";
import AboutContent from "../components/AboutContent";

const data = {
  name: "about",
  titel:
    "I'm a lifelong learner who is always looking for new ways to improve my skills, and I'm always looking for ways to stay up-to-date on the latest trends.",
  img: me,
};

const About = () => {
  return (
    <div>
      <Heroimg2 data={data}></Heroimg2>
      <AboutContent></AboutContent>
    </div>
  );
};

export default About;
