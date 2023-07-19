import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa";
import "./FooterStyle.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-container">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>manikgonj dhaka</p>
              <p>bangladesh</p>
            </div>
          </div>
          <div className="phone">
            <h2>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              ></FaPhone>
              {"    "}
              +88013031847
            </h2>
          </div>
          <div className="email">
            <h2>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              ></FaMailBulk>
              {"  "}
              foysal.imtiaj1@gmail.com
            </h2>
          </div>
        </div>
        <div className="right-container">
          <h2>About Myself </h2>
          <p>
            This is Foysal Imtiaj. A student and a big fan of technology.
            Currently I am learning React and other important technologies in
            web development. I enjoy coding.
          </p>
          <div className="social-logo">
            <FaFacebook
              size={30}
              style={{
                color: "#fff",
                marginRight: "1rem",
              }}
            ></FaFacebook>
            <FaTwitch
              size={30}
              style={{
                color: "#fff",
                marginRight: "1rem",
              }}
            ></FaTwitch>
            <FaTwitter
              size={30}
              style={{
                color: "#fff",
                marginRight: "1rem",
              }}
            ></FaTwitter>
            <FaYoutube
              size={30}
              style={{
                color: "#fff",
                marginRight: "1rem",
              }}
            ></FaYoutube>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
