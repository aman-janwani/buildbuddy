import Head from "next/head";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import image from "../public/images/one.png";
import image2 from "../public/images/Two.png";
import image3 from "../public/images/Three.png";
import image4 from "../public/images/Four.png";
import image5 from "../public/images/Five.png";
import PortfolioTemplate from "../components/PortfolioTemplate";
import { HiArrowRight } from "react-icons/hi";
import { useSession } from "next-auth/react";
import LinkesyImage from "../public/images/linkesy.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Home from ".";


const Dashboard = () => {
  const Templates = [
    {
      image: image,
      title: "one",
    }
    ,
    {
      image: image2,
      title: "two",
    }
    ,
    {
      image: image3,
      title: "three",
    }
    ,
    {
      image: image4,
      title: "four",
    }
    ,
    {
      image: image5,
      title: "five",
    }
  ];

  const [username, setUsername] = useState("");
  const { data: session } = useSession();

  const router = useRouter();

  if (!session) {
    return <Home />
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
          No Build yet?
        </div>
        <div className="mx-10 my-14">
          <h1 className="flex items-center text-xl">
            Start With <HiArrowRight className="text-buildbuddyPurple mx-3" />
          </h1>
          <div className="flex overflow-x-scroll space-x-16 py-5">
            {Templates.map((template, index) => {
              return <PortfolioTemplate  slug={template.title} image={template.image} key={index} />;
            })}
          </div>
        </div>
        <div className="flex bg-buildbuddyBlueLight px-10 justify-between items-center">
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
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
