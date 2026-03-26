"use client";

import { AiFillInstagram } from "react-icons/ai";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaGithub,
  FaArrowRight,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function ContactSection() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/Shrey-nagda",
    },
    {
      name: "Instagram",
      icon: AiFillInstagram,
      url: "https://instagram.com/its.shreyn",
    },
    {
      name: "X",
      icon: FaSquareXTwitter,
      url: "https://x.com/shrey_nagda",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://youtube.com/@shreynagda",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/ShreyNagda",
    },
  ];

  return (
    <section id="contact" className="p-3 md:p-6">
      <div className="rounded-lg p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 mb-10 md:mb-12 mt-10">
          <div className="flex-1/2">
            <p className="text-scale-xs uppercase tracking-widest text-primary/70">
              • Contact
            </p>
            <h2 className="text-scale-4xl leading-tight text-primary mt-2 md:mt-1">
              Let&apos;s Build Something
              <br className="hidden sm:block" />
              Great Together
            </h2>
          </div>
          <p className="flex-1/2 mt-5 text-scale-base text-primary/70 leading-relaxed max-w-2xl mx-auto">
            Open to freelance work, full-time roles, and collaborations. Reach
            out through email, WhatsApp, or socials and I&apos;ll get back to
            you quickly.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email CTA */}
          <a
            href="mailto:contact@shreynagda.me"
            className="group bg-white rounded-md p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <FaEnvelope className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-scale-xl font-semibold text-primary mb-2">
                  Email Me
                </h3>
                <p className="text-primary/70 text-scale-sm mb-1">
                  contact@shreynagda.me
                </p>
                <p className="text-primary/60 text-scale-xs">
                  I&apos;ll get back to you within 24 hours
                </p>
              </div>
            </div>
          </a>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919405321984?text=Hi%20Shrey!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-md p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                <FaWhatsapp className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-scale-xl font-semibold text-primary mb-2">
                  Message Me
                </h3>
                <p className="text-primary/70 text-scale-sm mb-1">
                  +91 (940) 532-1984
                </p>
                <p className="text-primary/60 text-scale-xs">
                  Available for quick chats
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-primary/70 text-scale-xs uppercase tracking-wider mb-6">
            Connect with me on social
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  title={social.name}
                >
                  <Icon className="w-5 h-5 text-primary transition-colors duration-300" />

                  {/* Animated tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-white text-scale-2xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {social.name}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/919405321984?text=Hi%20Shrey!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
            className="group inline-flex items-center gap-3 px-8 py-3 bg-primary text-white text-scale-sm rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Start a Conversation
            <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
