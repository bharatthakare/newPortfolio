import React from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import BentoGrid from "@/components/portfolio/BentoGrid";
import ProjectsShowcase from "@/components/portfolio/ProjectsShowcase";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <div
      className="bg-black min-h-screen overflow-x-hidden scroll-smooth"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; -ms-overflow-style: none; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Navbar />
      <HeroSection />
      <div id="about">
        <BentoGrid />
      </div>
      <ProjectsShowcase />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
