"use client";
import Link from "next/link";

const links = [
  { name: "home", path: "/#home" },
  { name: "work", path: "/#work" },
  { name: "skills", path: "/#skills" },
  { name: "experience", path: "/#experience" },
  { name: "contact", path: "/#contact" },
];

export default function Nav() {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
