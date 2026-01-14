"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Typewriter({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed]);

  // Get the longest text to reserve space
  const longestText = texts.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span className={`inline-block relative ${className}`}>
      {/* Invisible text to reserve layout space */}
      <span className="opacity-0">{longestText}</span>

      {/* Animated text overlay */}
      <motion.span
        className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 top-0 whitespace-nowrap flex justify-center items-center font-extralight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline-block w-2 bg-white h-6 ml-1"
        ></motion.span>
      </motion.span>
    </span>
  );
}
