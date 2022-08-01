import Image from "next/image";
import React from "react";

const TwoHeroSec = ({data}) => {

  return (
    <div className="flex flex-col md:flex-row justify-around items-center py-11">
      <div className="ww-full md:w-1/2 flex justify-center">
        <div className="w-[20rem] md:w-96 relative h-[20rem] md:h-96 border-[15px] border-[#E6CCB2]">
          <div className="absolute h-[18rem] md:h-[23rem] w-[18rem] md:w-[23rem] -bottom-10 -left-7  md:-bottom-14 md:-left-14">
            <Image
              src={data.image || "/profilepic2.svg"}
              className=""
              alt="two-hero-bg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full my-20 md:my-0  justify-center uppercase">
        <div className="text-center md:text-end max-w-xl space-y-5">
        <h1 className="text-3xl md:text-5xl">👋 I'm {data.name ? (data.name) : ("")}</h1>
        <h2 className="text-sm md:text-base">{data.position ? (data.position): ("")} </h2>
        </div>
      </div>
    </div>
  );
};

export default TwoHeroSec;
