import React from "react";
import { FaFacebook, FaGithub, FaPhoneAlt, FaTwitter } from "react-icons/fa";
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
            <h1 className="text-sm">yaseenjabir791@gmail.com</h1>
          </li>
          <li className="flex items-center w-min gap-5 justify-center">
            <FaMapLocationDot className="text-orange-500" />
            <h1 className="text-sm text-nowrap">Mardan, Pakistan</h1>
          </li>
        </ul>
        <div className="mt-5 flex gap-3">
          <a
            href="https://www.facebook.com/syedyaseen.jabir?mibextid=ZbWKwL"
            className="bg-gray-600 text-white w-min text-2xl p-2 rounded-full cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border hover:border-white transition-all ease-in-out duration-200 border border-transparent"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            href="https://github.com/Yaseenjabir"
            className="bg-gray-600 text-white w-min text-2xl p-2 rounded-full cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border hover:border-white transition-all ease-in-out duration-200 border border-transparent"
          >
            <FaGithub />
          </a>

          <a
            target="_blank"
            href="https://x.com/yaseenjabir791"
            className="bg-gray-600 text-white w-min text-2xl p-2 rounded-full cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border hover:border-white transition-all ease-in-out duration-200 border border-transparent"
          >
            <FaTwitter />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/ezgod791?igsh=ODU3bGo0MGRjdHBt"
            className="bg-gray-600 text-white w-min text-2xl p-2 rounded-full cursor-pointer hover:bg-transparent hover:text-orange-500 hover:border hover:border-white transition-all ease-in-out duration-200 border border-transparent"
          >
            <FaSquareInstagram />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contactinfo;
