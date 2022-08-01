import React from "react";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import PortfolioTemplate from "./PortfolioTemplate";

const DigitalPortfolios = () => {
  const Templates = [
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331438/one_e2lnbj.png",
      title: "one",
      avalible: true,
    }
    ,
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331435/two_dv4bnq.png",
      title: "two",
      avalible: true,
    }
    ,
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331434/three_mdrikd.png",
      title: "three",
      avalible: true,
    }
    ,
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331435/Four_umtgan.png",
      title: "four",
      avalible: false,
    }
    ,
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331434/Five_fpekhn.png",
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
