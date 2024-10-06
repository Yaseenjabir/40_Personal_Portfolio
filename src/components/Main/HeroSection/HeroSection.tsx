import React from "react";
import ParticlesComponent from "../../Particles";
import { ReactTyped } from "react-typed";
import { FaArrowAltCircleDown, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import HeroImage from "../HeroSection/hero.png";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const HeroSection: React.FC = () => {
  const scrollIntoSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 60; // Adjust if your header height differs
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        id="home"
        className="w-full min-h-[calc(100vh-60px)] relative overflow-hidden flex flex-col py-5 gap-16 lg:flex-row lg:max-w-[1200px] lg:mx-auto px-5"
      >
        <ParticlesComponent id="particles" />

        <motion.div
          initial={{ opacity: 0, y: -350 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="w-full flex flex-col lg:justify-center"
        >
          <div>
            <h1 className="text-[#141047] text-[50px] leading-snug font-bold">
              Hi There,
              <br />
              I'm Yaseen <span className="text-orange-500">Jabir</span>
            </h1>
          </div>
          <h1 className="text-[20px] font-medium mt-2">
            I Am Into{" "}
            <ReactTyped
              className="text-red-500"
              strings={[
                "Frontend Development",
                "Backend Development",
                "Full Stack Development",
              ]}
              loop
              typeSpeed={40}
            />
          </h1>
          <button
            onClick={() => scrollIntoSection("about")}
            className="bg-[#2e16b6] text-white w-min text-nowrap py-2 px-4 rounded-full mt-14 text-lg tracking-wider flex gap-1 items-center justify-center shadow-sm shadow-[#2e16b69d] hover:shadow-lg hover:shadow-[#78a0c5] transition-all ease-in-out duration-200 hover:gap-2"
          >
            About Me
            <FaArrowAltCircleDown />
          </button>
          <div className="mt-7 flex gap-3">
            <button className="bg-[#000000ec] p-3 rounded-full text-blue-400 hover:bg-[#4971c7] hover:text-white transition-all ease-in-out duration-300">
              <FaLinkedin className="text-xl" />
            </button>
            <button className="bg-[#000000ec] p-3 rounded-full text-blue-400 hover:text-white transition-all ease-in-out duration-300">
              <FaGithub className="text-xl" />
            </button>
            <button className="bg-[#000000ec] p-3 rounded-full text-blue-400 hover:bg-[#4971c7] hover:text-white transition-all ease-in-out duration-300">
              <FaTwitter className="text-xl" />
            </button>
            <button className="bg-[#000000ec] p-3 rounded-full text-blue-400 hover:bg-[#3868ce] hover:text-white transition-all ease-in-out duration-300">
              <FaTelegram className="text-xl" />
            </button>
            <button className="bg-[#000000ec] p-3 rounded-full text-blue-400 hover:bg-[#C13584] hover:text-white transition-all ease-in-out duration-300">
              <FaInstagram className="text-xl" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -350 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="w-full rounded-full lg:max-w-[450px] m-auto"
        >
          <Tilt
            options={defaultOptions}
            className="w-full rounded-full lg:max-w-[450px] px-5 m-auto"
          >
            <img
              className="w-full max-w-[400px] h-full mx-auto rounded-full lg:max-w-[500px]"
              src={HeroImage}
            />
          </Tilt>
        </motion.div>
      </section>
    </>
  );
};
export default HeroSection;
