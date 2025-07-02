"use client";

import HeroSection from "./home/HeroSection";
import SkillsIcons from "@/components/home/SkillsIcons";
import EducationRow from "@/app/education/DegreeBasics";
import ProfessionalHighlights from "./home/ProfessionalHighlights";
import LiveProjects from "./home/LiveProjects";
import FeaturedProjects from "./home/FeaturedProjects";
import FinalCTA from "./home/PageOutro";

export default function HomePage() {
  return (
    <main className="mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center">
        <HeroSection />
      </section>

      {/* Professional Highlights from Work Experience */}
      <section className="pt-16">
        <ProfessionalHighlights />
      </section>

      {/* Live Projects */}
      <section className="mt-16">
        <LiveProjects />
      </section>

      {/* Featured Projects */}
      <section className="mt-16">
        <FeaturedProjects />
      </section>

      {/* Skills Section */}
      <section className="mt-16">
        <SkillsIcons />
      </section>

      {/* Education Section */}
      <section className="mt-20">
        <EducationRow />
      </section>

      {/* Contact Section */}
      <section className="my-32 text-center">
        <FinalCTA />
      </section>
    </main>
  );
}
