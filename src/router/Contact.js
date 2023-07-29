import React from "react";
import "./ContactStyle.css";
import ContactForm from "../components/ContactForm";

import Heroimg2 from "../components/Heroimg2";
import myphoto from "../asscet/developer.png";

const data = {
  name: "contact.",
  titel:
    " I'm always up for a chat about my work. Drop me a line and let's connect!",
  img: myphoto,
};

const Contact = () => {
  return (
    <div>
      <Heroimg2 data={data}></Heroimg2>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
