import { FaGlobe } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

function DecorativeArrow({ className }: { className: string }) {
  return (
    <Image
      src="/arrow.svg"
      alt=""
      width={300}
      height={300}
      className={className}
    />
  );
}
export default function AboutSection() {
  return (
    <section id="about" className="p-3 md:p-6">
      <div className="bg-secondary/10 rounded-lg p-4 md:p-6 lg:p-8">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="md:col-span-4 lg:col-span-4 md:pr-2 lg:pr-4 h-full">
            <div className="text-scale-4xl leading-tight">About Me</div>
            <p className="mt-4 text-scale-base text-light text-primary/70 leading-relaxed max-w-[34ch]">
              I&apos;m a full-stack dev who loves the &quot;build&quot; as much
              as the &quot;refactor,&quot; and I&apos;m always looking to learn
              something new from the people I work with.
            </p>
            <DecorativeArrow className="hidden xl:block h-auto opacity-35 pointer-events-none select-none" />
          </div>
          <div className="md:col-span-4 lg:col-span-3">
            <div className="h-full max-w-[360px] mx-auto flex flex-col bg-white rounded-md text-left p-3 md:p-4 text-primary/70">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shadow-2xl">
                <FaGlobe className="h-5 w-5 text-primary/70" />
              </div>
              <span className="text-scale-6xl leading-none text-primary">
                120%
              </span>
              <p className="text-scale-sm leading-relaxed">
                Average increase in client engagement after implementing UI/UX
                improvements.
              </p>
              <div className="self-center mt-4 block shadow-2xl pb-0 rounded-md overflow-hidden">
                <Image
                  src="/about.png"
                  alt="Clients"
                  width={300}
                  height={300}
                  className="w-[300px] h-auto"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-4 lg:col-span-5 h-full ">
            <ul className="list-none px-0 md:px-1 lg:px-6 space-y-5">
              <li className="flex items-start gap-1 lg:gap-3">
                <div className="bg-primary p-2 rounded-full shrink-0 scale-75 lg:scale-100">
                  <FaStar className="h-5 w-5 text-white" />
                </div>
                <span className="text-scale-base leading-[1.35] text-primary/70 ">
                  3+ years of experience, 10+ projects delivered, and hands-on
                  expertise across React, Next.js, Node.js, and Flutter for
                  high-performing marketing sites and web apps.
                </span>
              </li>
              <li className="flex items-start gap-1 lg:gap-3">
                <div className="bg-primary p-2 rounded-full shrink-0 scale-75 lg:scale-100">
                  <FaStar className="h-5 w-5 text-white " />
                </div>
                <span className="text-scale-base leading-[1.35] text-primary/70">
                  Fast learner with a continuous upskilling mindset—adopting 8+
                  new tools/frameworks and best practices to improve code
                  quality, speed, and long-term maintainability.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
