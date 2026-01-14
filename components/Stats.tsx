"use client";

import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";

const stats = [
  { num: 4, text: "Years of experience", suffix: "+" },
  { num: 20, text: "Projects completed", suffix: "+" },
  { num: 8, text: "Technologies mastered", suffix: "+" },
  { num: 500, text: "Code commits", suffix: "+" },
];

export default function Stats() {
  return (
    <section className="mt-8 mb-12 lg:pt-12 lg:pb-0 py-10">
      <div className="flex flex-wrap lg:justify-between gap-4 max-w-[80vw] mx-auto lg:max-w-none">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex-1 flex gap-2 items-center justify-center lg:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
