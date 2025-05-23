"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.3, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div className="w-[246px] h-[246px] lg:w-[448px] lg:h-[448px] mix-blend-lighten absolute overflow-hidden">
          <Image
            src={"/p1.png"}
            quality={100}
            fill
            alt=""
            className="object-contain rounded-full"
          />
        </motion.div>
        {/* Circle */}
        <motion.svg
          className="w-[250px] h-[250px] lg:w-[450px] lg:h-[450px]"
          fill="transparent"
          viewBox="0 0 450 450"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="225"
            cy="225"
            r="225"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 92", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
