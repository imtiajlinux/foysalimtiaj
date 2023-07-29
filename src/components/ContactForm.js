import "./ContactFormStyle.css";

import React from "react";

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <form action="https://formspree.io/f/mrgwebor" method="post">
        <div className="fastline">
          <input type="text" placeholder="Full Name" name="user-name" />
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobile-number"
          />
        </div>
        <div className="scendline">
          <input type="email" name="email" id="" placeholder="Email Address" />
        </div>
        <div className="lastline">
          <textarea
            name="message"
            id="the messeg "
            cols="58"
            rows="7"
            placeholder="your message"
          ></textarea>
        </div>
        <div className="button">
          <button type="submit" className="btn">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
