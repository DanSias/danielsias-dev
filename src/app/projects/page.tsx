import { projects } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-900 text-center">
          Projects
        </h1>
        <p className="text-lg text-gray-600 text-center mt-2">
          A collection of my work, ranging from full-stack applications to
          AI-powered tools.
        </p>

        <div className="mt-6 grid gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900">
                {project.name}
              </h2>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <div className="mt-4 flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline">
                    Live Demo
                  </a>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-semibold hover:underline">
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
