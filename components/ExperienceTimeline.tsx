"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SlBadge } from "react-icons/sl";

// Your updated data with the new "Technical Head" role
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
    // This `li` is now the relative parent for the badge
    // It has NO margin-left. It fills the space given by the <ol>'s padding.
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative mb-10" // <-- Item is relative, margin-left is removed
    >
      <span className="absolute flex items-center justify-center w-8 h-8 bg-accent rounded-full top-[1rem] left-[-1rem] -translate-x-1/2 ring-8 ring-[#1c1c22]">
        {/* Increased size to w-8 h-8 and centered the icon */}
        <div className="text-lg">{experiences.icon}</div>
      </span>

      <div className="p-6 bg-[#232329] rounded-xl shadow-sm">
        <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
          {item.role}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-accent">
          {item.duration}
        </time>
        <p className="md:mb-4 text-base font-normal text-white/60">
          {item.organization}
        </p>
        <p className="hidden md:visible text-sm font-normal text-white/80">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}

// The main timeline component
export default function ExperienceTimeline() {
  const targetRef = useRef<HTMLOListElement>(null); // Ref is on the <ol>

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-accent">Journey</span>
      </h2>

      {/*
        This is the relative parent for the lines AND the items.
        We add `pl-8` (2rem / 32px) to make space for the badge.
      */}
      <ol ref={targetRef} className="relative pl-8">
        {/* The background line. Positioned at `left-4` (1rem / 16px).
          This leaves space for the 32px-wide badge to center over it.
        */}
        <div className="absolute left-4 top-0 w-1.5 h-full bg-[#232329] rounded-full" />

        {/* The animated line, same position. */}
        <motion.div
          className="absolute left-4 top-0 w-1.5 bg-accent rounded-full origin-top"
          style={{ height }}
        />

        {experiences.items.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </ol>
    </section>
  );
}
