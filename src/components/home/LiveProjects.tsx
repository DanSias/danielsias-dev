import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "PromptWorks",
    description:
      "Transform your business communications with this intelligent prompt generator, streamlining everything from marketing campaigns to content strategy.",
    liveDemo: "https://promptworks.danielsias.dev",
    github: "https://github.com/DanSias/prompt-works",
    image: "/images/promptworks-screenshot.png",
  },
  {
    title: "Well Prompted",
    description:
      "Supercharge your development workflow with structured prompts designed specifically for ChatGPT and other LLMs, ensuring consistent code quality.",
    liveDemo: "https://wellprompted.danielsias.dev",
    github: "https://github.com/DanSias/well-prompted",
    image: "/images/wellprompted-screenshot.png",
  },
  {
    title: "Well Applied",
    description:
      "Navigate your job search with precision using this smart assistant that crafts personalized prompts for compelling applications and interview preparation.",
    liveDemo: "https://wellapplied.danielsias.dev",
    github: "https://github.com/DanSias/well-applied",
    image: "/images/wellapplied-screenshot.png",
  },
];

const LiveProjects = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-3xl font-bold text-primary text-center">
        Live Projects
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center">
        Explore my latest live, public projects.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
            <div className="relative w-full h-56">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {project.description}
              </p>
            </div>
            <div className="flex space-x-4 p-6">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 border border-transparent hover:border-gray-500">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="/projects"
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          View All Projects →
        </a>
      </div>
    </section>
  );
};

export default LiveProjects;
