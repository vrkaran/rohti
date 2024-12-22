"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="pt-64 pb-64 h-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Login to your account
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Access your personalized dashboard, manage your preferences, and stay connected. Enter your credentials to log in and continue where you left off.
        </p>
        <input
          type="text"
          placeholder="User Id"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
        <div className="flex items-center justify-between mt-4 relative z-10">
          <label className="flex items-center text-neutral-500 text-sm">
            <input
              type="checkbox"
              className="mr-2 rounded border-neutral-800 focus:ring-teal-500"
            />
            Remember Me
          </label>
          <a
            href="#"
            className="text-teal-500 text-sm hover:underline focus:outline-none"
          >
            Forgot Password?
          </a>
        </div>
        <button className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-lg text-sm font-bold">
          Login
        </button>
        <div className="flex items-center justify-center mt-4 relative z-10">
          <hr className="w-full border-neutral-800" />
          <span className="px-2 text-neutral-500 text-sm">or</span>
          <hr className="w-full border-neutral-800" />
        </div>
        <div className="flex flex-col md:flex-row gap-2 mt-4">
          <button className="flex items-center justify-center w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 py-2 rounded-lg text-sm font-bold">
            {/* <img
              src="https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=50"
              alt="Google"
              className="h-5 w-5 mr-2"
            /> */}
            Login with Google
          </button>
          <button className="flex items-center justify-center w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 py-2 rounded-lg text-sm font-bold">
            {/* <img
              src="https://images.unsplash.com/photo-1534126511673-b6899657816a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=50"
              alt="Apple"
              className="h-5 w-5 mr-2"
            /> */}
            Login with Apple
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}