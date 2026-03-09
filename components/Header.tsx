import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ScrollProgressBar from "./ScrollProgressBar";

export default function Header() {
  return (
    <>
      <ScrollProgressBar />
      <header className="max-w-screen py-4 xl:py-6 mb-0 md:mb-4 text-white shadow-lg shadow-black/20 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/#home"}>
            <h1 className="text-4xl font-semibold">
              Shrey
              <span className="text-accent animate-pulse">.</span>
            </h1>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Nav />
            <Link href="#contact">
              <Button variant="premium">Hire Me</Button>
            </Link>
          </div>
          {/* Mobile Nav */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
