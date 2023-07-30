import "./ContactFormStyle.css";

import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || mobileNumber === "" || email === "" || message === "") {
      alert("Please fill out all of the fields before submitting.");
    } else {
      const form = document.querySelector("form");
      form.submit();
    }
  };

  return (
    <div className="ContactForm">
      <form action="https://formspree.io/f/mrgwebor" method="post">
        {/* <form action="#" method="post"> */}
        <div className="fastline">
          <input
            type="text"
            placeholder="Full Name"
            name="user-name"
            onChange={setName}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            name="mobile-number"
            onChange={setMobileNumber}
          />
        </div>
        <div className="scendline">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            onChange={setEmail}
          />
        </div>
        <div className="lastline">
          <textarea
            name="message"
            id="the messeg "
            cols="58"
            rows="7"
            placeholder="your message"
            onChange={setMessage}
          ></textarea>
        </div>
        <div className="button">
          <button type="submit" className="btn" onClick={handleSubmit}>
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
