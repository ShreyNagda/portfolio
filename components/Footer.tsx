import Link from "next/link";

const footerLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function FooterSection() {
  return (
    <footer className="">
      <div className="relative overflow-hidden bg-primary text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-8 top-4 h-20 w-28 rounded-xl border border-white/10" />
          <div className="absolute left-10 top-12 h-16 w-28 rounded-xl border border-white/10" />
          <div className="absolute right-16 -top-3 h-20 w-28 rounded-xl border border-white/10" />
          <div className="absolute right-4 top-14 h-16 w-28 rounded-xl border border-white/10" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8 md:py-10">
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-4 text-scale-sm"
          >
            {footerLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-white ${
                  index === 0
                    ? "rounded-full bg-white/10 px-4 py-2 text-white"
                    : "text-white/75"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:shreynagda2714@gmail.com"
            className="text-scale-email font-medium tracking-tight text-white/95 transition-colors hover:text-white"
          >
            shreynagda2714@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
