"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Typewriter({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    });
    return controls.stop;
  }, [count, text.length]);

  return (
    <span className={`inline-block relative ${className}`}>
      {/* Invisible text to reserve layout space */}
      <span className="opacity-0">{text}</span>

      {/* Animated text overlay */}
      <motion.span className="absolute left-0 top-0 whitespace-nowrap">
        {displayText}
      </motion.span>
    </span>
  );
}
