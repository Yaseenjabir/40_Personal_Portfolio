import React, { useEffect, useState } from "react";
import { FaNodeJs } from "react-icons/fa";

const DeskTopHeader: React.FC = () => {
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
      const headerHeight = 50;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
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

  return (
    <>
      <header className="hidden md:flex w-full sticky top-0 z-50 h-[60px] border-b items-center justify-between px-10 shadow-md bg-white">
        <div className="flex w-full justify-between max-w-[900px] mx-auto">
          <div
            onClick={() => scrollIntoSection("home")}
            className="flex hover:text-orange-400 text-[#141047] transition-all ease-in-out duration-200 cursor-pointer items-center text-xl justify-center w-min"
          >
            <FaNodeJs />
            <h1 className="font-bold">Yaseen</h1>
          </div>

          <ul className="flex text-gray-800 gap-5 font-medium text-lg">
            {sections.map((sectionId) => (
              <li
                key={sectionId}
                className={`border-b-2 cursor-pointer h-6 transition-all hover:h-8 ease-in-out duration-300 ${
                  activeSection === sectionId
                    ? "h-8 border-blue-700 text-blue-700"
                    : "border-transparent hover:border-blue-700 hover:text-blue-700"
                }`}
                onClick={() => scrollIntoSection(sectionId)}
              >
                {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default DeskTopHeader;
