import React from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaMapLocationDot, FaSquareInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contactinfo: React.FC = () => {
  return (
    <>
      <div className="text-white w-full md:w-[32%]">
        <h1 className="text-xl font-medium">Contact Info</h1>
        <ul className="mt-5 flex flex-col gap-3">
          <li className="flex items-center w-min gap-5 justify-center">
            <FaPhoneAlt className="text-orange-500" />
            <h1 className="text-sm">03079302311</h1>
          </li>
          <li className="flex items-center w-min gap-5 justify-center">
            <MdEmail className="text-orange-500" />
            <h1 className="text-sm">yaseenjabir@gmail.com</h1>
          </li>
          <li className="flex items-center w-min gap-5 justify-center">
            <FaMapLocationDot className="text-orange-500" />
            <h1 className="text-sm text-nowrap">Mardan, Pakistan</h1>
          </li>
        </ul>
        <div className="mt-5 flex gap-3">
          <div className="bg-gray-600 text-white w-min text-2xl p-2 rounded-full cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border hover:border-white transition-all ease-in-out duration-200 border border-transparent">
            <FaLinkedin />
          </div>
          <div className="bg-gray-600 text-white w-min text-2xl p-2 rounded-full cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border hover:border-white transition-all ease-in-out duration-200 border border-transparent">
            <FaGithub />
          </div>
          <div className="bg-gray-600 text-white w-min text-2xl p-2 rounded-full cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border hover:border-white transition-all ease-in-out duration-200 border border-transparent">
            <MdEmail />
          </div>
          <div className="bg-gray-600 text-white w-min text-2xl p-2 rounded-full cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border hover:border-white transition-all ease-in-out duration-200 border border-transparent">
            <FaTwitter />
          </div>
          <div className="bg-gray-600 text-white w-min text-2xl p-2 rounded-full cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border hover:border-white transition-all ease-in-out duration-200 border border-transparent">
            <FaSquareInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactinfo;
