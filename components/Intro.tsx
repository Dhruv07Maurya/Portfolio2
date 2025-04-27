import Image from "next/image";
import ProfilePic2 from "@/app/images/dm_pfp_noBack.jpeg";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function Intro() {
  const words =
    "I'm a Third Year B.Tech IT student at VESIT Mumbai, a continuous learner and a problem solver. Passionate about AI and web development, I've competed in multiple hackathons and won prizes.";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 flex justify-end z-0">
        <div className="w-1/2 h-full relative">
          <Image
            src={ProfilePic2}
            alt="Dhruv"
            fill
            className="object-cover transition-opacity duration-500 opacity-80 dark:opacity-75"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 80%, transparent 100%)",
              // Extra fading on all sides in dark mode
              ...(typeof window !== "undefined" &&
              document.documentElement.classList.contains("dark")
                ? {
                    maskImage:
                      "radial-gradient(ellipse at center, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, black 60%, transparent 100%)",
                  }
                : {}),
            }}
          />
        </div>
      </div>

      <div className="relative mt-[-60px] z-10 w-full h-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center px-6 lg:px-16">
        <div className="flex flex-col gap-4 w-full lg:w-4/5">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Hi! I'm{" "} <br />{" "}
            <ContainerTextFlip
              words={["Engineer", "Developer", "Speaker", "Dhruv."]}
            />
          </h1>
          <p className="text-base pl-2 text-gray-800 dark:text-gray-300">
            <TextGenerateEffect duration={1} filter={true} words={words} />
          </p>
        </div>
      </div>
    </div>
  );
}
