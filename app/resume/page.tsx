"use client";

import { FaNodeJs, FaHtml5, FaCss3, FaInfoCircle, FaJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiTypescript,
  SiMongodb,
  SiPython,
  SiFlask,
  SiFastapi,
  SiReact,
  SiGithub,
} from "react-icons/si";

import { LuGraduationCap } from "react-icons/lu";
import { SlBadge } from "react-icons/sl";

import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const about = {
  title: "About Me",
  desc: "I'm a third-year IT student at A. P. Shah Institute of Technology. I specialize in full-stack web and cross-platform app development. Passionate about tech, with hands-on projects and volunteer experience.",
  icon: <FaInfoCircle />,
  info: [
    { fieldName: "Name", fieldValue: "Shrey Nagda" },
    { fieldName: "Email", fieldValue: "shreynagda2714@gmail.com" },
    { fieldName: "Phone", fieldValue: "(+91) 940 532 1984" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English" },
  ],
};

const experiences = {
  title: "My Experience",
  desc: "",
  icon: <SlBadge />,
  items: [
    {
      role: "Core Committee Member",
      organization: "HackScript 6.0",
      description:
        "Part of the core team managing the hackathon, helping with planning, promotion, and event execution.",
      duration: "Feb 2025 - Apr 2025",
    },
    {
      role: "Frontend Web Developer",
      organization: "GDG APSIT",
      description:
        "Worked on the official GDG website project as part of the development team, focusing on clean UI and interactive components.",
      duration: "Oct 2024 - Feb 2025",
    },
    {
      role: "Technical Co-Head",
      organization: "ITSA",
      description:
        "Led technical teams, organized student-led workshops, and conducted multiple tech-focused events during the fest.",
      duration: "Jul 2024 - Mar 2025",
    },
    {
      role: "Frontend Web Developer",
      organization: "OJUS 2024",
      description:
        "Contributed to building and maintaining the official fest website, ensuring responsive design and smooth user experience.",
      duration: "Dec 2023 - Mar 2024",
    },
  ],
};

const education = {
  title: "My Education / Certifications",
  icon: <LuGraduationCap />,
  desc: "",
  items: [
    {
      institution: "Mindluster.com",
      degree: "Basic React Certification",
      duration: "Jan 2023",
    },
    {
      institution: "Udemy",
      degree: "Flutter Bootcamp",
      duration: "Sep 2022",
    },
    {
      institution: "A P Shah Institute of Technology",
      degree: "Bachelor of Engineering",
      duration: "2022 - 2026",
    },
    {
      institution: "S H V O V & Jr. College",
      degree: "HSC (Higher Secondary Certificate)",
      duration: "2020 - 2022",
    },
    {
      institution: "Presidency School",
      degree: "SSC (Secondary School Certificate)",
      duration: "2010 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  icon: <SlBadge />,
  desc: "",
  items: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Mongo DB", icon: <SiMongodb /> },
    { name: "React JS", icon: <SiReact /> },
    { name: "Next JS", icon: <SiNextdotjs /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "Fastapi", icon: <SiFastapi /> },
    { name: "Github", icon: <SiGithub /> },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center justify-center py-12 lg:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          className="flex flex-col lg:flex-row gap-[60px]"
          defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto lg:mx-0 gap-3 lg:gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className=" w-full p-2">
            <TabsContent value="experience" className="flex flex-col gap-5">
              <div className="flex items-center justify-start gap-2 text-2xl text-accent font-extrabold">
                {experiences.icon}
                {experiences.title}
              </div>
              <div>{experiences.desc}</div>
              <ScrollArea className="h-[50vh] w-full">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {experiences.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <div className="text-accent text-sm">
                          {item.duration}
                        </div>
                        <div className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">
                          {item.role}
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{item.organization}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="education" className="flex flex-col gap-5">
              <div className="flex items-center justify-start gap-2 text-2xl text-accent font-extrabold">
                {education.icon}
                {education.title}
              </div>
              <div>{education.desc}</div>
              <ScrollArea className="h-[50vh] w-full">
                <ul className="grid grid-cols-1 lg:grid-cols-1 gap-4">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <div className="text-accent text-sm">
                          {item.duration}
                        </div>
                        <div className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                          <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="skills" className="flex flex-col gap-5">
              <div className="flex items-center justify-start gap-2 text-2xl text-accent font-extrabold">
                {skills.icon}
                {skills.title}
              </div>
              <div>{skills.desc}</div>
              <ScrollArea className="h-[50vh] w-full">
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {skills.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] p-4 rounded-xl flex flex-col justify-center items-center  gap-1"
                      >
                        <Tooltip>
                          <TooltipProvider>
                            <TooltipTrigger className="text-4xl text-center">
                              {item.icon}
                            </TooltipTrigger>
                            <TooltipContent className="text-accent text-base md:text-xl">
                              {item.name}
                            </TooltipContent>
                          </TooltipProvider>
                        </Tooltip>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="about" className="flex flex-col gap-5">
              <div className="flex items-center justify-start gap-2 text-2xl text-accent font-extrabold">
                {about.icon}
                {about.title}
              </div>
              <div>{about.desc}</div>
              <ul className="grid grid-cols-1 lg:grid-cols-1 gap-3">
                {about.info.map((info, index) => {
                  return (
                    <li key={index} className="flex gap-2 items-center">
                      <span className="text-white/60 text-xs lg:text-base">
                        {info.fieldName}:
                      </span>
                      <span className="text-sm lg:text-lg">
                        {info.fieldValue}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
