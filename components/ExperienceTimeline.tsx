"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { experiences } from "@/lib/data";

const INITIAL_DISPLAY_COUNT = 3;

export default function ExperienceTimeline() {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll
    ? experiences
    : experiences.slice(0, INITIAL_DISPLAY_COUNT);

  const hasMoreExperiences = experiences.length > INITIAL_DISPLAY_COUNT;

  return (
    <section id="experience" className="relative py-12 xl:py-16">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">
            My <span className="text-accent">Journey</span>
          </h2>
        </motion.div>

        {/* Horizontal Scrollable Cards on Mobile, Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayedExperiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="relative group"
            >
              <div className="h-full bg-gradient-to-br from-[#232329] to-[#1c1c22] p-5 rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300">
                {/* Duration */}
                <div className="flex items-center gap-2 mb-3">
                  <FaCalendarAlt className="text-accent text-xs" />
                  <span className="text-accent text-xs font-medium">
                    {item.duration}
                  </span>
                </div>

                {/* Role */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                  {item.role}
                </h3>

                {/* Organization */}
                <div className="flex items-center gap-2 mb-3">
                  <FaBriefcase className="text-white/40 text-xs" />
                  <span className="text-white/60 text-sm font-medium">
                    {item.organization}
                  </span>
                </div>

                {/* Description - Hidden on mobile for compactness */}
                <p className="text-white/50 text-xs leading-relaxed hidden md:block line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMoreExperiences && (
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
                  Show More ({experiences.length - INITIAL_DISPLAY_COUNT} more){" "}
                  <FaChevronDown />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>

      {/* Bottom gradient separator */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  );
}
