import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLaptopCode,
  FaNodeJs,
  FaNpm,
  FaReact,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import {
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoVercel,
} from "react-icons/io5";
import { RiBearSmileFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAxios,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNetlify,
  SiNodemon,
  SiPostman,
  SiRedux,
  SiShadcnui,
  SiSocketdotio,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const data = [
    { id: 1, name: "ReactJS", logo: <FaReact />, color: "text-blue-500" },
    { id: 2, name: "NodeJS", logo: <FaNodeJs />, color: "text-green-500" },
    { id: 3, name: "ExpressJS", logo: <SiExpress />, color: "text-white" },
    { id: 4, name: "MongoDB", logo: <SiMongodb />, color: "text-green-400" },
    { id: 5, name: "Mongoose", logo: <SiMongoose />, color: "text-green-500" },
    { id: 6, name: "NextJS", logo: <TbBrandNextjs />, color: "text-white" },
    { id: 7, name: "Redux", logo: <SiRedux />, color: "text-purple-700" },
    {
      id: 8,
      name: "Firebase",
      logo: <IoLogoFirebase />,
      color: "text-yellow-500",
    },
    { id: 9, name: "SASS", logo: <FaSass />, color: "text-pink-500" },
    {
      id: 10,
      name: "Tailwind",
      logo: <RiTailwindCssFill />,
      color: "text-blue-400",
    },
    {
      id: 12,
      name: "Bootstrap",
      logo: <FaBootstrap />,
      color: "text-purple-800",
    },
    { id: 13, name: "HTML", logo: <FaHtml5 />, color: "text-orange-700" },
    { id: 14, name: "CSS", logo: <FaCss3Alt />, color: "text-blue-500" },
    {
      id: 15,
      name: "Javascript",
      logo: <IoLogoJavascript />,
      color: "text-yellow-500",
    },
    {
      id: 16,
      name: "Typescript",
      logo: <SiTypescript />,
      color: "text-blue-500",
    },
    {
      id: 17,
      name: "Zustand",
      logo: <RiBearSmileFill />,
      color: "text-gray-500",
    },
    { id: 18, name: "MySQL", logo: <SiMysql />, color: "text-yellow-500" },
    { id: 19, name: "Netlify", logo: <SiNetlify />, color: "text-blue-400" },
    { id: 20, name: "Vercel", logo: <IoLogoVercel />, color: "text-white" },
    { id: 21, name: "NPM", logo: <FaNpm />, color: "text-red-500" },
    { id: 22, name: "Nodemon", logo: <SiNodemon />, color: "text-green-600" },
    { id: 23, name: "Postman", logo: <SiPostman />, color: "text-orange-500" },
    { id: 24, name: "Axios", logo: <SiAxios />, color: "text-gray-500" },
    {
      id: 25,
      name: "Wordpress",
      logo: <FaWordpress />,
      color: "text-blue-600",
    },
    { id: 26, name: "JWT", logo: <SiJsonwebtokens />, color: "text-white" },
    { id: 27, name: "Socket.io", logo: <SiSocketdotio />, color: "text-white" },
    { id: 28, name: "ShadCn", logo: <SiShadcnui />, color: "text-gray-300" },
    { id: 29, name: "ZOD", logo: <SiZod />, color: "text-blue-500" },
    { id: 30, name: "Git", logo: <FaGitAlt />, color: "text-orange-600" },
    { id: 31, name: "Github", logo: <FaGithub />, color: "text-white" },
  ];

  return (
    <>
      <section id="skills" className="w-full py-5 bg-purple-900">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex w-full items-center justify-center text-4xl font-bold text-white gap-2"
        >
          <FaLaptopCode />
          <h1>
            Skills & <span className="text-yellow-400">Abilities</span>
          </h1>
        </motion.div>
        <div className="px-5 mt-8">
          <div className="bg-[#00001665] max-w-[1100px] mx-auto p-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 rounded-lg">
            {data.map((item) => {
              return (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 500,
                        duration: 1,
                      },
                    }}
                    viewport={{ once: false }}
                    className="flex items-center flex-col justify-center bg-[#000016E6] text-white py-5 rounded-lg"
                  >
                    {React.cloneElement(item.logo, {
                      className: `w-[48px] h-[48px] ${item.color}`,
                    })}
                    <h1 className="text-xl">{item.name}</h1>
                  </motion.div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
