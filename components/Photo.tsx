"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Photo() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  // Reduced tilt range to +/- 10 degrees for a subtle effect
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [10, -10]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-10, 10]),
    springConfig
  );

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const touch = event.touches[0];
    const mouseX = touch.clientX - rect.left;
    const mouseY = touch.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      className="w-full h-full relative flex items-center justify-center"
      style={{ perspective: 1000 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            opacity: { delay: 2, duration: 0.3, ease: "easeIn" },
          },
        }}
        className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} // Tactile feedback on tap
      >
        {/* Image Container with Border */}
        <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_40px_rgba(0,255,153,0.3)] bg-[#232329] lg:shadow-none md:bg-transparent md:hover:shadow-[0_0_40px_rgba(0,255,153,0.3)] md:hover:bg-[#232329]">
          <div className="relative w-full h-full mix-blend-lighten">
            <Image
              src={"/p2.png"}
              quality={100}
              fill
              alt="Profile Photo"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
