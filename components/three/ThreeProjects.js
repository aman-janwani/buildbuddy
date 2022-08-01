import React from "react";
import ThreeProjectCard from "./ThreeProjectCard";

const ThreeProjects = ({ data }) => {
  return (
    <div className="text-ThreeDark bg-ThreeLight text-center">
      <h3 className="text-3xl font-bold uppercase pt-24">Projects</h3>
      <div className="flex space-x-20 px-8 py-10 mt-20 overflow-x-scroll">
        {data.projects.map((project, index) => {
          return (
            <ThreeProjectCard
              key={index}
              title={project.name}
              description={project.description}
              img={project.image}
              link={project.liveLink}
              github={project.githubLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ThreeProjects;
