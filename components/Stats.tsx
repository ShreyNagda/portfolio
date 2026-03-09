"use client";

import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="py-10">
      <div className="flex flex-wrap lg:justify-between gap-4 mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex-1 flex gap-2 items-center justify-center lg:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <AnimatedCounter
              end={stat.num}
              duration={2}
              suffix={stat.suffix}
              className="text-2xl lg:text-4xl font-extrabold text-accent"
            />
            <p
              className={`${
                stat.text.length < 115 ? "max-w-[80px]" : "max-w-[150px]"
              } text-xs leading-3 lg:leading-normal text-white/80`}
            >
              {stat.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
