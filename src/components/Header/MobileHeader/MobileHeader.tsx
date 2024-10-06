import React, { useState, useEffect } from "react";
import { FaNodeJs } from "react-icons/fa";

const MobileHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const sections = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "timeline",
    "contact",
  ];

  const scrollIntoSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 40;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      setMenuOpen(false);
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 60 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (): void => {
    setIsOpen((prev) => !prev);
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="w-full sticky top-0 h-[60px] border-b flex items-center justify-between px-10 md:hidden shadow-md bg-white z-50">
        <div
          onClick={() => scrollIntoSection("home")}
          className="flex hover:text-orange-400 text-[#141047] transition-all ease-in-out duration-200 cursor-pointer items-center text-xl justify-center w-min"
        >
          <FaNodeJs />
          <h1 className="font-bold">Yaseen</h1>
        </div>
        <div
          className={`menu-btn ${isOpen ? "close" : ""} z-10`}
          onClick={handleClick}
        >
          <div className={`btn-line bg-black`}></div>
          <div className={`btn-line bg-black`}></div>
          <div className={`btn-line bg-black`}></div>
        </div>
      </header>
      <div
        className={`w-[80%] h-[calc(100vh-60px)] bg-[#0e0b35] px-10 py-7 fixed top-[60px] right-0 flex items-start justify-center ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-all ease-in-out duration-1000 md:hidden z-50`}
      >
        <ul className="text-white w-full flex flex-col gap-5">
          {sections.map((sectionId) => (
            <li
              key={sectionId}
              className={`font-bold cursor-pointer border-b-4 px-2 text-xl pb-2 border-transparent hover:border-blue-600 transition-all ease-in-out duration-200 ${
                activeSection === sectionId ? "border-blue-600" : ""
              }`}
              onClick={() => scrollIntoSection(sectionId)}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileHeader;
