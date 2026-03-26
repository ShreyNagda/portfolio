import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="#" className="min-h-[calc(100dvh-6rem)] flex items-start">
      <div className="w-10 md:w-16 shrink-0 self-stretch">
        <div className="flex h-full flex-col items-center justify-between py-4 gap-4 md:sticky md:top-24 md:h-[calc(100dvh-96px)]">
          <span className="[writing-mode:vertical-lr] rotate-180 text-secondary text-scale-sm">
            Developer
          </span>
          <div className="flex-1 w-px bg-secondary"></div>
          <span className="[writing-mode:vertical-lr] rotate-180 text-secondary text-scale-sm">
            2026
          </span>
        </div>
      </div>
      <div className="flex-1 flex flex-col lg:flex-row px-4 sm:px-6 lg:px-0">
        {/* Left Section */}
        <div className="w-full lg:w-[40%] flex flex-col justify-start md:justify-around gap-6 order-2 lg:order-1 lg:ml-4 py-8 lg:py-10 text-left lg:pr-4 xl:pr-6">
          {/* Stats */}
          <div className="flex items-center justify-start self-start gap-2">
            <Stat title="Years of Experience" value="3" />
            <Stat title="Projects Completed" value="10" />
          </div>

          <div className="flex flex-col lg:max-w-[30rem]">
            <div className="font-light text-scale-hero leading-none">Hello</div>
            <div className="text-scale-lg lg:ml-5">
              - It&apos;s <span>Shrey Nagda</span>, a developer
            </div>
          </div>

          <div className="text-primary/80 text-scale-sm flex items-center gap-2 self-start px-0 py-2 animate-bounce [animation-duration:2s]">
            Scroll Down{" "}
            <ArrowDownIcon className="h-5 w-5 stroke-2 text-primary/80" />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[55%] order-1 lg:order-2 flex justify-start items-end lg:pt-0 p-0 lg:p-0 -ml-4 sm:-ml-6 lg:ml-0">
          <div className="relative flex items-end justify-start w-[210px] md:w-[440px] lg:w-full lg:max-w-[550px]">
            <div className="absolute inset-x-0 bottom-0 h-[60%] rounded-t-[999px] rounded-b-[2rem] bg-gradient-to-b from-tertiary to-accent shadow-md"></div>
            {/* Profile Picture */}
            <Image
              src="/cutout.png"
              alt="Shrey Nagda"
              width={1100}
              height={900}
              priority
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex gap-px">
        <span className="text-scale-xl">+</span>
        <span className="text-scale-4xl">{value}</span>
      </div>
      <div className="text-scale-xs text-primary/80">{title}</div>
    </div>
  );
}
