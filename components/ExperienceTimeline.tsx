"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SlBadge } from "react-icons/sl";

// Data from your app/resume/page.tsx
const experiences = {
  title: "My Experience",
  icon: <SlBadge />,
  items: [
    {
      role: "Technical Head",
      organization: "ITSA",
      description:
        "Part of the core team managing the hackathon, helping with planning, promotion, and event execution.",
      duration: "September 2025 - Apr 2026",
    },
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

// A single timeline item
function TimelineItem({ item }: { item: (typeof experiences.items)[0] }) {
  return (
    // Use whileInView to animate as it scrolls into view
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // Only animate once
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="mb-10 ml-8 p-6 bg-[#232329] rounded-xl shadow-sm"
    >
      {/* The dot on the timeline */}
      <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-[#1c1c22]">
        {experiences.icon}
      </span>

      <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
        {item.role}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-accent">
        {item.duration}
      </time>
      <p className="md:mb-4 text-base font-normal text-white/60">
        {item.organization}
      </p>
      <p className="text-sm font-normal text-white/80 hidden md:visible">
        {item.description}
      </p>
    </motion.li>
  );
}

// The main timeline component
export default function ExperienceTimeline() {
  const targetRef = useRef<HTMLDivElement>(null);

  // 1. Get scroll progress relative to the targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Start tracking when bottom of viewport hits top of component
  });

  // 2. Transform the scroll progress (0 to 1) into a height value
  const height = useTransform(scrollYProgress, [0, 0.65], ["0%", "100%"]);

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-5 md:mb-12">
        My <span className="text-accent">Journey</span>
      </h2>

      {/* 3. The ref is attached to the container */}
      <div ref={targetRef} className="relative">
        {/* The static background line */}
        <div className="absolute left-0 top-0 w-1.5 h-full bg-[#232329] rounded-full" />

        {/* 4. The animated foreground line uses the transformed 'height' */}
        <motion.div
          className="absolute left-0 top-0 w-1.5 h-full bg-accent rounded-full origin-top"
          style={{ height }} // Animate the height based on scroll
        />

        <ol className="relative ml-2">
          {experiences.items.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </ol>
      </div>
    </section>
  );
}
