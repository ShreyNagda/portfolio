"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaBriefcase,
  FaCircleCheck,
  FaCircleUser,
  FaXmark,
} from "react-icons/fa6";

const navItems = [
  { href: "#about", label: "About Me", icon: FaCircleUser },
  { href: "#portfolio", label: "Portfolio", icon: FaBriefcase },
  { href: "#experience", label: "Experience", icon: FaCircleCheck },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="h-[70px] md:h-[96px] w-full border-b border-black/5 bg-white/80 backdrop-blur sticky top-0 z-50">
        <nav className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="font-semibold text-scale-2xl">
            Shrey<span className="text-amber-400 ml-1 text-scale-3xl">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-scale-sm text-secondary hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-scale-sm transition-all hover:shadow-md"
            >
              Let&apos;s Talk
              <FaArrowRight className="h-4 w-4 transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-black/5"
            aria-label="Open menu"
          >
            <FaBars className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 left-0 z-[60] h-full w-72 bg-white shadow-xl md:hidden transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-24 px-4 flex items-center justify-between border-b border-black/5">
          <span className="font-semibold">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-md p-2 hover:bg-black/5"
            aria-label="Close menu"
          >
            <FaXmark className="h-5 w-5" />
          </button>
        </div>

        <ul className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-black/5 transition-colors"
                >
                  <Icon className="h-4 w-4 text-primary/80" />
                  <span className="text-scale-sm">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="p-4 mt-2">
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-scale-sm transition-all hover:shadow-md"
          >
            Let&apos;s Talk
            <FaArrowRight className="h-4 w-4 transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
          </Link>
        </div>
      </aside>
    </>
  );
}
