import React from 'react'
import OneTestimonialCard from './OneTestimonialCard'

const OneTestimonials = ({data}) => {
  return (
    <div className="text-oneText text-center mt-32">
      <h3 className="text-3xl font-bold uppercase">Testimonials</h3>
      <div className="flex justify-between px-16 space-x-24 py-10 my-20 overflow-x-scroll">
        {
          data.testimonials.map((item, index) => {
            return (
              <OneTestimonialCard key={index} name={item.name} content={item.description} />
            );
          }
          )
        }
      </div>
    </div>
  )
}

export default OneTestimonials