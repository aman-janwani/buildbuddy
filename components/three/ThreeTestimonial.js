import React from "react";
import ThreeTestimonialCard from "./ThreeTestimonialCard";

const ThreeTestimonial = ({ data }) => {
  return (
    <div className="flex justify-between">
      <div className="text-oneText text-center w-screen md:w-3/4 mt-32">
        <h3 className="text-3xl font-bold uppercase">Testimonials</h3>
        <div className="flex justify-between px-8 space-x-14 py-10 my-20 overflow-x-scroll">
          {data.testimonials.map((testimonial, index) => {
            return (
              <ThreeTestimonialCard
                key={index}
                name={testimonial.name}
                content={testimonial.description}
              />
            );
          })}
        </div>
      </div>
      <div className="md:w-1/4 hidden md:flex items-center md:bg-ThreeLight md:h-screen justify-center uppercase" />
    </div>
  );
};

export default ThreeTestimonial;
