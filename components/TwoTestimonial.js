import React from "react";
import TwoTestimonialCard from "./TwoTestimonialCard";

const TwoTestimonial = () => {
  return (
    <div className="text-center mt-32">
      <h3 className="text-3xl font-bold uppercase">Testimonials</h3>
      <div className="flex justify-between border-t-2 my-36 border-b-2 px-8 overflow-x-scroll overflow-y-hidden space-x-24 border-twoTextDark">
        <TwoTestimonialCard
          img="/social/11.svg"
          name={"Aman Janwanni"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
          }
        />
        <TwoTestimonialCard
          img="/social/11.svg"
          name={"Amazon Clone"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
          }
        />
        <TwoTestimonialCard
          img="/social/11.svg"
          name={"Amazon Clone"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
          }
        />
        <TwoTestimonialCard
          img="/social/11.svg"
          name={"Amazon Clone"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
          }
        />
        <TwoTestimonialCard
          img="/social/11.svg"
          name={"Amazon Clone"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
          }
        />
        <TwoTestimonialCard
          img="/social/11.svg"
          name={"Amazon Clone"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
          }
        />
        <TwoTestimonialCard
          img="/social/11.svg"
          name={"Amazon Clone"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."
          }
        />
      </div>
    </div>
  );
};

export default TwoTestimonial;
