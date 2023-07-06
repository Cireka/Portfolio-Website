import Image from "next/image";
import { Fragment } from "react";
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

export default function Home() {
  return (
    <Fragment>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
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
