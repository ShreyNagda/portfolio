import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import ExperienceSection from "@/components/Experience";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
