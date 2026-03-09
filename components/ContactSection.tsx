"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useCopyToClipboard } from "@/lib/hooks";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
  const FORM_URL = process.env.NEXT_PUBLIC_FORM_API_URL;
  const { copyToClipboard } = useCopyToClipboard();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      desc: personalInfo.phone,
      copyable: true,
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      desc: personalInfo.email,
      copyable: true,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      desc: personalInfo.location,
      copyable: false,
    },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (!FORM_URL) {
      toast.error("Form API URL is not configured.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error:", response.statusText);
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-12 xl:py-20">
      {/* Top gradient separator */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-primary to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-2">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Have a project in mind? Let&apos;s talk.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-[30px]">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="xl:w-[54%] order-2 md:order-none"
          >
            <form
              className="flex flex-col gap-3 p-5 bg-[#232329] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-xl text-accent font-bold mb-1">
                Let&apos;s work together
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-10"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-10"
                />
              </div>
              <Textarea
                className="h-[100px] resize-none"
                placeholder="Your message..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                size="sm"
                className="max-w-32"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </Button>

              {/* WhatsApp Quick Contact */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-white/60 text-sm mb-3">
                  Prefer instant messaging?
                </p>
                <Link
                  href={personalInfo.whatsappLink}
                  target="_blank"
                  className="inline-block"
                >
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-2 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all h-9"
                  >
                    <FaWhatsapp className="text-lg" /> Whatsapp Me
                  </Button>
                </Link>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex items-center justify-center p-2 order-1 md:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-6 md:gap-8">
              {info.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.div
                    className="w-10 h-10 xl:w-12 xl:h-12 bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="">{item.icon}</div>
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-white/60 text-xs">{item.title}</p>
                    <motion.h3
                      className={`text-sm ${
                        item.copyable
                          ? "cursor-pointer hover:text-accent transition-colors"
                          : ""
                      }`}
                      onClick={() =>
                        item.copyable &&
                        copyToClipboard(item.desc, `${item.title} copied!`)
                      }
                      whileHover={item.copyable ? { scale: 1.02 } : {}}
                      whileTap={item.copyable ? { scale: 0.98 } : {}}
                    >
                      {item.desc}
                    </motion.h3>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
