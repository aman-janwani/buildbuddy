import Image from "next/image";
import React from "react";

const ThreeContact = ({ data }) => {
  return (
    <div className="text-center bg-ThreeLight py-5 text-ThreeDark">
      <div className="py-14">
        <h3 className="text-3xl font-bold uppercase">Contact</h3>
        <div className="flex justify-between mt-28">
          <div />
          <div className="w-3/4 md:w-1/3 text-start p-5">
            <h1 className="text-lg font-bold">Address and Phone</h1>
            <div className="px-8 py-5 text-sm md:text-base space-y-2">
              <p>{data.contact.name ? data.contact.name : ""}</p>
              <p>{data.contact.email ? data.contact.email : ""}</p>
              <br />
              <p className="max-w-[15rem]">
                {data.contact.address ? data.contact.address : ""}
              </p>
              <p>{data.contact.phone ? data.contact.phone : ""}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-4 mx-auto max-w-2xl p-3 rounded-xl space-x-5 border-ThreeDark">
        {data.links.map((link, index) => {
          return (
              <a href={link.url} key={index} target="_blank" className="cursor-pointer">
                <Image
                  src={`/social/${link.name}.svg`}
                  alt={link.name}
                  className="cursor-pointer"
                  width={50}
                  height={50}
                />
              </a>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeContact;
