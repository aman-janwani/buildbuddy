import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import PortfolioTemplate from "./PortfolioTemplate";

const DigitalPortfolios = () => {
  const Templates = [
    {
      image: "/images/one.png",
      title: "one",
      avalible: true,
    }
    ,
    {
      image: "/images/two.png",
      title: "two",
      avalible: true,
    }
    ,
    {
      image: "/images/three.png",
      title: "three",
      avalible: true,
    }
    ,
    {
      image: "/images/Four.png",
      title: "four",
      avalible: false,
    }
    ,
    {
      image: "/images/Five.png",
      title: "five",
      avalible: false,
    }
  ];

  return (
    <div className="bg-buildbuddyYellowLight px-8 py-8 text-buildbuddyPurple">
      <div>
        <h1 className="text-3xl font-bold">Why Build Buddy?</h1>
      </div>
      <div className="space-y-4 px-5 my-10">
        <h2 className="font-semibold text-2xl">
          Responsive <span className="font-bold">Digital Portfolio</span>
        </h2>
        <h2 className="font-semibold text-2xl">Content Changing</h2>
      </div>
      <div>
        <h2 className="font-bold text-2xl flex items-center mt-16">
          Templates
          <HiArrowRight className="text-buildbuddyPurple mx-3" />
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5">
        {Templates.map((template, index) => {
          return <PortfolioTemplate avalible={template.avalible} image={template.image} slug={template.title} key={index} />;
        })}
      </div>
    </div>
  );
};

export default DigitalPortfolios;
