import Image from "next/image";
import React from "react";
import TwoProjectsCard from "./TwoProjectsCard";

const TwoProjects = () => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-3xl font-bold my-32">Projects</h1>
        <div className="flex justify-between px-8  border-t-2 border-b-2 overflow-x-scroll overflow-y-hidden space-x-24 border-twoTextDark">
          <TwoProjectsCard  img="/test.svg" title={"Airbnb Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
          <TwoProjectsCard  img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
          <TwoProjectsCard  img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
          <TwoProjectsCard  img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
          <TwoProjectsCard  img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
          <TwoProjectsCard  img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
          <TwoProjectsCard  img="/test.svg" title={"Amazon Clone"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} github={"https://github.com"} link={"https://amanjanwani.vercel.app"} />
        </div>
      </div>
    </div>
  );
};

export default TwoProjects;
