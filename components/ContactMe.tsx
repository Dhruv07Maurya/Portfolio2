"use client";
import Link from "next/link";
import React from "react";
import { Vortex } from "./ui/vortex";

function ContactMe() {
  return (
    <div className=" h-[40rem] ">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 pt-4 w-full h-full"
      >
        <h2 className="text-black text-2xl md:text-6xl font-bold text-center dark:text-gray-300">
        Get in Touch!!
        </h2>
        <p className="text-gray-700 text-sm md:text-3xl max-w-xl mt-6 text-center dark:text-gray-300">
        Have questions or ideas? <Link className="text-2xl font-bold text-red-400" href="https://www.linkedin.com/in/dhruv-m-6a95102a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap">My LinkedIn</Link> is always open...no need to compile your message first! 😉
        </p>
      </Vortex>
    </div>
  );
}

export default ContactMe;
