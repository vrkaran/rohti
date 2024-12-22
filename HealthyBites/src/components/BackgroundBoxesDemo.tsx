"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-bold")}>
      Get in Touch with Us
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        We’d love to hear from you! Whether you have questions, feedback, or inquiries, feel free to reach out.
      </p>
      <div className="mt-4 z-20 space-y-2 text-center">
        <p className="text-neutral-400 text-sm">
          <strong>Email:</strong> <a href="mailto:contact@example.com" className="text-teal-400 hover:underline">contact@example.com</a>
        </p>
        <p className="text-neutral-400 text-sm">
          <strong>Phone:</strong> <a href="tel:+11234567890" className="text-teal-400 hover:underline">+1 123-456-7890</a>
        </p>
        <p className="text-neutral-400 text-sm">
          <strong>Address:</strong> 123 Example Street, City, Country
        </p>
      </div>
    </div>
  );
}
