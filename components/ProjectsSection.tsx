"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const INITIAL_DISPLAY_COUNT = 4;

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreProjects = projects.length > INITIAL_DISPLAY_COUNT;

  return (
    <section id="work" className="relative py-12 xl:py-20">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-primary to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-10"
        >
          <h2 className="text-3xl font-bold text-center mb-2">
            My <span className="text-accent">Work</span>
          </h2>
          <p className="text-white/60 text-center max-w-lg">
            A selection of projects I&apos;ve built
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="group relative flex flex-col gap-3"
              >
                {/* Image Container */}
                <div
                  className="relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer"
                  onClick={() =>
                    setActiveProject(activeProject === index ? null : index)
                  }
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-full z-10 transition-all duration-500 ${activeProject === index ? "bg-black/60" : "bg-black/10"}`}
                  ></div>
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} - ${project.tags.join(", ")} project showcasing ${project.tech.join(", ")}`}
                    fill
                    className={`object-cover transition-transform duration-500 ${activeProject === index ? "scale-110" : "scale-100"}`}
                  />

                  {/* Overlay Content */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between p-4 transition-opacity duration-300 z-20 ${activeProject === index ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Tags */}
                    <div className="flex justify-end">
                      <span className="text-accent text-xs font-bold uppercase tracking-widest">
                        {project.tags.join(", ")}
                      </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-center gap-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-white hover:text-accent transition-all duration-300 shadow-lg"
                      >
                        <BsGithub className="text-xl" />
                      </Link>
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg"
                        >
                          <BsArrowUpRight className="text-xl font-bold" />
                        </Link>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap justify-center gap-1">
                      {project.tech.slice(0, 3).map((item, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-[10px] font-medium text-white bg-primary/80 px-2 py-0.5 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] font-medium text-white bg-primary/80 px-2 py-0.5 rounded-md">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-1">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="gap-2"
            >
              {showAll ? (
                <>
                  Show Less <FaChevronUp />
                </>
              ) : (
                <>
                  View All Projects <FaChevronDown />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>

      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  );
}
