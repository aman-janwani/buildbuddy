import React from "react";
import OneProjectCard from "./OneProjectCard";

const OneProjects = () => {
  return (
    <div className="text-oneText text-center">
      <h3 className="text-3xl font-bold uppercase">Projects</h3>
      <div className="flex space-x-10 px-8 py-10 mt-20 overflow-x-scroll">
        <OneProjectCard img="/test.svg" title={"Airbnb Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
        <OneProjectCard img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
        <OneProjectCard img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
        <OneProjectCard img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
        <OneProjectCard img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
        <OneProjectCard img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
        <OneProjectCard img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
      </div>
    </div>
  );
};

export default OneProjects;
