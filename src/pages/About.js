import React from "react";

export default function About() {
  return (
    // <div className="container mx-auto h-full w-full grid grid-flow-col grid-cols-1 grid-rows-2 md:grid-flow-row  md:grid-cols-2 md:grid-rows-1">
    <div className="about container mx-auto w-full flex py-16 flex-col lg:flex-row-reverse">
      <div className="flex items-center flex-1 md:px-16 lg:pr-24 lg:pl-0">
        <img src="img/me.png" alt="me" className="" />
      </div>

      <div className="text-center flex-1 lg:text-left md:px-16 lg:pl-24 lg:pr-0 lg:pt-16 ">
        <h2 className="text-5xl  md:text-7xl  xl:text-7xl	">about me</h2>

        <p className="text-xl md:text-xl xl:text-4xl leading-none mb-3">
          I am a Software Developer from Laguna, Philippines.
        </p>

        <p className="text-base md:text-sm xl:text-2xl">
          I am a former Piping Engineer turned Software Developer. I have an
          earnest passion towards creating useful applications with great user
          interfaces, animations and intuitive, dynamic user experiences.
        </p>
      </div>
    </div>
  );
}
