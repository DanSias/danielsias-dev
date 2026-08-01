import Link from "next/link";
import ExperienceCaseStudy from "./ExperienceCaseStudy";
import WorkflowIllustration from "@/components/home/WorkflowIllustration";

const supportingSystems = [
  {
    title: "Transaction Reconstruction Tooling",
    description:
      "Internal tools for reconstructing transaction history and tracking operational data, backed by AI-assisted knowledge management: cutting investigation time when troubleshooting payment issues.",
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
        <div
          className="md:w-2/5 bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-6"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}>
          <div className="w-full max-w-xs text-slate-300 dark:text-slate-800">
            <WorkflowIllustration />
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
            href="/#selected-work"
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
            className="p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {system.title}
            </h3>
            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {system.description}
            </p>
          </div>
        ))}
      </div>
    </ExperienceCaseStudy>
  );
};

export default RocketGate;
