import Head from "next/head";
import React from "react";
import { Element } from "react-scroll";
import TwoHeroSec from "./two/TwoHeroSec";
import TwoAbout from "./two/TwoAbout";
import TwoSkills from "./two/TwoSkills";
import TwoProjects from "./two/TwoProjects";
import TwoTestimonial from "./two/TwoTestimonial";
import TwoContact from "./two/TwoContact";
import TwoNavbar from "./two/TwoNavbar";


const Two = ({data}) => {
  console.log("data", data);
  const bg = data.backgroundColor;
  const text = data.textColor;
  return (
    <div className={`bg-twoDark text-twoTextDark font-['Almendra_SC']`}>
      <Head>
        <title>Two</title>
      </Head>
      <TwoNavbar />
      <main>
        {/* Hero */}
        <Element name="Twohero">
          <TwoHeroSec data={data} />
        </Element>
        {/* About */}
        <Element name="Twoabout">
          <TwoAbout data={data} />
        </Element>
        {/* Skills */}
        <Element name="Twoskills">
          <TwoSkills data={data} />
        </Element>
        {/* Project */}
        <Element name="Twoprojects">
          <TwoProjects data={data} />
        </Element>
        <Element name="Twotestimonial">
          <TwoTestimonial data={data} />
        </Element>
        <Element name="Twocontact">
          <TwoContact data={data} />
        </Element>
      </main>
    </div>
  );
};

export default Two;
