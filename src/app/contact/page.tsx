"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Join the waitlist for expert-led music classes designed for all skill levels. Whether you're learning an instrument, improving vocals, or exploring music theory, our sessions help you grow. Secure your spot today and be the first to know when new classes open!
        </p>
        <input
          type="text"
          placeholder="hi@abc.in"
          className="p-2 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  )
}

export default page