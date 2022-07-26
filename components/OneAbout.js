import Image from "next/image";
import React from "react";

const OneAbout = () => {
  return (
    <div id="test" className="my-52 px-8 text-oneText items-center flex max-w-4xl mx-auto justify-between ">
      <div className="hidden md:block">
        <Image
          src="/profilepic2.svg"
          className="rounded-full"
          alt="hero-bg"
          width={170}
          height={170}
        />
      </div>
      <div className="items-start text-center md:text-start space-y-4">
        <h1 className="text-xl font-bold">About Me</h1>
        <p className="md:max-w-md font-medium text-sm tracking-wider px-2 leading-5">
          I’m a 16 year old Web Developer. I've been coding for over 1 years now
          As a React Js Developer. Curently I'm Studing in Class 11th I have
          experience in React Js and interested in learning new technologies. My
          Goal is to be a MERN Stack Developer. Contact me for any collabrations
          for any React Js .
        </p>
      </div>
    </div>
  );
};

export default OneAbout;
