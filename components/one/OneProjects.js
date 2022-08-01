import React from "react";
import OneProjectCard from "./OneProjectCard";

const OneProjects = ({data}) => {
  return (
    <div className="text-oneText text-center">
      <h3 className="text-3xl font-bold uppercase">Projects</h3>
      <div className="flex space-x-10 px-8 py-10 mt-20 overflow-x-scroll">
        {
          data.projects.map((item, index) => {
            return (
              <OneProjectCard key={index} img={item.image} title={item.name} description={item.description} github={item.githubLink} link={item.liveLink} />
            );
          }
          )
        }
      </div>
    </div>
  );
};

export default OneProjects;
