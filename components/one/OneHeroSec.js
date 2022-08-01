import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";

const OneHeroSec = ({data}) => {

  return (
    <div className="space-y-4 text-oneText">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex my-5 flex-col space-y-5 text-center md:w-1/2 px-7">
          <h1 className="text-4xl lg:text-5xl  font-['Poppins'] w-full font-medium capitalize">
          {data.name ? (data.name) : ("")}
          </h1>
          <p className="text-xs font-['Poppins'] font-semibold sm:text-sm uppercase">
            {data.position ? (data.position) : ("")}
          </p>
        </div>
        <Image
          src={data.image || "/profilepic2.svg"}
          className="rounded-bl-full md:rounded-bl-[25rem]"
          alt="hero-bg"
          width={600}
          height={600}
        />
      </div>
      <div
        className="justify-center text-center flex max-w-fit mx-auto"
        onClick={() => {
          scroller.scrollTo("Oneabout", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -260,
          });
        }}
      >
        <Image src="/OneDown.svg" className="cursor-pointer" alt="hero-bg" width={30} height={30} />
      </div>
    </div>
  );
};

export default OneHeroSec;
