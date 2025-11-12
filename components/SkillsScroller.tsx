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
} from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"; //

// Data from your app/resume/page.tsx
const skills = {
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
  ], //
};

// Single Skill item with Tooltip
const SkillIcon = ({ item }: { item: (typeof skills.items)[0] }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="flex items-center justify-center h-20 bg-[#232329] rounded-lg mx-4 p-6">
        <div className="text-4xl text-white/80 group-hover:text-accent transition-all duration-300">
          {item.icon} {/* */}
        </div>
      </TooltipTrigger>
      <TooltipContent className="bg-primary text-accent">
        <p>{item.name}</p> {/* */}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function SkillsScroller() {
  // We duplicate the skills array to create the seamless loop
  const duplicatedSkills = [...skills.items, ...skills.items];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-2 whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"], // Animate from start to end
          }}
          transition={{
            ease: "linear",
            duration: 30, // Adjust duration to control speed
            repeat: Infinity, // Loop forever
          }}
        >
          {duplicatedSkills.map((item, index) => (
            <SkillIcon key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
