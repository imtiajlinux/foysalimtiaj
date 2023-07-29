import "./ContactFormStyle.css";

import React from "react";

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <form action="#">
        <div className="fastline">
          <input type="text" placeholder="Full Name" />
          <input type="number" placeholder="Mobile Number" />
        </div>
        <div className="scendline">
          <input type="email" name="" id="" placeholder="Email Address" />
        </div>
        <div className="lastline">
          <textarea
            name=""
            id="the messeg "
            cols="58"
            rows="7"
            placeholder="your message"
          ></textarea>
        </div>
        <div className="button">
          <button type="submit" className="btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
