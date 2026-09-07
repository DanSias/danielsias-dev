"use client";

import HeroSection from "./home/HeroSection";
import SkillsIcons from "@/components/home/SkillsIcons";
import EducationRow from "@/app/education/DegreeBasics";
import AreasOfExpertise from "./home/AreasOfExpertise";
import MarketingCallout from "./home/MarketingCallout";
import LiveProjects from "./home/LiveProjects";
import FeaturedProjects from "./home/FeaturedProjects";
import FinalCTA from "./home/PageOutro";

export default function HomePage() {
  return (
    <main className="mx-auto px-6 pb-16">
      {/* Hero Section */}
      <section className="pb-16 md:pb-20 text-center">
        <HeroSection />
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <AreasOfExpertise />
      </section>

      {/* Marketing & Analytics Background */}
      <section className="py-8 border-t border-slate-200 dark:border-slate-800">
        <MarketingCallout />
      </section>

      {/* Selected Work */}
      <section
        id="selected-work"
        className="py-16 border-t border-slate-200 dark:border-slate-800 scroll-mt-24">
        <LiveProjects />
      </section>

      {/* Featured Projects */}
      <section className="py-12">
        <FeaturedProjects />
      </section>

      {/* Skills Section */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <SkillsIcons />
      </section>

      {/* Education Section */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <EducationRow />
      </section>

      {/* Contact Section */}
      <section className="border-t border-slate-200 dark:border-slate-800">
        <FinalCTA />
      </section>
    </main>
  );
}
