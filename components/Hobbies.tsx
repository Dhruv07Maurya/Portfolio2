"use client";
import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Cover } from "@/components/ui/cover";
import tree from "@/app/images/tree.jpeg";
import galli from "@/app/images/galli.jpeg";
import rainy from "@/app/images/rainy.jpeg";
import sunset from "@/app/images/sunset.jpeg";

export default function Hobbies() {
  const items = [
    {
      title: "sunset",
      image:  sunset.src,
      className: "absolute top-10 left-[10%] md:left-[20%] rotate-[-5deg]",
    },
    {
      title: "galli",
      image: galli.src,
      className: "absolute top-32 left-[45%] md:left-[55%] rotate-[10deg]",
    },
    {
      title: "tree",
      image: tree.src,
      className: "absolute top-20 right-[25%] md:right-[35%] rotate-[2deg]",
    },
    {
      title: "rainy",
      image: rainy.src,
      className: "absolute top-8 left-[20%] md:left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>My Hobby</Cover>
      </h1>
      <center className="text-black dark:text-gray-400 text-xl">
        {" "}
        <span className="text-2xl text-black dark:text-gray-300">
          "Point it. Shoot it. Hope it's not blurry."
        </span>{" "}
        <br /> Photography is my creative escape, allowing me to explore the
        beauty in everyday moments. Whether capturing landscapes, portraits, or
        candid shots,
      </center>
      {/* <h1 className="text-md mt-2 mb-1 text-red-500 dark:text-red-200">*Click and drag the images to reveal hidden content underneath.</h1> */}
      <DraggableCardContainer className="relative flex min-h-[50vh] md:min-h-[100vh] w-full items-center justify-center overflow-clip">
        <center className="absolute top-1/2 text-xl md:max-w-25 mx-auto -translate-y-3/4 text-center text-neutral-800 dark:text-neutral-300">
          Discover the beauty of life through{" "}
          <span className="text-red-500 font-normal dark:text-red-200">
            captured moments
          </span>{" "}
          with{" "}
          <span className="text-red-500 font-normal dark:text-red-200">
            photography
          </span>{" "}
          in every shot.
        </center>
        {items.map((item) => (
          <DraggableCardBody className={item.className} key={item.title}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 w-60 h-60 md:w-80 md:h-80 object-cover"
            />
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </>
  );
}
