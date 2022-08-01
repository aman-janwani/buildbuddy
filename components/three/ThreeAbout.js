import React from 'react'

const ThreeAbout = ({data}) => {
  return (
    <div className="py-56 bg-ThreeLight px-8 items-center text-center text-ThreeDark">
      <div className="items-start text-center space-y-10">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="md:max-w-2xl mx-auto font-medium text-xl tracking-wide px-2 leading-relaxed">
        {
          data.about ? (data.about) : ("")
        }
        </p>
      </div>
    </div>
  )
}

export default ThreeAbout