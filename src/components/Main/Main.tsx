import React, { Suspense, lazy } from "react";

const HeroSection = lazy(() => import("./HeroSection/HeroSection"));
const About = lazy(() => import("./About/About"));
const Skills = lazy(() => import("./Skills/Skills"));
const Education = lazy(() => import("./Education/Education"));
const Projects = lazy(() => import("./Projects/Projects"));
const Timeline = lazy(() => import("./Timeline/Timeline"));
const Contact = lazy(() => import("./Contact/Contact"));

const Main: React.FC = () => {
  return (
    <section>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Timeline />
        <Contact />
      </Suspense>
    </section>
  );
};

export default Main;
