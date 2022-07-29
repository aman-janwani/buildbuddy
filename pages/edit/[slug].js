import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Home from "..";
import Tabs from "../../components/Tabs";

const Edit = () => {
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [works, setWorks] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [projects, setProjects] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [youtube, setYoutube] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const router = useRouter();

  if (!session) {
    return <Home />;
  }

  return (
    <div className="font-['Cairo'] font-bold">
      <Head>
        <title>Edit</title>
      </Head>
      <Navbar session={session} />
      <main className="">
        {/* Tabs */}
        <div className="p-5 w-full rounded-lg h-full">
          <Tabs />
        </div>
      </main>
    </div>
  );
};

export default Edit;
