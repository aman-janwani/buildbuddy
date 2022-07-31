import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import image from "../public/images/one.png";
import image2 from "../public/images/two.png";
import image3 from "../public/images/three.png";
import image4 from "../public/images/Four.png";
import image5 from "../public/images/Five.png";
import PortfolioTemplate from "../components/PortfolioTemplate";
import { HiArrowRight } from "react-icons/hi";
import { useSession } from "next-auth/react";
import LinkesyImage from "../public/images/linkesy.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Home from ".";
import Footer from "../components/Footer";
import { PrismaClient } from "@prisma/client";

const Dashboard = ({ users }) => {
  console.log("users", users);
  const Templates = [
    {
      image: image,
      title: "one",
      avalible: true,
    },
    {
      image: image2,
      title: "two",
      avalible: true,
    },
    {
      image: image3,
      title: "three",
      avalible: true,
    },
    {
      image: image4,
      title: "four",
      avalible: false,
    },
    {
      image: image5,
      title: "five",
      avalible: false,
    },
  ];

  const { data: session } = useSession();

  const router = useRouter();

  if (!session) {
    return <Home />;
  }

  return (
    <div className="font-['Cairo'] font-bold">
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/1.ico" />
      </Head>
      <Navbar session={session} />
      <main className="mt-14">
        <div className="bg-buildbuddyBlueLight mx-10 p-5 flex h-48 justify-center items-center rounded-xl">
          {users.map((user, index) => {
            if (user.portfolio) {
              if (user.email === session.user.email) {
                return (
                  <div key={index} className="relative">
                    <div
                      onClick={() => {
                        router.push(`/edit/${user.portfolio.query}`);
                      }}
                      className="relative group min-w-fit cursor-pointer mt-5 hover:-translate-y-2 transform duration-300"
                    >
                      <Image
                        className="rounded-lg cursor-pointer duration-500 group-hover:brightness-[.3] bg-red-400"
                        src={`/images/${user.portfolio.query}.png`}
                        alt="image"
                        width={250}
                        height={150}
                        objectFit="fill"
                      />
                      <div className="absolute group-hover:h-full top-0 left-0 w-full h-0 text-center flex flex-col justify-center opacity-0 group-hover:opacity-100 duration-500">
                        <h1 className="text-lg font-semibold text-white">
                          Edit
                        </h1>
                      </div>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
        <div className="mx-10 my-14">
          <h1 className="flex items-center text-xl">
            Start With <HiArrowRight className="text-buildbuddyPurple mx-3" />
          </h1>
          <div className="flex overflow-x-scroll space-x-16 py-5">
            {Templates.map((template, index) => {
              return (
                <PortfolioTemplate
                  avalible={template.avalible}
                  slug={template.title}
                  image={template.image}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        {/* <div className="flex bg-buildbuddyBlueLight px-10 justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-white flex rounded-full hover:shadow-lg duration-700 space-x-2 w-fit p-3 px-6 items-center">
              <h1 className="text-xl">https://linkesy/</h1>
              <input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value.toLowerCase().replace(/\s/g, "-"))
                }
                className="outline-none py-3 text-xl rounded-r-full placeholder:text-lg"
              />
            </div>
            <div className="bg-white p-6 rounded-full border cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-150 ease-out">
              <HiArrowRight className="text-2xl" />
            </div>
          </div>
          <div>
            <Image src={LinkesyImage} alt="linkesy" width={500} height={500} />
          </div>
        </div> */}
        <Footer />
      </main>
    </div>
  );
};

export default Dashboard;

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

