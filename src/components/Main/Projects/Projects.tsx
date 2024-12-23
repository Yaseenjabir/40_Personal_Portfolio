import React, { useState } from "react";
import { FaArrowRight, FaCode, FaLaptopCode } from "react-icons/fa";
import { Tilt } from "react-tilt";
import Instagram from "./assets/instagram.png";
import FoodDelivery from "./assets/Food_Delivery.png";
import portfolio from "./assets/portfolio.png";
import blog from "./assets/Blog.png";
import ARDoors from "./assets/A&R-Doors.png";
import craftWork from "./assets/craftwork.png";
import { motion } from "framer-motion";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 2000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

interface Data {
  id: number;
  img: string;
  title: string;
  desc: string;
  redirect: string;
}

const Projects: React.FC = () => {
  const data: Data[] = [
    {
      id: 1,
      img: FoodDelivery,
      title: "Food Delivery Service",
      desc: "Full Stack delivery web app using NextJS and MongoDB",
      redirect: "https://github.com/Yaseenjabir/33_Restu_App",
    },
    {
      id: 2,
      img: Instagram,
      title: "Instagram Clone",
      desc: "Static Instagram clone built with ReactJS having no backend",
      redirect: "https://github.com/Yaseenjabir/26_Instagram_Clone",
    },
    {
      id: 3,
      img: ARDoors,
      title: "A&R Doors",
      desc: "Garage door system with admin dashboard",
      redirect: "https://github.com/Yaseenjabir/42_Doorplay",
    },
    {
      id: 4,
      img: craftWork,
      title: "Craft Work",
      desc: "A personal craft work project",
      redirect: "https://github.com/Yaseenjabir/34_Artwork",
    },
    {
      id: 5,
      img: blog,
      title: "Food Blog",
      desc: "Fully functional food blog using MERN Stack",
      redirect: "https://github.com/Yaseenjabir/28_React_Site",
    },
    {
      id: 6,
      img: portfolio,
      title: "Portfolio",
      desc: "A Software Engineer personal portfolio",
      redirect: "https://github.com/Yaseenjabir/25_Samson_Zhang",
    },
  ];

  const [indexIs, setIndex] = useState<null | number>(null);

  return (
    <>
      <section
        id="projects"
        className="w-full py-10 bg-[linear-gradient(to_bottom,_#000031,_#00002c)] flex flex-col"
      >
        <motion.div
          initial={{ opacity: 1, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex w-full items-center justify-center text-4xl font-bold text-white gap-2 "
        >
          <FaLaptopCode />
          <h1>
            Projects <span className="text-yellow-400">Made</span>
          </h1>
        </motion.div>
        <section className="w-full px-8 mt-10 grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-[1150px] mx-auto">
          {data.map((item, index) => {
            return (
              <>
                <motion.div
                  initial={{ opacity: 0, rotateY: -180 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: false }}
                  className="w-[330px]"
                >
                  <Tilt key={item.id} options={defaultOptions}>
                    <div
                      onMouseEnter={() => setIndex(index)}
                      onMouseLeave={() => setIndex(null)}
                      className="w-full max-w-[330px] rounded-lg overflow-hidden h-[250px] relative"
                    >
                      <img src={item.img} className="w-full h-full" />

                      <div
                        className={`absolute w-full h-[80%] bg-[#ebebebcb] bottom-0 left-0 transition-all ease-in-out duration-300 ${
                          index === indexIs
                            ? "translate-y-[0%]"
                            : "translate-y-[82%]"
                        }`}
                      >
                        <h1 className="bg-yellow-400 text-black font-bold px-5 py-1 text-xl">
                          {item.title}
                        </h1>
                        <div className="p-5 flex flex-col items-center justify-center">
                          <p className="font-semibold text-lg">{item.desc}</p>
                          <a href={item.redirect}>
                            <button className="bg-black text-white py-2 px-6 rounded-md mt-5 flex items-center justify-center gap-1 hover:gap-2 transition-all ease-in-out duration-200 hover:shadow-lg hover:shadow-blue-600 hover:bg-blue-600 ">
                              <FaCode /> Code
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              </>
            );
          })}
        </section>
        <motion.a
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          href="https://github.com/Yaseenjabir"
          className="self-center"
        >
          <button className="bg-transparent border-[2px] border-white rounded text-white py-2 px-5 mt-10 text-lg flex items-center justify-center gap-1 hover:gap-2 hover:scale-105 transition-all ease-in-out duration-200 shadow shadow-white">
            View All <FaArrowRight className="text-base" />
          </button>
        </motion.a>
      </section>
    </>
  );
};
export default Projects;
