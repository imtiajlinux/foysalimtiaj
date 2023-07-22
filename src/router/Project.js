import React from "react";
import "./ProjectStyle.css";
import Heroimg2 from "../components/Heroimg2";
import coddingWithLaptop from "../asscet/coddingWithLaptop.png";
import ProjectCard from "../components/ProjectCard";
import projectCardData from "../components/ProjectData";

const data = {
  name: "project",
  titel: "there some project that have i done by my self",
  img: coddingWithLaptop,
};

const Project = () => {
  return (
    <div>
      <Heroimg2 data={data}></Heroimg2>
      <div className="project-section">
        <h1 className="project-header">project</h1>
        <div className="project-container">
          {projectCardData.map((val, ind) => {
            return (
              <ProjectCard
                key={ind}
                imgsrc={val.imgsrc}
                text={val.text}
                titel={val.titel}
                view={val.view}
                source={val.source}
              ></ProjectCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
