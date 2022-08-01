import Image from "next/image";
import React from "react";

const OneAbout = ({data}) => {
  return (
    <div id="test" className="my-52 px-8 text-oneText items-center flex max-w-4xl mx-auto justify-between ">
      <div className="hidden md:block">
        <Image
          src={data.image ? (data.image) : ("")}
          className="rounded-full"
          alt="hero-bg"
          width={170}
          height={170}
        />
      </div>
      <div className="items-start text-center md:text-start space-y-4">
        <h1 className="text-xl font-bold">About Me</h1>
        <p className="md:max-w-md font-medium text-sm tracking-wider px-2 leading-5">
          {
            data.about ? (data.about) : ("")
          }
        </p>
      </div>
    </div>
  );
};

export default OneAbout;
