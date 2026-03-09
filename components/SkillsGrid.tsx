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
import { skills } from "@/lib/data";

// Map icon names to actual icon components
const iconMap: Record<string, React.ReactNode> = {
  FaHtml5: <FaHtml5 />,
  FaCss3: <FaCss3 />,
  FaJs: <FaJs />,
  SiTypescript: <SiTypescript />,
  SiReact: <SiReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiTailwindcss: <SiTailwindcss />,
  FaNodeJs: <FaNodeJs />,
  SiMongodb: <SiMongodb />,
  SiPython: <SiPython />,
  SiFlask: <SiFlask />,
  SiFastapi: <SiFastapi />,
  SiFlutter: <SiFlutter />,
  SiFirebase: <SiFirebase />,
  SiGithub: <SiGithub />,
  SiFigma: <SiFigma />,
  SiCanva: <SiCanva />,
  SiPostman: <SiPostman />,
};

export default function SkillsGrid() {
  return (
    <section id="skills" className="relative py-12 xl:py-16">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-bold mb-2">
            My <span className="text-accent">Skills</span>
          </h2>
        </motion.div>

        {/* Compact Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <TooltipProvider key={index} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-12 h-12 bg-[#232329] rounded-lg flex items-center justify-center text-xl text-white/70 hover:text-accent hover:bg-[#2a2a32] transition-all duration-300 cursor-pointer"
                  >
                    {iconMap[skill.icon]}
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="bg-accent text-primary font-medium">
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  );
}
