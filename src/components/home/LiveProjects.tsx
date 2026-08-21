import Link from "next/link";
import React from "react";
import FlagshipRotation from "@/app/projects/FlagshipRotation";
import ProjectCard from "@/app/projects/ProjectCard";
import { projects } from "@/constants/projects";

const flagship = {
  title: "Workflow Intelligence",
  description:
    "The flagship platform I'm building at RocketGate: replacing scattered status updates with a single source of truth for how engineering work actually moves.",
  technologies: ["Laravel", "Vue", "TypeScript"],
};

const professionalProjects = projects.filter(
  (project) => project.theme === "professional"
);

const LiveProjects = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-heading">Selected Work</h2>
      <p className="text-subhead">
        The flagship platform I&apos;m building at RocketGate, and the
        professional systems built around it.
      </p>

      {/* Flagship: Workflow Intelligence */}
      <div className="bg-white dark:bg-slate-900 rounded-lg border border-sky-200 dark:border-sky-900 overflow-hidden flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-2/5 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 bg-slate-950">
          <div className="relative w-full aspect-[4/3]">
            <FlagshipRotation />
          </div>
        </div>
        <div className="lg:w-3/5 p-8 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
            Internal Platform
          </span>
          <h3 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {flagship.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {flagship.technologies.join(" • ")}
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            {flagship.description}
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
            Private/internal application. No public demo available.
          </p>
          <Link
            href="/projects/workflow-intelligence"
            className="mt-5 inline-flex w-fit items-center gap-1.5 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            View Case Study →
          </Link>
        </div>
      </div>

      {/* Supporting professional systems */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {professionalProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default LiveProjects;
