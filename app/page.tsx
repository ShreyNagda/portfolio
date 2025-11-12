import ExperienceTimeline from "@/components/ExperienceTimeline";
import Photo from "@/components/Photo";
import SkillsScroller from "@/components/SkillsScroller";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Home() {
  return (
    <>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col lg:flex-row lg:gap-[20px] items-center justify-around">
            <div className="text-center lg:text-left order-2 lg:order-none">
              <span className="text-xl">Software Developer</span>
              <div className="h1 mb-6">
                Hello I&apos;m <br />
                <span className="text-accent">Shrey Nagda</span>
              </div>
              <p className="max-w-[500px] mb-9 text-white/80">
                Full Stack Web Developer with 2+ years of experience in
                developing scalable web applications using Next.js and
                contemporary web technologies. Proficient in frontend and
                backend development, with additional expertise incorporating AI
                features with Python and building mobile apps using Flutter.
                Good team player with experience volunteering for college tech
                clubs and organizations.
              </p>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <Button variant="outline">
                  <Link
                    href={"/Resume - Shrey Nagda.pdf"}
                    download
                    className="flex gap-2 items-center"
                  >
                    <span>Download CV</span>
                    <MdOutlineFileDownload className="w-10 h-10" />
                  </Link>
                </Button>
                <div className="mb-9 lg:mb-0">
                  <Socials className="flex gap-6" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-none mb-8 lg:mb-0 ">
              <Photo />
            </div>
          </div>
          <Stats />
        </div>
      </section>

      {/* === 2. ADD YOUR NEW SKILLS SCROLLER === */}
      <SkillsScroller />

      {/* === 3. ADD YOUR NEW EXPERIENCE TIMELINE === */}
      <ExperienceTimeline />

      <footer className="text-center p-4 text-accent">
        Made with ❤️ | Shrey Nagda
      </footer>
    </>
  );
}
