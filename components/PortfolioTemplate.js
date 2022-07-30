import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Template = ({image, slug, avalible}) => {
  const router = useRouter();

  if (!avalible) {
    return (
      <div className="relative group min-w-fit cursor-pointer mt-5 hover:-translate-y-2 transform duration-300">
        <Image
          className="rounded-lg cursor-pointer duration-500 group-hover:brightness-[.3] bg-red-400"
          src={image}
          alt="image"
          width={250}
          height={150}
          objectFit="fill"
        />
        <div className="absolute group-hover:h-full top-0 left-0 w-full h-0 text-center flex flex-col justify-center opacity-0 group-hover:opacity-100 duration-500">
          <h1 className="text-lg font-semibold text-white">Comming Soon...</h1>
        </div>
      </div>
    );
  }

  return (
    <div onClick={() => {
      router.push(`/edit/${slug}`);
    }} className="relative group min-w-fit cursor-pointer mt-5 hover:-translate-y-2 transform duration-300">
      <Image
        className="rounded-lg cursor-pointer duration-500 group-hover:brightness-[.3] bg-red-400"
        src={image}
        alt="image"
        width={250}
        height={150}
        objectFit="fill"
      />
      <div className="absolute group-hover:h-full top-0 left-0 w-full h-0 text-center flex flex-col justify-center opacity-0 group-hover:opacity-100 duration-500">
        <h1 className="text-lg font-semibold text-white">Start With This</h1>
      </div>
    </div>
  );
};

export default Template;
