"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import {  } from "react-icons/fa"
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className="flex items-center justify-center"
        onClick={() => setOpen(true)}
      >
        <HiMenuAlt3 className="text-accent text-[32px]" />
      </SheetTrigger>
      <SheetContent className="p-8 flex flex-col">
        {/* Logo */}
        <SheetTitle className="text-center mt-16 mb-16 text-white">
          <Link href={"/"}>
            <h1 className="text-2xl font-semibold">
              Shrey<span className="text-accent">.</span>
            </h1>
          </Link>
        </SheetTitle>
        {/* Links */}
        <div className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleClose}
              className={`${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : ""
              } capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
