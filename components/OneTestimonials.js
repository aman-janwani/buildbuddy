import React from 'react'
import OneTestimonialCard from './OneTestimonialCard'

const OneTestimonials = () => {
  return (
    <div className="text-oneText text-center mt-32">
      <h3 className="text-3xl font-bold uppercase">Testimonials</h3>
      <div className="flex justify-between px-8 space-x-24 py-10 my-20 overflow-x-scroll">
        <OneTestimonialCard img="/social/11.svg" name={"Aman Janwanni"} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} />
        <OneTestimonialCard img="/social/11.svg" name={"Amazon Clone"} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} />
        <OneTestimonialCard img="/social/11.svg" name={"Amazon Clone"} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} />
        <OneTestimonialCard img="/social/11.svg" name={"Amazon Clone"} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} />
        <OneTestimonialCard img="/social/11.svg" name={"Amazon Clone"} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} />
        <OneTestimonialCard img="/social/11.svg" name={"Amazon Clone"} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} />
        <OneTestimonialCard img="/social/11.svg" name={"Amazon Clone"} content={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id quis."} />
      </div>
    </div>
  )
}

export default OneTestimonials