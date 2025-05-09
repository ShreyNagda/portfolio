import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between ">
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span className="text-xl">Software Developer</span>
            <div className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Shrey Nagda</span>
            </div>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at creating elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button variant="outline">
                <span>Download CV</span>
                <MdOutlineFileDownload className="w-9 h-9" />
              </Button>
              <div className="mb-9 lg:mb-0">
                <Socials className="flex gap-6" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
