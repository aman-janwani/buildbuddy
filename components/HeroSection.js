import React from "react";
import { Carousel } from "react-responsive-carousel";
import Typewriter from "typewriter-effect";
import image from "../public/images/one.png";
import image2 from "../public/images/Two.png";
import image3 from "../public/images/img.png";
import image4 from "../public/images/linkesyBanner.svg";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

new Typewriter("#typewriter", {
  loop: true,
});

const HeroSection = () => {
  return (
    <div className="flex flex-col py-20 lg:py-0 lg:flex-row items-center lg:pl-8">
      <div className=" lg:w-1/2">
        <h2 className="text-4xl lg:text-7xl text-buildbuddyPurple">
          One Stop Solution For
          <span className="text-buildbuddyBlueDark">
            <Typewriter
              options={{
                strings: ["Hello", "World"],
                loop: true,
                cursor: "|",
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Digital Portfolio")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Social Links")
                  .pauseFor(2000)
                  //   .deleteAll()
                  //   .typeString("Hwllo 3")
                  //   .pauseFor(2000)
                  .start();
              }}
            />
          </span>
        </h2>
      </div>
      <div className="lg:w-1/2 w-full h-[80vh] lg:h-[100vh] relative">
        <div className="h-[89%] lg:w-[85%] text-center mx-auto rounded-t-full absolute bottom-0 right-0 bg-gradient-to-b from-buildbuddyYellowDark to-buildbuddyYellowLight">
          <Carousel
            renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev && ""}
            renderArrowNext={(onClickHandler, hasNext, label) => hasNext && ""}
            className={`rounded-3xl`}
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            useKeyboardArrows={false}
            swipeable={false}
            interval={3000}
          >
            <Image
              className="rounded-3xl h-96"
              src={image}
              alt="banner image"
              width={500}
              height={400}
              objectFit="contain"
            />
            <Image
              className="rounded-3xl h-96"
              src={image2}
              alt="banner image"
              width={500}
              height={400}
              objectFit="contain"
            />
            <Image
              className="rounded-3xl h-96"
              src={image3}
              alt="banner image"
              width={500}
              height={500}
              objectFit="contain"
            />
            <Image
              className="rounded-3xl h-96"
              src={image4}
              alt="banner image"
              width={500}
              height={600}
              objectFit="contain"
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
