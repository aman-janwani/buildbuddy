import React from "react";
import ThreeTestimonialCard from "./ThreeTestimonialCard";

const ThreeTestimonial = () => {
  return (
    <div className="flex justify-between">
      <div className="text-oneText text-center max-w-[23rem] lg:max-w-4xl mt-32">
        <h3 className="text-3xl font-bold uppercase">Testimonials</h3>
        <div className="flex justify-between px-8 space-x-14 py-10 my-20 overflow-x-scroll">
          <ThreeTestimonialCard
            img="/social/11.svg"
            name={"Aman Janwanni"}
            content={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
            }
          />
          <ThreeTestimonialCard
            img="/social/11.svg"
            name={"Aman Janwanni"}
            content={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
            }
          />
          <ThreeTestimonialCard
            img="/social/11.svg"
            name={"Aman Janwanni"}
            content={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
            }
          />
          <ThreeTestimonialCard
            img="/social/11.svg"
            name={"Amazon Clone"}
            content={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
            }
          />
          <ThreeTestimonialCard
            img="/social/11.svg"
            name={"Amazon Clone"}
            content={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
            }
          />
        </div>
      </div>
      <div className="md:w-1/4 hidden md:flex items-center md:bg-ThreeLight md:h-screen justify-center uppercase" />
    </div>
  );
};

export default ThreeTestimonial;
