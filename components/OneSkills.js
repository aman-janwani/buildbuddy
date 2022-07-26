import Image from "next/image";
import React from "react";

const OneSkills = () => {
  return (
    <div className="max-w-4xl space-y-28 my-36 mx-auto px-8 text-oneText">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Work</h2>
        <ul className="list-disc px-10 italic space-y-1">
          <li>Freelancer 2022 - present</li>
          <li>Self Employed 2022 - present</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 gap-8 text-xs p-5 px-6 md:px-16 ">
            <div className="flex space-x-4 items-center">
                <Image src="/skills/image7.svg" alt="hero-bg" width={40} height={40} />
                <p>React Js</p>
            </div>
            <div className="flex space-x-4 items-center">
                <Image src="/skills/image8.svg" alt="hero-bg" width={40} height={40} />
                <p>Next Js</p>
            </div>
            <div className="flex space-x-4 items-center">
                <Image src="/skills/image9.svg" alt="hero-bg" width={40} height={40} />
                <p>JavaScript</p>
            </div>
            <div className="flex space-x-4 items-center">
                <Image src="/skills/image10.svg" alt="hero-bg" width={40} height={40} />
                <p>Tailwind Css</p>
            </div>
            <div className="flex space-x-4 items-center">
                <Image src="/skills/image11.svg" alt="hero-bg" width={40} height={40} />
                <p>Figma</p>
            </div>
            <div className="flex space-x-4 items-center">
                <Image src="/skills/image12.svg" alt="hero-bg" width={40} height={40} />
                <p>Github</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OneSkills;
