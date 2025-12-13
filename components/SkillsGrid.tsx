"use client";

import { motion } from "framer-motion";
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
  SiFigma,
  SiCanva,
  SiPostman,
  SiFirebase,
} from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

// Categorized skills data
const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building beautiful, responsive, and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React JS", icon: <SiReact /> },
      { name: "Next JS", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side logic and scalable databases.",
    skills: [
      { name: "Node JS", icon: <FaNodeJs /> },
      { name: "Mongo DB", icon: <SiMongodb /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Fastapi", icon: <SiFastapi /> },
    ],
  },
  {
    title: "App Development",
    description: "Developing cross-platform mobile applications.",
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Tools & Version Control",
    description: "Essential tools for collaboration and deployment.",
    skills: [
      { name: "Github", icon: <SiGithub /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

export default function SkillsGrid() {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various
            domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#232329] p-8 rounded-xl border border-transparent hover:border-accent/50 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <p className="text-white/60 mb-6 text-sm">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <TooltipProvider key={skillIndex} delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 bg-[#1c1c22] rounded-lg flex items-center justify-center text-2xl text-white/80 hover:text-accent hover:bg-white transition-all duration-300">
                        {skill.icon}
                      </TooltipTrigger>
                      <TooltipContent className="bg-white text-primary font-medium">
                        <p>{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
