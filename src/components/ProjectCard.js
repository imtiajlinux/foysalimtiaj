import "./Project-cardStyle.css";
import React from "react";

import { NavLink } from "react-router-dom";

const ProjectCard = ({ imgsrc, titel, text, view, source }) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="project img 1" />
      <h2 className="project-titel">{titel}</h2>
      <div className="pro-ditails">
        <p>{text}</p>
        <div className="pro-btn">
          <NavLink to={view} className="btn">
            view
          </NavLink>
          <NavLink to={source} className="btn btn-light">
            source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
