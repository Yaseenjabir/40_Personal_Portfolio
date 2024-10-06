import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Quicklinks: React.FC = () => {
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
    <div className="w-full text-white md:w-[32%]">
      <h1 className="text-xl font-medium">Quick Links</h1>
      <ul className="mt-5 flex flex-col gap-1">
        {sections.map((sectionId) => (
          <li
            key={sectionId}
            className={`flex items-center justify-start gap-2 hover:text-orange-500 cursor-pointer w-min`}
            onClick={() => scrollIntoSection(sectionId)}
          >
            <FaArrowAltCircleRight />
            {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quicklinks;
