import React from "react";

const TwoAbout = ({data}) => {
  return (
    <div className="my-52 px-8 items-center max-w-4xl mx-auto">
      <div className="items-start text-center space-y-10">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="md:max-w-2xl mx-auto font-medium text-lg tracking-wide px-2 leading-relaxed">
        {
          data.about ? (data.about) : ("")
        }
        </p>
      </div>
    </div>
  );
};

export default TwoAbout;
