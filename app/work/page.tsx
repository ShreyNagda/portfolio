"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { TooltipContent, TooltipProvider } from "@radix-ui/react-tooltip";
import { BsArrowUpRight } from "react-icons/bs";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";
import SliderButtons from "@/components/SliderButtons";

const projects = [
  {
    num: "01",
    category: "Frontend Project",
    title: "Hangman Game",
    desc: "A word guessing game",
    thumbnail: "/portfolio images/1.png",
    tech: ["React JS", "HTML 5", "CSS 3", "Dictionary API"],
    github: "https://github.com/ShreyNagda/hangman-game-react",
    live: "https://guess-or-hang.netlify.app/",
  },
  {
    num: "02",
    category: "Mobile App",
    title: "Guess Up",
    desc: "A mobile based charades game for party buffs",
    thumbnail: "/portfolio images/2.png",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/ShreyNagda/guess-up",
  },
  {
    num: "03",
    category: "Frontend Project",
    title: "Kwizz",
    desc: "Online trivia game",
    thumbnail: "/portfolio images/3.png",
    tech: ["React JS", "Tailwind CSS", "OpenTDB API"],
    github: "https://github.com/ShreyNagda/kwizz-react",
    live: "https://kwizz-trivia.netlify.app/",
  },
  {
    num: "04",
    category: "Flutter Project",
    title: "Focus Flow Timer",
    desc: "A pomodoro based productivity timer",
    thumbnail: "/portfolio images/4.png",
    tech: ["Flutter"],
    github: "https://github.com/ShreyNagda/pomodoro",
    live: "https://focus-flow-timer.netlify.app/",
  },
  {
    num: "05",
    category: "Frontend Project",
    title: "TarotVerse",
    desc: "A Fun tarot card reader",
    thumbnail: "/portfolio images/5.png",
    tech: ["Next JS", "Tailwind CSS", "Gemini API"],
    github: "https://github.com/ShreyNagda/tarotverse",
    live: "https://tarotverse.vercel.app/",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  function handleSlideChange(swiper: SwiperType): void {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <div className="container mx-auto">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="flex flex-col justify-center lg:flex-row lg:gap-[30px] py-12">
          <div className="order-2 lg:order-none w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between">
            <div className="flex flex-col gap-[20px]">
              <div className="text-8xl leading-none text-outline text-transparent font-extrabold">
                {project.num}
              </div>
              <div className="text-[42px] font-bold leading-none text-white transition-all duration-500 capitalize">
                {project.category}
              </div>
              <p className="text-white/60">
                {project.title} - {project.desc}
              </p>
              <ul className="flex flex-wrap gap-x-4">
                {project.tech.map((t, i) => {
                  return (
                    <li key={i} className="text-lg lg:text-xl text-accent">
                      {t}
                      {i !== project.tech.length - 1 ? "," : ""}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-b-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.github} target="_blank">
                  <Tooltip>
                    <TooltipProvider delayDuration={100}>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <FaGithub />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white py-2 px-4 rounded-md text-primary">
                        <p>Github</p>
                      </TooltipContent>
                    </TooltipProvider>
                  </Tooltip>
                </Link>
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <Tooltip>
                      <TooltipProvider delayDuration={100}>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                          <BsArrowUpRight />
                        </TooltipTrigger>
                        <TooltipContent className="bg-white py-2 px-4 rounded-md text-primary">
                          <p>Live Link</p>
                        </TooltipContent>
                      </TooltipProvider>
                    </Tooltip>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="order-1 md:order-none w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:mb-12"
              onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group flex justify-center items-center">
                    {/* Overlay */}
                    <div className=""></div>
                    {/* Image */}
                    <div className="w-auto md:w-[400px] min-h-[180px] md:h-auto ">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        width={400}
                        height={300}
                        quality={100}
                        // className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButtons />
            </Swiper>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
