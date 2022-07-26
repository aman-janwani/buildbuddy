import Image from 'next/image'
import React from 'react'

const OneSidebar = ({links}) => {
  return (
    <div className='fixed z-30 top-1/3 flex flex-col gap-4 border-2 rounded-r-lg bg-white/20 backdrop-blur-lg p-2'>
        {links.map((link, index) => {
          return (
            <a href={link.link} key={index} className='flex items-center justify-center'>
              <Image src={link.image} alt={link.name} width={40} height={40} />
            </a>
          )
        }
        )}
    </div>
  )
}

export default OneSidebar