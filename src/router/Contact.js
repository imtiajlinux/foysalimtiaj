import React from "react";
import "./ContactStyle.css";
import Heroimg2 from "../components/Heroimg2";
import myphoto from "../asscet/myPhotoForContact.png";

const data = {
  name: "contact",
  titel: "this is how you can contact me ",
  img: myphoto,
};

const Contact = () => {
  return (
    <div>
      <Heroimg2 data={data}></Heroimg2>
    </div>
  );
};

export default Contact;
