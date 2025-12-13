"use client";

import { motion } from "framer-motion";
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

export default function ExperienceTimeline() {
  return (
    <section className="container mx-auto py-12 xl:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">
          My <span className="text-accent">Journey</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          A timeline of my professional growth and contributions to various
          organizations.
        </p>
      </motion.div>

      <div className="relative flex flex-col gap-8">
        {/* Central Line (Desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />

        {experiences.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-center justify-between w-full ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Empty Space for Desktop Alignment */}
            <div className="hidden md:block w-[45%]" />

            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 top-0 md:translate-y-6 w-4 h-4 bg-primary border-2 border-accent rounded-full z-10 -translate-x-1/2 md:translate-x-[-50%]" />

            {/* Content Card */}
            <div className="w-full md:w-[45%] pl-12 md:pl-0">
              <div className="bg-[#232329] p-6 rounded-xl border border-transparent hover:border-accent/50 transition-all duration-300 group relative">
                {/* Mobile Line Connector */}
                <div className="md:hidden absolute left-[-29px] top-6 w-8 h-0.5 bg-accent/20" />

                <span className="text-accent text-sm font-bold mb-2 block">
                  {item.duration}
                </span>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  {item.role}
                </h3>
                <h4 className="text-white/80 font-medium mb-4">
                  {item.organization}
                </h4>
                <p className="text-white/60 text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Mobile Vertical Line */}
        <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2" />
      </div>
    </section>
  );
}
