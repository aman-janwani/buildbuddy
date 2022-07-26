import Head from "next/head";
import React, { useEffect, useState } from "react";
import OneAbout from "../components/OneAbout";
import OneHeroSec from "../components/OneHeroSec";
import OneNavbar from "../components/OneNavbar";
import OneProjects from "../components/OneProjects";
import OneSidebar from "../components/OneSidebar";
import OneSkills from "../components/OneSkills";
import { Element, scroller } from "react-scroll";
import OneTestimonials from "../components/OneTestimonials";
import OneContact from "../components/OneContact";

const One = () => {

  const [data, setnewData] = useState({
    name: "👋 I’m Aman Janwani",
    position: "FRONT-END WEB DEVELOPER | STUDENT",
    backgroundColor: "#4A5096",
    textColor: "#FFFFFF",
    image:
      "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1658768847/profilepic2_2_f1yhyv.png",
    about:
      "RTK Query ensures that any component subscribes to the same query will always use the same data. RTK Query automatically de-dupes requests so you don't have to worry about checking in",
    work: ["Freelancer 2022 - present", "Freelancer 2022 - present"],
    skills: [
      {
        name: "React Js",
        image: "https://image.com",
      },
      {
        name: "React Js",
        image: "https://image.com",
      },
      {
        name: "React Js",
        image: "https://image.com",
      },
    ],
    projects: [
      {
        name: "React Js",
        image: "https://image.com",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id",
        github: "https://image.com",
        live: "https://image.com",
      },
      {
        name: "React Js",
        image: "https://image.com",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id",
        github: "https://image.com",
        live: "https://image.com",
      },
    ],
    testimonial: [
      {
        name: "React Js",
        image: "https://image.com",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id",
      },
      {
        name: "React Js",
        image: "https://image.com",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatibus unde commodi iusto fuga voluptatem voluptate sint. Velit mollitia id",
      },
    ],
    contact: {
      name: "Aman Janwani",
      email: "amanjanwani1486@gmail.com",
      address: "Pupshraj Colony Satna, Madhya Pradesh 485001",
      "phone no.": "7879599816",
    },
    links: [
      {
        name: "Github",
        link: "https://github.com/aman-janwani",
        image:
          "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1658768395/11_um4pzw.svg",
      },
      {
        name: "Instagram",
        link: "https://github.com/aman-janwani",
        image:
          "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1658768236/13_avj2hk.svg",
      },
      {
        name: "Youtube",
        link: "https://github.com/aman-janwani",
        image:
          "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1658768333/12_o6do0n.svg",
      },
      {
        name: "Linkedin",
        link: "https://github.com/aman-janwani",
        image:
          "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1658768384/14_w3gsgs.svg",
      },
    ],
  });



  return (
    <div className="bg-oneBlue font-['Poppins']">
      <Head>
        <title>One</title>
      </Head>
      <OneSidebar links={data.links} />
      <OneNavbar />
      <main>
        {/* Hero */}
        <Element name="Onehero">
          <OneHeroSec data={data} />
        </Element>
        {/* About */}
        <Element name="Oneabout">
          <OneAbout />
        </Element>
        {/* Skills */}
        <Element name="Oneskills">
          <OneSkills />
        </Element>
        {/* Project */}
        <Element name="Oneprojects">
          <OneProjects />
        </Element>
        <Element name="Onetestimonial">
          <OneTestimonials />
        </Element>
        <Element name="Onecontact">
          <OneContact />
        </Element>
      </main>
    </div>
  );
};

export default One;
