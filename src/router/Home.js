import React from "react";
import "./HomeStyle.css";
import HeroImg from "../components/HeroImg";
import ProjectCard from "../components/ProjectCard";
import projectCardData from "../components/ProjectData";

const Home = () => {
  return (
    <div>
      <HeroImg />
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

export default Home;
