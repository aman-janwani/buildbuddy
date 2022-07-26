import Head from "next/head";
import React from "react";
import { Element } from "react-scroll";
import TwoHeroSec from "../components/TwoHeroSec";
import TwoNavbar from "../components/TwoNavbar";
import OneAbout from "../components/OneAbout";
import TwoAbout from "../components/TwoAbout";
import TwoSkills from "../components/TwoSkills";
import TwoProjects from "../components/TwoProjects";
import TwoTestimonial from "../components/TwoTestimonial";
import TwoContact from "../components/TwoContact";
import ThreeNavbar from "../components/ThreeNavbar";
import ThreeHeroSec from "../components/ThreeHeroSec";
import ThreeAbout from "../components/ThreeAbout";
import ThreeSkills from "../components/ThreeSkills";
import ThreeProjects from "../components/ThreeProjects";
import ThreeTestimonial from "../components/ThreeTestimonial";
import ThreeContact from "../components/ThreeContact";

const Two = () => {
  return (
    <div className="bg-ThreeDark text-ThreeText font-['Akaya_Telivigala']">
      <Head>
        <title>Three</title>
      </Head>
      <ThreeNavbar />
      <main>
        {/* Hero */}
        <Element name="Threehero">
          <ThreeHeroSec />
        </Element>
        {/* About */}
        <Element name="Threeabout">
            <ThreeAbout />
        </Element>
        {/* Skills */}
        <Element name="Threeskills">
          <ThreeSkills />
        </Element>
        {/* Project */}
        <Element name="Threeprojects">
          <ThreeProjects />
        </Element>
        <Element name="Threetestimonial">
          <ThreeTestimonial />
        </Element>
        <Element name="Threecontact">
          <ThreeContact />
        </Element>
      </main>
    </div>
  );
};

export default Two;
