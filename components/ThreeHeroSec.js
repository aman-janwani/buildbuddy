import Image from "next/image";
import React from "react";

const ThreeHeroSec = () => {
  return (
    <div className="flex w-full flex-col md:flex-row justify-between items-center space-y-11 md:space-y-0 py-16 md:py-0">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="text-center space-y-8 uppercase">
          <h1 className="text-3xl md:text-6xl">👋 I’m Aman Janwani</h1>
          <h2 className="text-sm md:text-base">
            FRONT-END WEB DEVELOPER | Student
          </h2>
        </div>
      </div>
      <div className="md:w-1/4 flex items-center md:bg-ThreeLight md:h-screen justify-center uppercase">
        <Image src="/profilepic2.svg" alt="img" width={200} height={200} className="rounded-full" />
      </div>
    </div>
  );
};

export default ThreeHeroSec;
