import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Timeline from "./Timeline/Timeline";
import Contact from "./Contact/Contact";

const Main: React.FC = () => {
  return (
    <>
      <section>
        <HeroSection />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Timeline />
        <Contact />
      </section>
    </>
  );
};

export default Main;
