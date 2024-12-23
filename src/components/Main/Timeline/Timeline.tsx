import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const Timeline: React.FC = () => {
  return (
    <>
      <div id="timeline" className="w-full py-10 text-center bg-white">
        <motion.h1
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex items-center justify-center text-3xl font-bold gap-2"
        >
          <FaGraduationCap className="text-5xl" />
          Experience
        </motion.h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(246, 140, 9)",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(246, 140, 9)" }}
          iconStyle={{ background: "rgb(247, 124, 0)", color: "#000000" }}
          date="2024"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Backend Development with Node.js
          </h3>
          <p>
            Gained proficiency in Node.js, Express, and MongoDB, completing the
            full stack development skill set.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(246, 140, 9)",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(246, 140, 9)" }}
          iconStyle={{ background: "rgb(247, 124, 0)", color: "#000000" }}
          date="2024"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Full Stack with Next.js
          </h3>
          <p>
            Transitioned to Next.js for full stack development, learning about
            server-side rendering and building dynamic applications.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(246, 140, 9)",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(246, 140, 9)" }}
          iconStyle={{ background: "rgb(247, 124, 0)", color: "#000000" }}
          date="2024"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Explored React
          </h3>
          <p>
            Started building projects with React, enhancing my skills in
            component-based development and state management.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(246, 140, 9)",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(246, 140, 9)" }}
          iconStyle={{ background: "rgb(247, 124, 0)", color: "#000000" }}
          date="2023"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            JavaScript Mastery
          </h3>
          <p>
            Developed a solid understanding of JavaScript, enabling dynamic
            content and interactivity in web applications.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(246, 140, 9)",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(246, 140, 9)" }}
          iconStyle={{ background: "rgb(247, 124, 0)", color: "#000000" }}
          date="2023"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            HTML and CSS
          </h3>
          <p>
            {" "}
            Transitioned to HTML and CSS, developing foundational skills in
            structuring and styling web pages.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(246, 140, 9)",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(246, 140, 9)" }}
          iconStyle={{ background: "rgb(247, 124, 0)", color: "#000000" }}
          date="2023"
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title font-bold">
            Started Web Development
          </h3>
          <p>
            Began my web development journey with WordPress, learning the basics
            of web design and content management.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
