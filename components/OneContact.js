import React from "react";

const OneContact = () => {
  return (
    <div className="text-oneText text-center mt-40 pb-32">
      <h3 className="text-3xl font-bold uppercase">Contact</h3>
      <div className="flex justify-between mt-28">
        <div />
        <div className="w-3/4 md:w-1/3 text-start p-5">
          <h1 className="text-lg">Address and Phone</h1>
          <div className="px-8 py-5 text-sm space-y-2">
            <p>Aman Janwani</p>
            <p>amanjanwani@gmail.com</p>
            <br />
            <p className="max-w-[15rem]">Pupshraj Colony Satna, Madhya Pradesh 485001</p>
            <p>+91 7879599816</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneContact;
