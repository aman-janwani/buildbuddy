import Image from "next/image";
import React from "react";
import TwoProjectsCard from "./TwoProjectsCard";

const TwoProjects = ({data}) => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-3xl font-bold my-32">Projects</h1>
        <div className="flex justify-between px-8  border-t-2 border-b-2 overflow-x-scroll overflow-y-hidden space-x-24 border-twoTextDark">

          {data.projects.map((project, index) => {
            return (
              <TwoProjectsCard
                key={index}
                title={project.name}
                description={project.description}
                img={project.image}
                link={project.liveLink}
                github={project.githubLink}
              />
            );
          }
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoProjects;
