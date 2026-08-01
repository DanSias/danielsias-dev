import { projects } from "@/constants/projects";
import ProjectHero from "./ProjectHero";
import ThemeSection from "./ThemeSection";
import PageOutro from "@/components/home/PageOutro";

export default function ProjectsPage() {
  const aiTooling = projects.filter((p) => p.theme === "ai-tooling");
  const analytics = projects.filter((p) => p.theme === "analytics");
  const infrastructure = projects.filter((p) => p.theme === "infrastructure");

  return (
    <main className="pt-32 px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-heading">Engineering Projects</h1>
        <p className="text-subhead">
          How I approach engineering problems: from a flagship platform to
          the tools and systems built along the way.
        </p>

        <section className="pt-4">
          <ProjectHero />
        </section>

        <section className="py-12 border-t border-slate-200 dark:border-slate-800">
          <ThemeSection
            title="AI-Assisted Developer Tools"
            intro="Personal tools exploring how AI fits into a real development workflow, building the tooling around it, not just using it."
            projects={aiTooling}
          />
        </section>

        <section className="py-12 border-t border-slate-200 dark:border-slate-800">
          <ThemeSection
            title="Analytics & Reporting Platforms"
            intro="Turning fragmented data across CRM, ad, and analytics platforms into systems people actually check."
            projects={analytics}
          />
        </section>

        <section className="py-12 border-t border-slate-200 dark:border-slate-800">
          <ThemeSection
            title="Operations, Automation & Data Infrastructure"
            intro="The less visible engineering work: migrations, integrations, and automation that keep other systems running."
            projects={infrastructure}
          />
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800">
          <PageOutro />
        </div>
      </div>
    </main>
  );
}
