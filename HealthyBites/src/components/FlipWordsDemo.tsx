import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["delicious", "fresh", "spicy", "healthy"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-5xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Deliver
        <FlipWords words={words} /> <br />
        meals with HealthyBites
      </div>
    </div>
  );
}