import Image from 'next/image'
import React from 'react'

const TwoTestimonialCard = ({img, name, content}) => {
  return (
    <div className='border-r-2 border-l-2 text-center p-5 py-10  space-y-6 border-twoTextDark cursor-pointer transform hover:scale-105 duration-300'>
        <div className='w-[20rem] flex text-center items-center'>
            <h3 className='mx-auto'>{name}</h3>
        </div>
        <div className='w-[20rem] text-center'>
            <p className='text-sm text-center'>{content}</p>
        </div>
    </div>
  )
}

export default TwoTestimonialCard