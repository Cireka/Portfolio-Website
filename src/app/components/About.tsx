import Image from "next/image";
import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const About = () => {
  return (
    <motion.div variants={textVariant()}>
      <div className="mt-[40px] w-full max-w-7xl mx-auto max-sm:mt-30px]">
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
          <div className="flex gap-5 items-center mt-7 mb-2">
            <Image
              className="cursor-pointer"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/tsotne-tsirekidze-355944244/",
                  "_blank"
                );
              }}
              width={35}
              height={35}
              alt="Linkedin"
              src={"/assets/Links/LI-In-Bug.png"}
            />
            <Image
              className="cursor-pointer"
              onClick={() => {
                window.open("mailto:tsotne.tsirekidze11@gmail.com", "_blank");
              }}
              width={35}
              height={35}
              alt="Linkedin"
              src={"/assets/Links/Gmail_Logo_512px.png"}
            />
            <Image
              className="cursor-pointer"
              onClick={() => {
                window.open("https://github.com/Cireka", "_blank");
              }}
              width={35}
              height={35}
              alt="Linkedin"
              src={"/assets/github.png"}
            />
          </div>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Hello, I am Tsotne, a Junior MERN Stack Developer. I have a solid
            foundation in JavaScript, HTML, CSS, and React/NextJs and am
            currently expanding my knowledge and skills in the MERN (MongoDB,
            ExpressJS, ReactJS, NodeJS) technology stack. <br /> My goal is to
            become proficient in developing full-stack applications using these
            technologies and to advance my career as a MERN Stack Developer.
            <br /> I have a strong foundation and 2 year experience in HTML,
            CSS, JavaScript, ReactJS and NextJS. I am available for work and
            capable of completing small to medium-sized tasks independently.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(About, "About");
