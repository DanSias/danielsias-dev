import Image from "next/image";
import Link from "next/link";
import React from "react";
import FlagshipRotation from "@/app/projects/FlagshipRotation";

const flagship = {
  title: "Workflow Intelligence",
  description:
    "The flagship platform I'm building at RocketGate: replacing scattered status updates with a single source of truth for how engineering work actually moves.",
  technologies: ["Laravel", "Vue", "TypeScript"],
};

const projects = [
  {
    title: "PromptWorks",
    description:
      "An AI prompt-generation tool built with React and Node to help teams structure clear, reusable prompts: from technical documentation to content workflows.",
    liveDemo: "https://promptworks.danielsias.dev",
    github: "https://github.com/DanSias/prompt-works",
    image: "/images/screenshots/promptworks.png",
  },
  {
    title: "Well Prompted",
    description:
      "A structured prompt library for ChatGPT and other LLMs, built to keep AI-assisted development consistent and maintainable across a codebase.",
    liveDemo: "https://wellprompted.danielsias.dev",
    github: "https://github.com/DanSias/well-prompted",
    image: "/images/screenshots/wellprompted.png",
  },
  {
    title: "Well Applied",
    description:
      "An AI assistant that generates tailored prompts for job applications and interview prep: an exploration of structured prompt design outside of developer tooling.",
    liveDemo: "https://wellapplied.danielsias.dev",
    github: "https://github.com/DanSias/well-applied",
    image: "/images/screenshots/wellapplied.png",
  },
];

const LiveProjects = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-heading">Selected Work</h2>
      <p className="text-subhead">
        The platform I&apos;m building now, plus public tools I&apos;ve shipped.
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

      {/* Public projects */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
            <div className="relative w-full h-44">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            <div className="flex gap-3 p-6 pt-0">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700 border border-transparent hover:border-gray-500">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveProjects;
