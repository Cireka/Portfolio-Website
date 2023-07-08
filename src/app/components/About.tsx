import Image from "next/image";
import React from "react";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col justify-start">
        <h2 className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          INTRODUCTION
        </h2>
        <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview
        </h1>
        <Image
          className="opacity-35 rounded-xl"
          width={300}
          height={300}
          alt="Profile Picture"
          src={"/assets/Profile Pic Cropped.jpg"}
        />
        <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Hello, I am Tsotne, a Junior MERN Stack Developer. I have a solid
          foundation in JavaScript, HTML, CSS, and React/NextJs and am currently
          expanding my knowledge and skills in the MERN (MongoDB, ExpressJS,
          ReactJS, NodeJS) technology stack. <br /> My goal is to become
          proficient in developing full-stack applications using these
          technologies and to advance my career as a MERN Stack Developer.
          <br /> I have a strong foundation and 2 year experience in HTML, CSS,
          JavaScript, ReactJS and NextJS. I am available for work and capable of
          completing small to medium-sized tasks independently.
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "About");
