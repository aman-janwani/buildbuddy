import Image from "next/image";
import React, { useState } from "react";
import {  scroller } from "react-scroll";

const TwoNavbar = () => {
  return (
    <div className="sticky flex text-center bg-twoDark/50 backdrop-blur-xl justify-center w-full px-8 py-5 top-0 z-20 space-x-3 lg:space-x-14">
      <p
        onClick={() => {
          scroller.scrollTo("Twohero", {
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
          scroller.scrollTo("Twoabout", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -273,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        About
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Twoskills", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -150,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        Skills
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Twoprojects", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -85,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        Projects
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Twotestimonial", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -200,
          });
        }}
        className="text-xs md:text-base cursor-pointer uppercase tracking-wider"
      >
        Testimonial
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Twocontact", {
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

export default TwoNavbar;
