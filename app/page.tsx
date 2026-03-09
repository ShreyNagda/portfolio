import ExperienceTimeline from "@/components/ExperienceTimeline";
import Photo from "@/components/Photo";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Typewriter from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* === 1. HERO SECTION === */}
      <section
        id="home"
        className="bg-gradient-to-b from-primary via-primary/95 to-black/20"
      >
        <div className="container mx-auto md:max-w-full">
          <div className="flex flex-col md:flex-row gap-4 md:gap-[20px] items-center justify-between pt-10 md:pt-0">
            <div className="text-center md:text-left order-1 md:order-none">
              <span className="text-xl text-white/80">
                <Typewriter texts={personalInfo.taglines} />
              </span>
              <div className="mt-2 h2 mb-6">
                Hello I&apos;m <br />
                <span className="text-accent h1">{personalInfo.name}</span>
              </div>
              <p className="text-white/70 mb-6 mx-auto md:mx-0 max-w-[300px] md:max-w-[350px]">
                {personalInfo.bio}
              </p>

              <Socials className="flex gap-6 items-center justify-center md:justify-start mb-6" />
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-9">
                <Link href={personalInfo.whatsappLink} target="_blank">
                  <Button
                    size="lg"
                    className="gap-2 hover:scale-105 transition-transform"
                  >
                    <FaWhatsapp className="text-xl" />
                    WhatsApp Me
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 hover:scale-105 transition-transform"
                  >
                    <FaEnvelope />
                    Send Email
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-2 md:order-none mb-8 lg:mb-0 ">
              <Photo />
            </div>
          </div>
          <Stats />
        </div>
      </section>

      {/* === 2. PROJECTS SECTION === */}
      <ProjectsSection />

      {/* === 3. SKILLS GRID === */}
      <SkillsGrid />

      {/* === 4. EXPERIENCE TIMELINE === */}
      <ExperienceTimeline />

      {/* === 5. CONTACT SECTION === */}
      <ContactSection />

      {/* === 6. FOOTER === */}
      <footer className="py-8 text-center text-white/60 bg-primary border-t border-white/5">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <Socials className="flex gap-6" />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
