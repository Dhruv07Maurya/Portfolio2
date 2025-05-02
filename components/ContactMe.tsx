"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Vortex } from "./ui/vortex";
import emailjs from "@emailjs/browser";

function ContactMe() {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@") || !description) {
      alert("Please fill out all fields with valid information.");
      return;
    }

    emailjs
      .sendForm("service_nm7tbuq", "template_pjt39m4", form.current!, {
        publicKey: "lLcn8yVzNgAjs0Azf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          setEmail("");
          setDescription("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message failed to send.");
        }
      );
  };

  return (
    <div className="h-[40rem]">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-4 md:px-10 pt-4 w-full h-full"
      >
        <h2 className="text-black text-2xl md:text-6xl font-bold text-center dark:text-gray-300">
          Get in Touch!!
        </h2>

        <p className="text-gray-700 text-sm md:text-3xl max-w-xl mt-6 text-center dark:text-gray-300">
          Have questions or ideas?{" "}
          <Link
            className="text-2xl font-bold text-red-400"
            href="https://www.linkedin.com/in/dhruv-m-6a95102a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn
          </Link>{" "}
          is always open... no need to compile your message first! 😉
        </p>

        <p className="text-2xl mt-2 font-bold text-red-400">Or</p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-10 w-full max-w-md flex flex-col gap-4"
        >
          <input
            type="email"
            name="from_email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200/70 dark:bg-zinc-800/70 border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-full px-4 py-3 focus:outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Write a message..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="bg-gray-200/80 dark:bg-zinc-800/70 border border-gray-300 dark:border-gray-700/70 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded-lg px-4 py-3 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 rounded-full py-3 px-6 font-medium transition-colors"
          >
            Send Message
          </button>
        </form>
      </Vortex>
    </div>
  );
}

export default ContactMe;
