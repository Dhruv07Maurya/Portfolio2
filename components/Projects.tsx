import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Cover } from "@/components/ui/cover";

const projectsData = [
  {
    title: "Kom-Ai",
    description:
      "This 3D AI chat bot is designed for real-world interaction, delivering natural conversations in augmented environments. It responds strictly based on its built-in knowledge base, ensuring accurate, consistent, and domain-specific answers. ",
    link: "https://github.com/Dhruv07Maurya/kom-ai",
    code: "https://github.com/Dhruv07Maurya/kom-ai",
    previewVideo: "/videos/Kom-ai_vdo.mp4",
    technologies: [
      "LangChain",
      "Rhubarb lipsync",
      "Eleven Labs",
      "Three.js",
      "Mixamo Animations",
      "React",
    ],
  },
  {
    title: "Tagzeee",
    description:
      "This IoT-based solution streamlines in-store shopping by allowing users to scan QR and RFID tags on products for instant self-checkout, eliminating long queues. As customers exit, the system automatically verifies scanned and unscanned items, preventing theft and ensuring security. ",
    link: "https://github.com/Dhruv07Maurya/RFID-SERVER-GUI",
    code: "https://github.com/Dhruv07Maurya/RFID-SERVER-GUI",
    previewVideo: "/videos/rfid.mp4",
    technologies: ["MongoDB",
      "Express",
      "IOT",
      "Arduino Uno",
      "RFID Tags",
      "RFID Reader Module"],
  },
  {
    title: "AskDB",
    description:
      "An AI-powered assistant that turns natural language into MongoDB queries using LangChain. Users can ask questions in plain English, and the agent queries the database and returns results—no manual query writing needed. Fast, intuitive, and built for seamless data access | It removes the need for technical users to write complex queries manually",
    link: "https://github.com/Dhruv07Maurya/Agentics_pratice/blob/main/smart_atlas_agent.py",
    code: "https://github.com/Dhruv07Maurya/Agentics_pratice/blob/main/smart_atlas_agent.py",
    previewVideo: "/videos/CloudSpacePreview.mp4",
    technologies: [
      "MongoDB Atlas",
      "LangChain",
      "Groq",
      "FAISS",
    ],
  },
  {
    title: "SuiMon (*work in progress)",
    description:
      "The SuiMon is a playful, Pokémon-inspired payment wallet built on the Sui blockchain. This dApp merges the Degen culture of viral pets (inspired by Pokémon creatures) with the core functionalities of a payment infrastructure, offering users a unique, engaging, and gamified on-chain experience. ",
    link: "/",
    code: "/",
    previewVideo: "/videos/suimoan.mp4",
    technologies: [
      "Sui Move",
      "@mysten / sui.js",
      "@mysten / wallet-adapter",,
      "IPFS / Pinata",
      "Sui CLI",
      "Su Devnet/Faucet/Explorer",
      "Sui Wallet",
    ],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
       <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
       <Cover>My Projects</Cover>
      </h1>
      <center className="text-black dark:text-gray-400 text-xl"> <span className="text-2xl text-black dark:text-gray-300">&quot;Dream it. Code it. Ship it.&quot;</span> <br /> From building simple websites to developing complex AI applications, I have worked on a wide range of projects that challenged and inspired me.</center>
      <h1 className="text-2xl mt-2 mb-1 text-red-500 dark:text-red-200 font-bold">私のプロジェクトを探索する</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <Button variant="default">View</Button>
                </Link>
                <Link href={project.code}>
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
