"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "Building responsive and dynamic websites using modern technologies like React.js, Node.js, MongoDB, Express, and Tailwind CSS. From frontend UI to backend APIs and databases, I deliver end-to-end solutions.",
    href: "",
  },
  {
    num: "02",
    title: "Cross-Platform App Development",
    description:
      "Creating mobile and web applications using Flutter that work seamlessly across Android, iOS, and Web platforms, with a focus on performance, design, and user experience.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Designing clean and intuitive user interfaces with tools like Figma and Flutter, and implementing user-centered design principles for both web and mobile applications.",
    href: "",
  },
  {
    num: "04",
    title: "Project Consultation",
    description:
      "Helping individuals or student teams structure their tech projects, choose the right stack, set up repositories, and follow best practices for development and deployment.",
    href: "",
  },
];

export default function Services() {
  return (
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-1 flex flex-col justify-center gap-6 group"
          >
            <div className="flex w-full justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent transition-all duration-500 group-hover:text-outline-hover">
                {service.num}
              </div>
              <Link
                href={service.href}
                className="w-[70px] h-[70px] bg-white rounded-full group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
              >
                <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
            </div>
            <div className="text-[42px] font-bold leading-none text-white group-hover:text-accent">
              {service.title}
            </div>
            <p className="text-white/60">{service.description}</p>
            <div className="border-b border-white/30 w-full"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
