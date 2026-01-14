import ExperienceTimeline from "@/components/ExperienceTimeline";
import Photo from "@/components/Photo";
import SkillsGrid from "@/components/SkillsGrid";
import FeaturedProjects from "@/components/FeaturedProjects";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-primary via-primary/95 to-black/20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:gap-[20px] items-center justify-around pt-10 md:pt-0">
            <div className="text-center md:text-left order-1 md:order-none">
              <span className="text-xl text-white/80">
                <Typewriter
                  texts={[
                    "Software Developer",
                    "Problem Solver",
                    "Tech Enthusiast",
                  ]}
                />
              </span>
              <div className="mt-2 h2 mb-6">
                Hello I&apos;m <br />
                <span className="text-accent h1">Shrey Nagda</span>
              </div>
              <Socials className="mb-9 flex gap-6 items-center justify-center md:justify-start" />
            </div>
            <div className="order-2 md:order-none mb-8 lg:mb-0 ">
              <Photo />
            </div>
          </div>
          <Stats />
        </div>
      </section>

      {/* === 2. FEATURED PROJECTS === */}
      <FeaturedProjects />

      {/* === 3. SKILLS GRID === */}
      <SkillsGrid />

      {/* === 4. ADD YOUR NEW EXPERIENCE TIMELINE === */}
      <ExperienceTimeline />

      <footer className="py-12 text-center text-white/60 bg-[#16161c]">
        <div className="container mx-auto flex flex-col items-center gap-6">
          <Socials className="flex gap-6" />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Shrey Nagda. All rights reserved.{" "}
            <br />
            Made with <span className="text-accent">❤️</span>
          </p>
        </div>
      </footer>
    </>
  );
}
