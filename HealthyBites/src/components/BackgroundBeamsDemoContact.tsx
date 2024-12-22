/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemoContact() {
  return (
    <div className="pt-64 pb-72 h-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We'd love to hear from you! Fill out the form below to get in touch with us, and we’ll respond as soon as possible.
        </p>

        <input
          type="text"
          placeholder="Your Name"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
        <textarea
          placeholder="Your Message"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 h-32"
        ></textarea>

        <button className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg text-sm font-bold">
          Send Message
        </button>
      </div>
      <BackgroundBeams />
    </div>
  );
}