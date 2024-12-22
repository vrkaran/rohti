/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemoTeam() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Software Development Intern",
      image: "/path/to/john-image.jpg", // Replace with actual image path
      description: "A passionate intern eager to learn and contribute to the development team.",
    },
    {
      name: "Jane Smith",
      role: "Data Science Intern",
      image: "/path/to/jane-image.jpg", // Replace with actual image path
      description: "An aspiring data scientist exploring new ways to analyze and interpret data.",
    },
    {
      name: "Michael Brown",
      role: "Marketing Intern",
      image: "/path/to/michael-image.jpg", // Replace with actual image path
      description: "A marketing enthusiast learning how to create and manage campaigns.",
    },
    {
      name: "Emily Davis",
      role: "UX/UI Design Intern",
      image: "/path/to/emily-image.jpg", // Replace with actual image path
      description: "A creative intern helping to design user-friendly interfaces and experiences.",
    },
  ];

  return (
    <div className="pt-64 pb-72 px-10 h-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto p-4 text-center">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Meet Our Team
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Our talented team is at the heart of everything we do. Get to know the people who drive our success.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 text-center"
            >
              {/* <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              /> */}
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                {member.name}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {member.role}
              </p>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}