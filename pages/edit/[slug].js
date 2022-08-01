import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Home from "..";
import Tabs from "../../components/Tabs";
import Footer from "../../components/Footer";
import { PrismaClient } from "@prisma/client";

const Edit = ({ users }) => {
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
  const [user, setUser] = useState("");

  const router = useRouter();

  useEffect(() => {
    users.map((user, index) => {
      // console.log(index, user);
      if (user.email === session?.user?.email) {
        setUser(user);
      }
    })
  }, [users, session?.user?.email]);
  
  if (!session) {
    return <Home />;
  }


  if (
    router.query.slug === "one" ||
    router.query.slug === "two" ||
    router.query.slug === "three"
  ) {
    return (
      <div className="font-['Cairo'] font-bold">
        <Head>
          <title>Edit</title>
        </Head>
        {user.portfolio ? (
          <Navbar session={session} live={user} />
        ) : (
          <Navbar session={session} />
        )}
        <main className="">
          {/* Tabs */}
          <div className="p-5 w-full rounded-lg h-full">
            <Tabs query={router.query} user={user} />
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return <Home />;
  }
};

export default Edit;

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany({
    include: {
      portfolio: {
        include: {
          projects: true,
          work: true,
          skills: true,
          testimonials: true,
          contact: true,
          links: true,
          user: true,
        },
      },
    },
  });

  return {
    props: {
      users,
    },
  };
}
