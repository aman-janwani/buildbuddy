import Image from "next/image";
import React from "react";

const TwoContact = ({data}) => {
  return (
    <div className="text-center mt-40">
      <div className="pb-32">
        <h3 className="text-3xl font-bold uppercase">Contact</h3>
        <div className="flex justify-between mt-28">
          <div />
          <div className="w-3/4 md:w-1/3 text-start p-5">
            <h1 className="text-lg font-bold">Address and Phone</h1>
            <div className="px-8 py-5 text-sm md:text-base space-y-2">
              <p>{data.contact.name ? (data.contact.name) : ("")}</p>
              <p>
                {data.contact.email ? (data.contact.email) : ("")}
              </p>
              <br />
              <p className="max-w-[15rem]">
                {data.contact.address ? (data.contact.address) : ("")}
              </p>
              <p>
                {data.contact.phone ? (data.contact.phone) : ("")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-b-2 overflow-x-scroll space-x-24 border-twoTextDark">
        {data.links.map((link, index) => {
          return (
            <div key={index} className="h-20 w-20 min-w-fit flex items-center border-r-2 border-l-2 transition transform duration-150 ease-out hover:scale-x-105 p-8 border-twoTextDark">
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer" 
                className="cursor-pointer"
              >
                <Image
                  src={`/social/${link.name}.svg`}
                  alt={link.name}
                  className="cursor-pointer"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TwoContact;
