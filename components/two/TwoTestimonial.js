import React from "react";
import TwoTestimonialCard from "./TwoTestimonialCard";

const TwoTestimonial = ({data}) => {
  return (
    <div className="text-center mt-32">
      <h3 className="text-3xl font-bold uppercase">Testimonials</h3>
      <div className="flex justify-between border-t-2 my-36 border-b-2 px-8 overflow-x-scroll overflow-y-hidden space-x-24 border-twoTextDark">
        {data.testimonials.map((testimonial, index) => {
          return (
            <TwoTestimonialCard
              key={index}
              name={testimonial.name}
              content={testimonial.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TwoTestimonial;
