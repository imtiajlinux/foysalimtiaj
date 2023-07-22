import "./Heroimgstyle2.css";
import React from "react";
import intoimg from "../asscet/heroImg-2.jpg";

const Heroimg2 = (props) => {
  const { name, titel, img } = props.data;
  return (
    <div className="hero2">
      <div className="hero-img">
        <img src={intoimg} alt="intoimg" className="into-img2" />
      </div>
      <div className="heading">
        <img src={img} alt="img" />
        <h1>{name}</h1>
        <h4>{titel}</h4>
      </div>
    </div>
  );
};

export default Heroimg2;
