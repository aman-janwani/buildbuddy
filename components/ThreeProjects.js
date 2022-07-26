import React from "react";
import ThreeProjectCard from "./ThreeProjectCard";

const ThreeProjects = () => {
  return (
    <div className="text-ThreeDark bg-ThreeLight text-center">
    <h3 className="text-3xl font-bold uppercase pt-24">Projects</h3>
    <div className="flex space-x-20 px-8 py-10 mt-20 overflow-x-scroll">
          <ThreeProjectCard img="/test.svg" title={"Airbnb Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"}/>
          <ThreeProjectCard img="/test.svg" title={"Airbnb Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"}/>
          <ThreeProjectCard img="/test.svg" title={"Airbnb Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"}/>
          <ThreeProjectCard img="/test.svg" title={"Airbnb Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"}/>
          <ThreeProjectCard img="/test.svg" title={"Airbnb Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"}/>
        </div>
      </div>
  );
};

export default ThreeProjects;
