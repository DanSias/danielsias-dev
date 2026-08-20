import Image from "next/image";
import Link from "next/link";
import { Project } from "@/constants/projects";

const TechChips: React.FC<{ technologies: string[] }> = ({ technologies }) => (
  <div className="flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <span
        key={tech}
        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        {tech}
      </span>
    ))}
  </div>
);

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) =>
  project.liveDemo || project.github || project.caseStudyHref ? (
    <div className="mt-3 flex flex-wrap gap-4 text-sm">
      {project.caseStudyHref && (
        <Link
          href={project.caseStudyHref}
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          View Case Study →
        </Link>
      )}
      {project.liveDemo && (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          Live Demo →
        </a>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          GitHub →
        </a>
      )}
    </div>
  ) : null;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  if (project.lead && project.problem && project.approach && project.outcome) {
    return (
      <div className="sm:col-span-2 lg:col-span-3 p-6 rounded-lg border border-sky-200 dark:border-sky-900 bg-white dark:bg-slate-900">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {project.company}
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Problem
            </h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Approach
            </h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.approach}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Outcome
            </h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4">
            <TechChips technologies={project.technologies} />
          </div>
        )}
        <ProjectLinks project={project} />
      </div>
    );
  }

  // Case-study cards: a showcase entry, not the case study itself. Job is
  // "understand what this is → see why it's interesting → open the case
  // study" — the dedicated page carries the full Problem/Approach/Outcome
  // depth, so the card stays to one positioning line plus one engineering
  // hook rather than repeating it.
  if (project.problem && project.approach && project.outcome) {
    return (
      <div className="rounded-lg border border-sky-100 dark:border-sky-900/40 bg-white dark:bg-slate-900 overflow-hidden flex flex-col">
        {project.image && (
          <div className="relative w-full aspect-[4/3] bg-slate-950">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={`object-cover ${project.imagePosition ?? ""}`}
            />
          </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {project.company}
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.description}
          </p>
          {project.engineeringHook && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {project.engineeringHook}
            </p>
          )}

          <div className="flex-grow" />

          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-4">
              <TechChips technologies={project.technologies} />
            </div>
          )}
          <ProjectLinks project={project} />
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 overflow-hidden">
      {project.image && (
        <div className="relative w-full h-40">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {project.company}
        </p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-3">
            <TechChips technologies={project.technologies} />
          </div>
        )}
        <ProjectLinks project={project} />
      </div>
    </div>
  );
};

export default ProjectCard;
