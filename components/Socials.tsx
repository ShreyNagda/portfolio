"use client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { socials } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedinIn />,
  Instagram: <RiInstagramFill />,
  YouTube: <FaYoutube />,
};

const handleTap = () => {
  // Haptic feedback for mobile
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    navigator.vibrate(10);
  }
};

export default function Socials({ className }: { className: string }) {
  return (
    <TooltipProvider delayDuration={100}>
      <div className={className}>
        {socials.map((social, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onTap={handleTap}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:shadow-[0_0_20px_rgba(0,255,153,0.5)] transition-all duration-300"
                >
                  {iconMap[social.name]}
                </Link>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{social.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
