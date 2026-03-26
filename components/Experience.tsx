"use client";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "L&T Precision Engineering, India",
      dateRange: "Nov 2025 - February 2026",
      role: "Software Developer Intern",
      description:
        "Developing scalable web application using Next.js & Appwrite and architecting microservices solutions implementing AI features to enhance user experience",
      skills: ["Next.js", "Appwrite"],
    },
    {
      company: "IT Students Association",
      dateRange: "Sep 2025 - Mar 2026",
      role: "Technical Head",
      description:
        "Part of the core team managing the hackathon, helping with planning, promotion, and event execution.",
      skills: ["Team Building", "Event Management"],
    },
    {
      company: "GDG APSIT",
      dateRange: "Oct 2024 - Feb 2025",
      role: "Frontend Web Developer",
      description:
        "Part of the core team managing the hackathon, helping with planning, promotion, and event execution.",
      skills: ["NextJS", "Firebase", "Tailwind CSS"],
    },
  ];

  return (
    <section id="experience" className="p-3 md:p-6">
      <div className="rounded-lg p-4 md:p-6 lg:p-8">
        {/* Title and Description */}
        <div className="mb-12 flex justify-between items-center gap-4">
          <div>
            <p className="text-scale-xs uppercase tracking-widest text-primary/70">
              • Experience
            </p>
            <h2 className="text-scale-4xl leading-tight text-primary mb-6">
              Explore my Journey
            </h2>
          </div>
          <p className="hidden md:visible text-scale-base text-primary/70 font-light max-w-xl">
            A collection of projects I&apos;ve built, ranging from web
            applications to mobile apps and AI-powered tools. Each project
            represents my commitment to delivering quality solutions and
            continuous learning.
          </p>
        </div>

        {/* Experiences Timeline */}
        <div className="space-y-6 md:px-10">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="pb-6 border-b border-primary/10 last:border-b-0 last:pb-0"
            >
              {/* Company and Date */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-scale-xl font-semibold text-primary">
                    {experience.company}
                  </h3>
                  <p className="text-scale-sm text-primary/60 mt-1">
                    • {experience.dateRange}
                  </p>
                </div>
              </div>

              {/* Role and Description */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="text-primary/70 text-scale-sm font-medium mb-1">
                    {experience.role}
                  </p>
                  <p className="text-primary/60 text-scale-sm leading-relaxed">
                    {experience.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 md:justify-end items-center">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-scale-xs text-primary/70 bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
