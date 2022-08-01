import Head from "next/head";
import React from "react";
import { Element } from "react-scroll";
import ThreeHeroSec from "./three/ThreeHeroSec";
import ThreeAbout from "./three/ThreeAbout";
import ThreeSkills from "./three/ThreeSkills";
import ThreeProjects from "./three/ThreeProjects";
import ThreeTestimonial from "./three/ThreeTestimonial";
import ThreeContact from "./three/ThreeContact";
import ThreeNavbar from "./three/ThreeNavbar";

const Two = ({data}) => {
  return (
    <div className="bg-ThreeDark text-ThreeText font-['Akaya_Telivigala']">
      <Head>
        <title>Three</title>
      </Head>
      <ThreeNavbar />
      <main>
        {/* Hero */}
        <Element name="Threehero">
          <ThreeHeroSec data={data}/>
        </Element>
        {/* About */}
        <Element name="Threeabout">
            <ThreeAbout data={data}/>
        </Element>
        {/* Skills */}
        <Element name="Threeskills">
          <ThreeSkills data={data}/>
        </Element>
        {/* Project */}
        <Element name="Threeprojects">
          <ThreeProjects data={data}/>
        </Element>
        <Element name="Threetestimonial">
          <ThreeTestimonial data={data}/>
        </Element>
        <Element name="Threecontact">
          <ThreeContact data={data}/>
        </Element>
      </main>
    </div>
  );
};

export default Two;
