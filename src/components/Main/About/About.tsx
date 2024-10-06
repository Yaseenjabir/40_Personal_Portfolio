import React from "react";
import { FaUser } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <>
      <div id="about" className="w-full bg-white pt-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex text-3xl items-center font-bold justify-center mb-5"
        >
          <FaUser className="mr-3" />
          <span className="mr-3">About</span>
          <span className="text-purple-700">Me</span>
        </motion.div>
        <section className="w-full flex flex-col gap-5 lg:flex-row max-w-[1150px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="w-full mx-auto max-w-[400px] relative lg:w-[50%]"
          >
            <Tilt
              options={defaultOptions}
              style={{
                padding: "30px",
                margin: "auto",
              }}
              className="w-full relative lg:w-[100%]"
            >
              <img
                className="w-full rounded-xl shadow-xl"
                src="https://th.bing.com/th/id/OIG1.3wVUvx_ndPvSmaTuFb76?w=1024&h=1024&rs=1&pid=ImgDetMain"
              />
            </Tilt>
          </motion.div>
          <div className="w-full flex items-center justify-center lg:w-[50%]">
            <div className="w-full px-10 sm:px-14 md:mx-24 lg:mx-0">
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="font-bold text-2xl"
              >
                I'm Yaseen Jabir
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="font-semibold text-sm text-[#141047]"
              >
                Full Stack Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="text-sm text-[#000000e8] mt-5"
              >
                I am a Full-Stack developer based in Mardan KP, Pakistan. I have
                done my Intermediate in Computer Sciens from Punjab Group of
                Colleges. I am very passionate about improving my coding skills
                & developing applications & websites. I build WebApps and
                Websites using MERN Stack. Working for myself to improve my
                skills. Love to build Full-Stack clones.
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="mt-3 text-sm text-[#000000e8] flex gap-1"
              >
                <span className="text-blue-700">Email</span>
                <span>:</span>
                <span>yaseenjabir@gmail.com</span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="mt-3 text-sm text-[#000000e8] flex gap-1"
              >
                <span className="text-blue-700">Place</span>
                <span>:</span>
                <span>Mardan, Pakistan</span>
              </motion.h1>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="rounded-md flex items-center justify-center gap-1 py-2 px-5 text-white bg-[#2506ad] shadow-lg shadow-[#2506ad98] mt-5 font-semibold hover:bg-[#1f06ad] transition-all ease-in-out duration-300 hover:gap-2"
              >
                Resume
                <MdArrowForwardIos />
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
