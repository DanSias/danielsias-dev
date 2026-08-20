import Link from "next/link";
import ExperienceCaseStudy from "./ExperienceCaseStudy";
import FlagshipRotation from "@/app/projects/FlagshipRotation";

const supportingSystems = [
  {
    title: "Verbatim",
    description:
      "A grounded documentation Q&A and support-assistance system where retrieval, confidence, and citation mapping are deterministic and LLMs are limited to synthesis over pre-selected source material. The same knowledge layer also powers grounded support-reply drafting and internal retrieval/debugging tools.",
    href: "/projects/verbatim",
    linkLabel: "View Verbatim →",
  },
  {
    title: "Transaction Toolkit",
    description:
      "A local-first investigation environment around the Transaction History API: snapshots and normalizes merchant transaction data for repeatable decline, authentication, retry, and concentration analysis, deterministic by default with optional AI explanation over pre-aggregated metrics.",
    href: "/projects/transaction-toolkit",
    linkLabel: "View Transaction Toolkit →",
  },
  {
    title: "Knowledge Exporter",
    description:
      "A read-only extraction tool that converts Freshdesk and Confluence knowledge into deterministic Markdown. Hash-based idempotent writes and per-run change reports make repeated exports stable, reviewable, and ready for downstream documentation or knowledge systems.",
    href: "/projects/knowledge-exporter",
    linkLabel: "View Knowledge Exporter →",
  },
  {
    title: "Developer Documentation & Onboarding",
    description:
      "Modernized integration guides and support resources for merchants and internal teams: cutting the time it takes new merchants and engineers to get up to speed.",
  },
];

const impact = [
  "Reduced ticket response time",
  "Streamlined customer onboarding",
  "Cut manual engineering effort through automation",
];

const technologies = [
  "Laravel",
  "PHP",
  "MySQL",
  "Vue",
  "TypeScript",
  "Tailwind CSS",
  "GitLab",
  "Jira",
  "AI-Assisted Development",
];

const RocketGate: React.FC = () => {
  return (
    <ExperienceCaseStudy
      company="RocketGate"
      role="Developer Support Engineer"
      dates="May 2025 – Present"
      badge="Current Role"
      summary="Building internal software, developer tooling, and operational systems for a modern payment platform."
      impact={impact}
      technologies={technologies}
      size="lg">
      {/* Flagship: Workflow Intelligence */}
      <div className="mt-6 rounded-lg border border-sky-200 dark:border-sky-900 bg-white dark:bg-slate-900 overflow-hidden flex flex-col md:flex-row">
        <div className="flex flex-col md:w-2/5 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-slate-950">
          <div className="relative w-full aspect-[4/3]">
            <FlagshipRotation />
          </div>
        </div>
        <div className="md:w-3/5 p-6 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
            Internal Platform
          </span>
          <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
            Workflow Intelligence
          </h3>
          <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            A Laravel/Vue platform for tracking work items, stage history, and
            delivery progress: replacing scattered status updates with a
            single source of truth for the team.
          </p>
          <Link
            href="/projects/workflow-intelligence"
            className="mt-3 text-sm text-blue-600 dark:text-sky-400 font-semibold hover:underline w-fit">
            View Workflow Intelligence →
          </Link>
        </div>
      </div>

      {/* Supporting systems */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {supportingSystems.map((system) => (
          <div
            key={system.title}
            className="p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 flex flex-col">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {system.title}
            </h3>
            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-grow">
              {system.description}
            </p>
            {system.href && (
              <Link
                href={system.href}
                className="mt-3 text-sm text-blue-600 dark:text-sky-400 font-semibold hover:underline w-fit">
                {system.linkLabel}
              </Link>
            )}
          </div>
        ))}
      </div>
    </ExperienceCaseStudy>
  );
};

export default RocketGate;
