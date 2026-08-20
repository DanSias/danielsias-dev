import Link from "next/link";
import FlagshipRotation from "./FlagshipRotation";

const technologies = ["Laravel", "Vue", "TypeScript", "Tailwind CSS", "GitLab", "Jira"];

const highlights = [
  {
    label: "Problem",
    text: "Delivery status was fragmented across Jira, GitLab, and manual updates.",
  },
  {
    label: "Approach",
    text: "A Laravel/Vue platform that reconstructs workflow state from Jira and GitLab into one shared operational model.",
  },
  {
    label: "Outcome",
    text: "A single source of truth for delivery health, evidence, and engineering workflow visibility.",
  },
];

const ProjectHero: React.FC = () => {
  return (
    <div className="rounded-lg border border-sky-200 dark:border-sky-900 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-2/5 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 bg-slate-950">
          <div className="relative w-full aspect-[4/3]">
            <FlagshipRotation />
          </div>
        </div>

        <div className="lg:w-3/5 p-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
              Internal Platform
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              RocketGate
            </span>
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Workflow Intelligence
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            The flagship platform I&apos;m building at RocketGate: replacing
            scattered status updates with a single source of truth for how
            engineering work actually moves.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4">
            {highlights.map((item) => (
              <div key={item.label}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  {item.label}
                </h3>
                <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/projects/workflow-intelligence"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
              View Case Study →
            </Link>
            <Link
              href="/experience"
              className="text-sm text-blue-600 dark:text-sky-400 font-semibold hover:underline">
              See it in context at RocketGate →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
