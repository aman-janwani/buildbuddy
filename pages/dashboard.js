import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PortfolioTemplate from "../components/PortfolioTemplate";
import { HiArrowRight } from "react-icons/hi";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Home from ".";
import Footer from "../components/Footer";
import { PrismaClient } from "@prisma/client";

const Dashboard = ({ users }) => {
  console.log("users", users);
  const Templates = [
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331438/one_e2lnbj.png",
      title: "one",
      avalible: true,
    }
    ,
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331435/two_dv4bnq.png",
      title: "two",
      avalible: true,
    }
    ,
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331434/three_mdrikd.png",
      title: "three",
      avalible: true,
    }
    ,
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331435/Four_umtgan.png",
      title: "four",
      avalible: false,
    }
    ,
    {
      image: "https://res.cloudinary.com/dfk5jbk5r/image/upload/v1659331434/Five_fpekhn.png",
      title: "five",
      avalible: false,
    }
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

