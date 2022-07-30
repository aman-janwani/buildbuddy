import React from "react";

const Footer = () => {
  return (
    <div className="bg-buildbuddyPurple text-[#fff] py-4  bottom-0 w-full flex justify-center items-center">
      <div className="flex space-x-3 items-center text-center">
        <p className="text-xs">Made by Aman Janwani With ❤️</p>
        <span className="text-lg text-white">
          <a href="https://planetscale.com/?utm_source=bulidbuddy" className="hover:text-xl duration-700">PlanetScale</a> x <a className="hover:text-xl duration-700" href="https://planetscale.com/?utm_source=bulidbuddy">Hashnode</a> Hackathon
        </span>
      </div>
    </div>
  );
};

export default Footer;
