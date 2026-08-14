import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/constants/projects";
import ProjectHero from "./ProjectHero";
import ThemeSection from "./ThemeSection";
import PageOutro from "@/components/home/PageOutro";

const title = "Engineering Projects";
const description =
  "How I approach engineering problems: from a flagship platform to the tools and systems built along the way.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: { title, description, url: "/projects" },
  twitter: { title, description },
};

export default function ProjectsPage() {
  const professional = projects.filter((p) => p.theme === "professional");
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
            title="Professional & Internal Engineering"
            intro="Internal tools built at RocketGate: turning scattered operational data and knowledge into systems people can actually use for support and engineering work."
            projects={professional}
          />
          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            This work sits alongside broader Developer Experience efforts at
            RocketGate — onboarding guides, setup documentation, and
            integration references for merchants and engineers. See it as
            part of the{" "}
            <Link
              href="/experience"
              className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
              RocketGate experience →
            </Link>
          </p>
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
