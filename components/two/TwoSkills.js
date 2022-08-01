import Image from "next/image";
import React from "react";

const TwoSkills = ({ data }) => {
  return (
    <div className="text-center my-48">
      <div>
        <h1 className="text-3xl font-bold my-32">Skills</h1>
        <div className="flex justify-between border-t-2 border-b-2 overflow-x-scroll space-x-24 border-twoTextDark">
          {data.skills.map((skill, index) => {
            return (
              <div
                className="h-36 w-36 min-w-fit flex items-center border-r-2 border-l-2 transition transform duration-150 ease-out hover:scale-x-105 p-8 border-twoTextDark"
                key={index}
              >
                <Image
                  src={`/skillsbw/${skill.value}.svg`}
                  alt={skill.label}
                  className="cursor-pointer"
                  width={100}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="space-y-8 text-start my-20 px-8">
        <h2 className="text-2xl font-semibold">Work</h2>
        <ul className="list-disc px-10 italic space-y-1">
          {data.work.map((work, index) => {
            return <li key={index}>{work.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TwoSkills;
