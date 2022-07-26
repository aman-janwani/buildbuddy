import Image from "next/image";
import React, { useEffect, useState } from "react";
import LinkesyImage from "../public/images/linkesy.svg";
import { HiArrowRight, HiChevronDoubleRight } from "react-icons/hi";

const Linkesy = ({session}) => {
  const [username, setUsername] = useState("");

 useEffect(() => {
    if (session) {
      const username = session.user.name.toLowerCase().replace(/\s/g, "-");
      setUsername(username);
    }
  }
  , [session]);

  return (
    <div className="text-buildbuddyPurple py-10 px-8">
      <div className="space-y-8">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center max-w-4xl mx-auto">
          Struggling to handle your social profile links? So this tool is for
          you !
        </h3>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mx-auto">
          So this tool is for you !
        </h3>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="bg-white flex rounded-full hover:shadow-lg duration-700 space-x-2 w-fit p-3 px-6 items-center">
            <h1 className="text-xl">https://linkesy/</h1>
            <input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/\s/g, "-"))}
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
    </div>
  );
};

export default Linkesy;
