"use client";

import CountUp from "react-countup";

const stats = [
  { num: 4, text: "Years of experience" },
  { num: 20, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 500, text: "Code commits" },
];

export default function Stats() {
  return (
    <section className="mt-8 mb-12 lg:pt-12 lg:pb-0">
      <div className="flex flex-wrap lg:justify-between gap-4 max-w-[80vw] mx-auto lg:max-w-none">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 flex gap-2 items-center justify-center lg:justify-center"
          >
            <CountUp
              end={stat.num}
              duration={5}
              delay={2}
              className="text-2xl lg:text-4xl font-extrabold"
            />
            <p
              className={`${
                stat.text.length < 115 ? "max-w-[80px]" : "max-w-[150px]"
              } text-xs leading-3 lg:leading-normal`}
            >
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
