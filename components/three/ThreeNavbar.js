import Image from "next/image";
import React, { useState } from "react";
import {  scroller } from "react-scroll";

const ThreeNavbar = () => {
  return (
    <div className="sticky md:fixed bg-ThreeDark/40 backdrop-blur-xl flex text-center text-ThreeLight justify-start w-full px-8 py-5 top-0 z-20 space-x-3 lg:space-x-14">
      <p
        onClick={() => {
          scroller.scrollTo("Threehero", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -275,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        Home
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Threeabout", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -0,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        About
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Threeskills", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -0,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        Skills
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Threeprojects", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -0,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        Projects
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Threetestimonial", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -0,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        Testimonial
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Threecontact", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -0,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        Contact
      </p>
    </div>
  );
};

export default ThreeNavbar;
