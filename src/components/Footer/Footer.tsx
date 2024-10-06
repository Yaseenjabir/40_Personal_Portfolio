import React from "react";
import Portfolio from "./Portfolio/Portfolio";
import Quicklinks from "./QuickLinks/Quicklinks";
import Contactinfo from "./ContactInfo/ContactInfo";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-[#00012b] w-full py-5 px-8 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-10 md:flex-row max-w-[1150px]">
          <Portfolio />
          <Quicklinks />
          <Contactinfo />
        </div>
        <div className="text-center w-full text-white mt-10 pt-2 border-t border-[#ffffff7c]">
          <h1>All right reserved by Yaseen Jabir</h1>
        </div>
      </footer>
    </>
  );
};

export default Footer;
