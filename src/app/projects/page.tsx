import PageOutro from "@/components/home/PageOutro";
import { projects } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-32">
      <div className="max-w-5xl w-full">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-slate-200">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-2">
          A collection of my work, showcasing technical problem-solving and
          business impact.
        </p>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              {/* Project Title */}
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {project.company}
              </p>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {project.description}
              </p>

              {/* Technologies */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                <strong>Technologies:</strong>{" "}
                {project.technologies.join(" • ")}
              </p>

              {/* Challenges */}
              {project.challenges && (
                <p className="text-sm text-yellow-600 dark:text-yellow-200 mt-2">
                  <strong>Challenges:</strong> {project.challenges}
                </p>
              )}

              {/* Impact */}
              {project.impact && (
                <p className="text-sm text-green-600 dark:text-green-200 mt-2">
                  <strong>Impact:</strong> {project.impact}
                </p>
              )}

              {/* Repository Link */}
              {project.repo && (
                <div className="mt-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    View Repository
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <PageOutro />
    </section>
  );
}
