import Image from "next/image";
import React from "react";

const ThreeProjectCard = ({ img, title, description, github, link }) => {
  return (
    <div className="min-w-fit bg-white/10 border-2 border-ThreeDark backdrop-blur-xl rounded-xl cursor-pointer transform hover:-translate-y-8 duration-300 hover:backdrop-brightness-105">
      <div className="px-5 py-5 w-[17rem]">
        <Image
          src={img}
          alt="hero-bg"
          className="rounded-lg"
          width={250}
          height={150}
          objectFit="cover"
        />
      </div>
      <div className="px-5 text-start w-[17rem] space-y-4">
        <h3 className="text-xl">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex w-[17rem] px-5 my-5 justify-between">
        <a href={github}>
          <Image src="/social/Github.svg" alt="github" width={20} height={20} />
        </a>
        <a href={link}>
          <Image src="/social/link.png" alt="link" width={20} height={20} />
        </a>
      </div>
    </div>
  );
};

export default ThreeProjectCard;
