import React from "react";

const Hero = () => {
  return (
    <section className="w-fullpy-5 max-w-[1100px] mx-auto h-screen mt-[64px] relative">
      <div className="flex items-start ">
        <div className="flex items-start gap-[22px]">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
            <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
          </div>
          <div>
            <h2 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
              Hi, I'm <span className="text-[#915EFF]">Tsotne</span>
            </h2>
            <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
              I develop Frontend Web Applications using ReactJS. <br />
              I'm currently learning backend development. <br />
              Aiming to become a MERN Stack Developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
