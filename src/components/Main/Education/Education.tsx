import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  return (
    <>
      <section id="education" className="w-full py-10 bg-[#e5ecfb]">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex items-center justify-center font-bold text-4xl gap-3"
        >
          <FaGraduationCap className="text-5xl" />
          <h1>
            My <span className="text-purple-800">Education</span>
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center max-w-[400px] mx-auto mt-3"
        >
          Education is not the learning of facts, but the training of the mind
          to think.
        </motion.p>
        <section className="px-5 flex flex-col gap-10 mt-7 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 1, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: false }}
          >
            <div className="max-w-[600px] mx-auto border shadow-lg flex flex-col md:flex-row hover:scale-105 transition-all ease-in-out duration-300 md:max-w-[900px]">
              <img
                src="https://th.bing.com/th/id/OIG3.Uc4MGSM6thWeLMDQPEjQ?w=1792&h=1024&rs=1&pid=ImgDetMain"
                className="md:w-[30%] md:min-h-[150px]"
              />
              <div className="p-4 flex flex-col gap-2 bg-white md:w-[70%]">
                <h1 className="text-blue-900 font-semibold text-2xl md:text-3xl">
                  Matric in Computer Science
                </h1>
                <p>Allied group of schools and colleges</p>
                <h1 className="text-green-700 text-xl font-semibold">
                  2020-2022
                </h1>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 1, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className="max-w-[600px] mx-auto border shadow-lg flex flex-col md:flex-row hover:scale-105 transition-all ease-in-out duration-300 md:max-w-[900px]">
              <img
                src="https://th.bing.com/th/id/OIG4.ZHsi24uVAp5X6msHFpe6?w=1792&h=1024&rs=1&pid=ImgDetMain"
                className="md:w-[30%] md:min-h-[150px]"
              />
              <div className="p-4 flex flex-col gap-2 bg-white md:w-[70%]">
                <h1 className="text-blue-900 font-semibold text-2xl md:text-3xl">
                  Intermediate in Computer Science
                </h1>
                <p>Punjab Group Of Schools And Colleges</p>
                <h1 className="text-green-700 text-xl font-semibold">
                  2022-2024
                </h1>
              </div>
            </div>
          </motion.div>
        </section>
      </section>
    </>
  );
};
export default Education;
