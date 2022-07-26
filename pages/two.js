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

const Two = () => {
  return (
    <div className="bg-twoDark text-twoTextLight font-['Almendra_SC']">
      <Head>
        <title>Two</title>
      </Head>
      <TwoNavbar />
      <main>
        {/* Hero */}
        <Element name="Twohero">
          <TwoHeroSec />
        </Element>
        {/* About */}
        <Element name="Twoabout">
          <TwoAbout />
        </Element>
        {/* Skills */}
        <Element name="Twoskills">
          <TwoSkills />
        </Element>
        {/* Project */}
        <Element name="Twoprojects">
          <TwoProjects />
        </Element>
        <Element name="Twotestimonial">
          <TwoTestimonial />
        </Element>
        <Element name="Twocontact">
          <TwoContact />
        </Element>
      </main>
    </div>
  );
};

export default Two;
