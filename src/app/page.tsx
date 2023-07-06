import Image from "next/image";
import { Fragment } from "react";
import heroBg from "../../public/assets/herobg.png";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./components";
import Computer from "./components/Computer";

export default function Home() {
  return (
    <Fragment>
      <div className="relative z-0 bg-primary">
        <div
          className={`bg-[url(/assets/herobg.png)]  bg-cover bg-no-repeat bg-center`}
        >
          <Navbar />
          <Hero />
        </div>
        <Computer />
        <About />
        <Tech />
        <Experience />
        <Works />
        <Feedbacks />
        <div className="z-0 relative">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Fragment>
  );
}
