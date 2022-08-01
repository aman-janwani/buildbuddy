import Image from "next/image";
import React from "react";

const ThreeSkills = ({ data }) => {
  return (
    <div className="flex items-center">
      <div className="md:w-1/4 flex items-center md:bg-ThreeLight md:h-screen justify-center uppercase" />
      <div className="w-[50rem] space-y-28 py-20 px-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Work</h2>
          <ul className="list-disc px-10 italic space-y-1">
            {data.work.map((work, index) => {
              return <li key={index}>{work.title}</li>;
            })}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 gap-8 text-base p-5 px-6 md:px-16 ">
            {data.skills.map((skill, index) => {
              return (
                <div className="flex space-x-4 items-center" key={index}>
                  <Image
                    src={`/skillsbw/${skill.value}C.svg`}
                    alt={skill.label}
                    width={40}
                    height={40}
                  />
                  <p>{skill.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSkills;
