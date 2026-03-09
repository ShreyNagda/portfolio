// ============== PERSONAL INFO ==============
export const personalInfo = {
  name: "Shrey Nagda",
  title: "Software Developer",
  taglines: ["Software Developer", "Problem Solver", "Tech Enthusiast"],
  bio: "Fullstack developer specializing in Next.js & Flutter. Available for freelance projects and collaborations.",
  location: "Thane, Maharashtra",
  phone: "(+91) 94053 21984",
  email: "shreynagda2714@gmail.com",
  whatsappLink:
    "https://wa.me/919405321984?text=Hi%20Shrey!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.",
};

// ============== SOCIAL LINKS ==============
export const socials = [
  {
    name: "GitHub",
    url: "http://github.com/ShreyNagda/",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shrey-nagda/",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/shrey_nagda/",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@shreynagda",
  },
];

// ============== STATS ==============
export const stats = [
  { num: 3, text: "Years of experience", suffix: "+" },
  { num: 15, text: "Projects completed", suffix: "+" },
  { num: 25, text: "Technologies mastered", suffix: "+" },
  { num: 200, text: "Code commits", suffix: "+" },
];

// ============== SKILLS ==============
export const skills = [
  { name: "HTML5", icon: "FaHtml5", category: "Frontend" },
  { name: "CSS3", icon: "FaCss3", category: "Frontend" },
  { name: "JavaScript", icon: "FaJs", category: "Frontend" },
  { name: "TypeScript", icon: "SiTypescript", category: "Frontend" },
  { name: "React JS", icon: "SiReact", category: "Frontend" },
  { name: "Next JS", icon: "SiNextdotjs", category: "Frontend" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", category: "Frontend" },
  { name: "Node JS", icon: "FaNodeJs", category: "Backend" },
  { name: "Mongo DB", icon: "SiMongodb", category: "Backend" },
  { name: "Python", icon: "SiPython", category: "Backend" },
  { name: "Flask", icon: "SiFlask", category: "Backend" },
  { name: "FastAPI", icon: "SiFastapi", category: "Backend" },
  { name: "Flutter", icon: "SiFlutter", category: "Mobile" },
  { name: "Firebase", icon: "SiFirebase", category: "Mobile" },
  { name: "GitHub", icon: "SiGithub", category: "Tools" },
  { name: "Figma", icon: "SiFigma", category: "Tools" },
  { name: "Canva", icon: "SiCanva", category: "Tools" },
  { name: "Postman", icon: "SiPostman", category: "Tools" },
];

// ============== EXPERIENCE ==============
export const experiences = [
  {
    role: "Technical Head",
    organization: "ITSA",
    description:
      "Part of the core team managing the hackathon, helping with planning, promotion, and event execution.",
    duration: "September 2025 - Apr 2026",
  },
  {
    role: "Core Committee Member",
    organization: "HackScript 6.0",
    description:
      "Part of the core team managing the hackathon, helping with planning, promotion, and event execution.",
    duration: "Feb 2025 - Apr 2025",
  },
  {
    role: "Frontend Web Developer",
    organization: "GDG APSIT",
    description:
      "Worked on the official GDG website project as part of the development team, focusing on clean UI and interactive components.",
    duration: "Oct 2024 - Feb 2025",
  },
];

// ============== PROJECTS ==============
export const projects = [
  {
    tags: ["IoT", "Mobile", "AI"],
    title: "SmartQuit",
    desc: "IoT wearable device that detects smoking gestures in real-time using TensorFlow Lite edge AI. Problem: Traditional smoking cessation methods lack real-time intervention. Solution: Built an embedded AI system with Flutter mobile app for instant feedback and habit tracking. Result: Achieved 92% gesture detection accuracy with <100ms latency.",
    thumbnail: "/thumbnails/smartquit.png",
    tech: ["Flutter", "TensorFlow Lite", "C++ (Embedded)"],
    github: "https://github.com/ShreyNagda/smartquit",
    live: "https://smartquit.netlify.app/",
  },
  {
    tags: ["Fullstack"],
    title: "StaticSend",
    desc: "Backendless form solution for static websites & JAMstack sites. Problem: Static sites lack form handling without backend infrastructure. Solution: Built a SaaS platform with API endpoints and dashboard for form management using Next.js and MongoDB. Result: Reduced form setup time from hours to under 5 minutes with zero backend configuration.",
    thumbnail: "/thumbnails/staticsend.png", // Using the high-quality mockup
    tech: ["Next JS", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ShreyNagda/staticsend",
    live: "https://staticsend.vercel.app/",
  },
  {
    tags: ["Mobile", "Productivity"],
    title: "Focal",
    desc: "Minimalist Pomodoro timer with background service support for uninterrupted focus sessions. Problem: Complex productivity apps distract from actual work. Solution: Built a clean Flutter app with persistent timers that run even when phone is locked. Result: Published on GitHub with 50+ stars for its simplicity.",
    thumbnail: "/thumbnails/focal.png",
    tech: ["Flutter", "Background Services"],
    github: "https://github.com/ShreyNagda/focal",
    live: "https://github.com/ShreyNagda/focal/releases/tag/release-01",
  },
  {
    tags: ["Fullstack"],
    title: "Fraymer",
    desc: "Web app for creating retro Polaroid-style photo frames instantly. Problem: Photo editing tools are too complex for simple frame additions. Solution: Built a browser-based tool with real-time preview and one-click download using Next.js and html-to-image. Result: 100% client-side processing, no server uploads needed.",
    thumbnail: "/thumbnails/fraymer.png", // Using the clean mockup
    tech: ["Next JS", "TypeScript", "Tailwind CSS", "Html-to-Image"],
    github: "https://github.com/ShreyNagda/fraymer",
    live: "https://fraymer.vercel.app/",
  },
  {
    tags: ["AI"],
    title: "Tarotverse",
    desc: "AI-powered tarot reading platform using Google's Gemini API for personalized interpretations. Problem: Traditional tarot readings are expensive and inaccessible. Solution: Built an interactive web app that provides instant AI-generated readings with beautiful card animations. Result: Live platform serving users with contextual, personalized tarot insights.",
    thumbnail: "/thumbnails/tarotverse.png",
    tech: ["Next JS", "Gemini API", "Tailwind CSS"],
    github: "https://github.com/ShreyNagda/tarotverse",
    live: "https://tarotverse.vercel.app/",
  },
  {
    tags: ["Fullstack"],
    title: "SmartQuiz",
    desc: "An online quiz conducting platform",
    thumbnail: "/thumbnails/smartquiz.png",
    tech: ["Next JS", "Tailwind CSS", "Shadcn UI", "MongoDB"],
    github: "https://github.com/ShreyNagda/smartquiz-platform",
    live: "https://smartquiz-platform.vercel.app/",
  },
  {
    tags: ["Frontend", "Games"],
    title: "Kwizz",
    desc: "A trivia game fetching questions from OpenTDB",
    thumbnail: "/thumbnails/kwizz.png",
    tech: ["React JS", "Tailwind CSS", "OpenTDB API"],
    github: "https://github.com/ShreyNagda/kwizz-react",
    live: "https://kwizz-react.vercel.app/",
  },
  {
    tags: ["Frontend"],
    title: "Hackscript",
    desc: "A developer-focused blog and snippet library",
    thumbnail: "/thumbnails/hackscript.png",
    tech: ["Next JS", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/ShreyNagda/hackscript",
    live: "https://hackscript.vercel.app/",
  },
  {
    tags: ["Frontend"],
    title: "Exalt Website",
    desc: "Corporate website for a financial consultancy",
    thumbnail: "/thumbnails/exalt.gif",
    tech: ["React JS", "GSAP", "Tailwind CSS"],
    github: "https://github.com/ShreyNagda/exalt-website",
    live: "https://exalt.apsit.edu.in/",
  },
  {
    tags: ["Mobile", "Games"],
    title: "Guess Up",
    desc: "A mobile based charades game for party buffs",
    thumbnail: "/thumbnails/guessup.png",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/ShreyNagda/guess-up",
    live: "https://github.com/ShreyNagda/guess-up/releases/tag/Release-001",
  },
  {
    tags: ["AI"],
    title: "Insurease",
    desc: "AI-based Insurance Policy Analyzer ",
    thumbnail: "/thumbnails/insurease.png",
    tech: ["Next JS", "Tailwind CSS", "Huggingface Inference"],
    github: "https://github.com/ShreyNagda/insurease",
    live: "https://insurease-phi.vercel.app/",
  },
  {
    tags: ["Frontend", "Games"],
    title: "Hangman Game",
    desc: "A word guessing game",
    thumbnail: "/thumbnails/hangman.png",
    tech: ["React JS", "HTML 5", "CSS 3", "Dictionary API"],
    github: "https://github.com/ShreyNagda/hangman-game-react",
    live: "https://guess-or-hang.netlify.app/",
  },
];
