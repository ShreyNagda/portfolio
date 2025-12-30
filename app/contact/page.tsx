"use client";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const info = [
    { icon: <FaPhoneAlt />, title: "Phone", desc: "(+91) 940 532 1984" },
    { icon: <FaEnvelope />, title: "Email", desc: "shreynagda2714@gmail.com" },
    { icon: <FaMapMarkerAlt />, title: "Location", desc: "Thane, Maharashtra" },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://staticsend.vercel.app/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "shreynagda2714@gmail.com",
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[54%] order-2 lg:order-none">
            <form
              className="flex flex-col gap-2 p-2 md:py-0 md:gap-6 bg-[#27272c]text-white rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              {/* Input Grid */}

              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Textarea
                className="h-[120px]"
                placeholder="Type your message here."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                size="default"
                className="max-w-40"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center md:items-start p-2 order-1 lg:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-2 md:gap-6">
                  <div className="w-10 h-10 xl:w-12 xl:h-12 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h3 className="text-base">{item.desc}</h3>
                  </div>
                </li>
              ))}
              <Socials className={"flex gap-4"} />
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
