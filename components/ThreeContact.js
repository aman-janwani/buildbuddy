import Image from 'next/image'
import React from 'react'

const ThreeContact = () => {
  return (
    <div className="text-center bg-ThreeLight py-5 text-ThreeDark">
      <div className="py-14">
        <h3 className="text-3xl font-bold uppercase">Contact</h3>
        <div className="flex justify-between mt-28">
          <div />
          <div className="w-3/4 md:w-1/3 text-start p-5">
            <h1 className="text-lg font-bold">Address and Phone</h1>
            <div className="px-8 py-5 text-sm md:text-base space-y-2">
              <p>Aman Janwani</p>
              <p>amanjanwani@gmail.com</p>
              <br />
              <p className="max-w-[15rem]">
                Pupshraj Colony Satna, Madhya Pradesh 485001
              </p>
              <p>+91 7879599816</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-4 mx-auto max-w-2xl p-3 rounded-xl space-x-5 border-ThreeDark">
          <Image
            src="/social/15.svg"
            alt="react"
            className="cursor-pointer"
            width={50}
            height={50}
          />
          <Image
            src="/social/16.svg"
            alt="react"
            className="cursor-pointer"
            width={50}
            height={50}
          />
          <Image
            src="/social/17.svg"
            alt="react"
            className="cursor-pointer"
            width={50}
            height={50}
          />
          <Image
            src="/social/18.svg"
            alt="react"
            className="cursor-pointer"
            width={50}
            height={50}
          />
          <Image
            src="/social/19.svg"
            alt="react"
            className="cursor-pointer"
            width={50}
            height={50}
          />
      </div>
    </div>
  )
}

export default ThreeContact