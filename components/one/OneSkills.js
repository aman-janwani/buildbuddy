import Image from "next/image";
import React from "react";

const OneSkills = ({data}) => {
  return (
    <div className="max-w-4xl space-y-28 my-36 mx-auto px-8 text-oneText">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Work</h2>
        <ul className="list-disc px-10 italic space-y-1">
          {data.work.map((item, index) => {
            return (
              <li key={index}>
                {item.title ? (item.title) : ("")}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 gap-8 text-xs p-5 px-6 md:px-16 ">
            {data.skills.map((item, index) => {
              return (
                <div className="flex space-x-4 items-center" key={index}>
                  <Image src={`/skillsbw/${item.value}C.svg`} alt="hero-bg" width={40} height={40} />
                  <p>{item.label}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OneSkills;
