"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <motion.h1
            className="text-4xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Shrey
            <motion.span
              className="text-accent"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              .
            </motion.span>
          </motion.h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button variant="premium">Hire Me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
