import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import OneHeroSec from "./one/OneHeroSec";
import OneAbout from "./one/OneAbout";
import OneSkills from "./one/OneSkills";
import OneProjects from "./one/OneProjects";
import OneTestimonials from "./one/OneTestimonials";
import OneContact from "./one/OneContact";
import OneNavbar from "./one/OneNavbar";
import OneSidebar from "./one/OneSidebar";


const One = ({data}) => {
  console.log("data", data);
  const bg = data.backgroundColor;
  const text = data.textColor;

  return (
    <div className="bg-oneBlue font-['Poppins']">
      <Head>
        <title>One</title>
      </Head>
      <OneSidebar data={data} />
      <OneNavbar />
      <main>
        {/* Hero */}
        <Element name="Onehero">
          <OneHeroSec data={data} />
        </Element>
        {/* About */}
        <Element name="Oneabout">
          <OneAbout data={data} />
        </Element>
        {/* Skills */}
        <Element name="Oneskills">
          <OneSkills data={data} />
        </Element>
        {/* Project */}
        <Element name="Oneprojects">
          <OneProjects data={data} />
        </Element>
        <Element name="Onetestimonial">
          <OneTestimonials data={data} />
        </Element>
        <Element name="Onecontact">
          <OneContact data={data}/>
        </Element>
      </main>
    </div>
  );
};

export default One;
