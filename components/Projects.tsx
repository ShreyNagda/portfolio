"use client";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const data = [
    {
      title: "SmartQuit: Smoking Cessation App",
      description:
        "A hardware-software ecosystem designed to help users quit smoking through data-driven tracking",
      image: "/thumbnails/smartquit.png",
      link: "https://smartquit.netlify.app",
      github: "https://github.com/ShreyNagda/smartquit",
      tags: ["Mobile", "Health", "IoT"],
    },
    {
      title: "StaticSend: Static site form tool",
      description:
        "A tool to easily add forms to static sites without backend setup",
      image: "/thumbnails/staticsend.png",
      link: "https://staticsend.vercel.app",
      github: "https://github.com/ShreyNagda/StaticSend",
      tags: ["Web", "Tool", "Next.js"],
    },
    {
      title: "Guess Up: A word guessing game",
      description:
        "A fun and challenging word guessing game which provides hints and tracks player progress",
      image: "/thumbnails/guessup.png",
      link: "https://github.com/ShreyNagda/guess-up/releases",
      github: "https://github.com/ShreyNagda/guess-up",
      tags: ["Mobile", "Game", "Flutter"],
    },
    {
      title: "Insurease: Insurance Document Analyzer",
      description:
        "A tool to analyze & understand insurance documents efficiently using AI-powered insights",
      image: "/thumbnails/insurease.png",
      link: "https://insurease-phi.vercel.app",
      github: "https://github.com/ShreyNagda/insurease",
      tags: ["Web", "Productivity", "React"],
    },
    {
      title: "Focal: Minimalist Pomodoro timer",
      description:
        "A simple and effective Pomodoro timer to boost productivity and focus",
      image: "/thumbnails/focal.png",
      link: "https://focal-timer.netlify.app/",
      github: "https://github.com/ShreyNagda/focal",
      tags: ["Web", "Sharing", "Node.js"],
    },
    {
      title: "Fraymer: Retro Polaroid Photo Editor",
      description:
        "A fun and creative photo editor that gives your pictures a retro Polaroid look",
      image: "/thumbnails/fraymer.png",
      link: "https://fraymer.netlify.app",
      github: "https://github.com/ShreyNagda/fraymer",
      tags: ["Tool", "AI", "Python"],
    },
  ];

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section id="portfolio" className="bg-secondary/10 p-4 md:p-10 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 mb-10 md:mb-12 mt-10">
        <div className="flex-1">
          <p className="text-scale-xs uppercase tracking-widest text-primary/70">
            • Portfolio
          </p>
          <h2 className="text-scale-4xl leading-tight text-primary mt-2 md:mt-1">
            Showcase of My <br />
            Work
          </h2>
        </div>
        <div className="flex-1 text-scale-base text-primary/70 font-light max-w-xl leading-relaxed">
          A collection of projects I&apos;ve built, ranging from web
          applications to mobile apps and AI-powered tools. Each project
          represents my commitment to delivering quality solutions and
          continuous learning.
        </div>
      </div>

      {/* Horizontal Scrollable Container */}
      <div className="relative px-1 md:px-0">
        <div className="md:hidden pointer-events-none absolute right-0 top-0 bottom-4 w-10 z-10" />
        <div className="overflow-x-auto scrollbar-custom">
          <div className="flex gap-5 pb-4">
            {data.map((project, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className="flex-shrink-0 w-[20rem] md:w-[24rem] group rounded-lg border border-primary/10 overflow-hidden bg-white/80 cursor-pointer transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="overflow-hidden rounded-t-lg relative aspect-[16/9] w-full flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 md:group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="cursor-pointer"
                      >
                        <FaLocationArrow className="w-8 h-8 text-white hover:scale-110 transition-transform" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="cursor-pointer"
                      >
                        <FaGithub className="w-8 h-8 text-white hover:scale-110 transition-transform" />
                      </a>
                    )}
                  </div>
                  {/* Mobile: Show icons on click */}
                  {activeCard === index && (
                    <div className="absolute inset-0 bg-black/50 md:hidden z-10 flex items-center justify-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaLocationArrow className="w-8 h-8 text-white" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="w-8 h-8 text-white" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content Container - Flex grow to push tags to bottom */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="font-semibold text-primary text-scale-base mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-scale-sm text-primary/60 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags anchored at bottom */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-primary/10">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-scale-xs text-primary/70 bg-primary/10 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
