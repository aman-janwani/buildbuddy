import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/logo/1.svg";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = ({ session, live }) => {
  const router = useRouter();

  const [username, setUsername] = useState("");

  useEffect(() => {
    if (live) {
      const username = live.portfolio.userEmail.toLowerCase().slice(0, live.portfolio.userEmail.indexOf('@'));
      setUsername(username);
      console.log(username);
    }
  }, [live]);

  return (
    <div className="flex items-center justify-between px-8">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="py-4 flex cursor-pointer items-center space-x-3"
      >
        <Image src={logo} alt="logo" width={45} height={45} />
        <h1 className="font-['Cairo'] text-sm md:text-xl">Build Buddy</h1>
      </div>
      <div>
        {session ? (
          <p
            onClick={() => {
              router.push("/dashboard");
            }}
            className="text-buildbuddyPurple cursor-pointer hover:text-lg duration-700"
          >
            DashBoard
          </p>
        ) : (
          ""
        )}
      </div>
      <div>
        {live ? (
          <a
            onClick={() => {
              router.push(`/${username}`);
            }}
            h
            target="_blank"
          >
            <button className="hover:bg-buildbuddyYellowLight border-2 border-buildbuddyYellowLight duration-500 focus:brightness-110 px-5 py-2 w-full max-w-sm rounded-lg">
              Live link
            </button>
          </a>
        ) : (
          ""
        )}
      </div>
      <div>
        {session ? (
          <Image
            onClick={signOut}
            src={session.user.image}
            alt="avatar"
            className="rounded-full h-20 w-20 cursor-pointer bg-buildbuddyBlueLight"
            width={40}
            height={40}
            title="Sign Out"
          />
        ) : (
          <div className="space-x-4 flex">
            <button
              onClick={signIn}
              className="border-[3px] px-3 md:px-5 py-1 h-fit rounded-lg duration-500 text-buildbuddyBlueDark font-medium border-buildbuddyBlueDark hover:bg-buildbuddyBlueDark hover:text-white"
            >
              Register
            </button>
            <button
              onClick={signIn}
              className="border-[3px] px-3 md:px-5 py-1 h-fit rounded-lg duration-500 text-white font-medium border-buildbuddyBlueDark bg-buildbuddyBlueDark hover:bg-white hover:text-buildbuddyBlueDark"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
