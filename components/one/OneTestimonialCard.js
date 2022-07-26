import Image from 'next/image'
import React from 'react'

const OneTestimonialCard = ({name, img , content}) => {
  return (
    <div className='bg-white/10 border-2 text-start p-5 py-10 space-y-6 border-oneText backdrop-blur-xl rounded-xl cursor-pointer transform hover:-rotate-3 hover:-translate-y-2 duration-300 hover:backdrop-brightness-110'>
        <div className='w-[20rem] flex space-x-3 items-center'>
            <h3>{name}</h3>
        </div>
        <div className='w-[20rem]'>
            <p className='text-sm'>{content}</p>
        </div>
    </div>
  )
}

export default OneTestimonialCard