import Image from "next/image";
import React, { useState } from "react";
import {  scroller } from "react-scroll";

const OneNavbar = () => {
  return (
    <div className="fixed font-['Akaya_Telivigala'] text-center md:text-start text-oneText w-full px-5 md:px-8 py-5 border-b-2 border-oneText flex bg-oneBlue/10 backdrop-blur-lg top-0  z-20 space-x-3 lg:space-x-14">
      <p
        onClick={() => {
          scroller.scrollTo("Onehero", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -275,
          });
        }}
        className="text-xs uppercase tracking-wider"
      >
        Home
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Oneabout", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -273,
          });
        }}
        className="text-xs uppercase tracking-wider"
      >
        About
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Oneskills", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -150,
          });
        }}
        className="text-xs uppercase tracking-wider"
      >
        Skills
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Oneprojects", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -85,
          });
        }}
        className="text-xs uppercase tracking-wider"
      >
        Projects
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Onetestimonial", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -200,
          });
        }}
        className="text-xs uppercase tracking-wider"
      >
        Testimonial
      </p>
      <p
        onClick={() => {
          scroller.scrollTo("Onecontact", {
            duration: 1000,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: -0,
          });
        }}
        className="text-xs uppercase tracking-wider"
      >
        Contact
      </p>
    </div>
  );
};

export default OneNavbar;
