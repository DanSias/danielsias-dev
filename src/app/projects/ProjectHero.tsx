import Link from "next/link";
import WorkflowIllustration from "@/components/home/WorkflowIllustration";

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

const ProjectHero: React.FC = () => {
  return (
    <div className="rounded-lg border border-sky-200 dark:border-sky-900 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:w-2/5 bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-8"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}>
          <div className="w-full max-w-sm text-slate-300 dark:text-slate-800">
            <WorkflowIllustration />
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

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Problem
              </h3>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Status lived in Jira, GitLab, and scattered updates. Getting
                a real picture of delivery progress meant manually
                cross-referencing all three.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Approach
              </h3>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                A Laravel/Vue platform pulling from the Jira and GitLab APIs
                to reconstruct stage history automatically, built with an
                AI-assisted workflow from prototype to production.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Outcome
              </h3>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Real-time visibility into work items and delivery progress:
                now the team&apos;s single source of truth for how work is
                moving.
              </p>
            </div>
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

          <Link
            href="/experience"
            className="mt-6 inline-block text-sm text-blue-600 dark:text-sky-400 font-semibold hover:underline">
            See it in context at RocketGate →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
