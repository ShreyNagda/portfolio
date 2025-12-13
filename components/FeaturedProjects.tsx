"use client";

import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

export default function FeaturedProjects() {
  // Select top 3 projects to feature
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/60 text-center max-w-2xl">
            A selection of my recent work, showcasing my technical skills and
            problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col gap-4"
            >
              {/* Image Container */}
              <div className="relative w-full h-[250px] rounded-xl overflow-hidden cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10 group-hover:bg-black/60 transition-all duration-500"></div>
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
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
                      className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-white hover:text-accent transition-all duration-300 shadow-lg"
                    >
                      <FaGithub className="text-2xl" />
                    </Link>
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg"
                      >
                        <BsArrowUpRight className="text-2xl font-bold" />
                      </Link>
                    )}
                  </div>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tech.map((item, index) => (
                      <span
                        key={index}
                        className="text-xs font-medium text-white bg-primary/80 px-2 py-1 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="text-outline text-transparent font-bold text-2xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/60 line-clamp-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>``
        <div className="flex justify-center">
          <Link href="/work">
            <Button
              variant="outline"
              size="lg"
              className="uppercase tracking-widest hover:bg-accent hover:text-primary transition-all"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
