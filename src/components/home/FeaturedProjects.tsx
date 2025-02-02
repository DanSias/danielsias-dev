import Link from "next/link";
import { projects } from "@/constants/projects";
import * as Tooltip from "@radix-ui/react-tooltip";
const featuredProjects = projects.filter((project) => project.featured);
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaSalesforce,
  FaRegChartBar,
} from "react-icons/fa";
import {
  SiGooglebigquery,
  SiGooglecloud,
  SiGooglesheets,
  SiSupabase,
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

import { ReactElement } from "react";

// Map technology names to icons
const techIcons: Record<string, ReactElement> = {
  "React.js": <FaReact />,
  "Node.js": <FaNodeJs />,
  PostgreSQL: <FaDatabase />,
  "Express.js": <FaServer />,
  BigQuery: <SiGooglebigquery />,
  Salesforce: <FaSalesforce />,
  Supabase: <SiSupabase />,
  TailwindCSS: <SiTailwindcss />,
  Prisma: <SiPrisma />,
  TypeScript: <SiTypescript />,
  Express: <SiExpress />,
  "Chart.js": <FaRegChartBar />,
  "Google Cloud Functions": <SiGooglecloud />,
  "Google Sheets API": <SiGooglesheets />,
};

const FeaturedProjects: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-3xl font-bold text-primary text-center">
        Featured Projects
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center">
        A few of my most impactful projects.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex flex-col h-full">
            <div className="flex-grow mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {project.description}
              </p>
            </div>
            {/* Technology Icons with Tooltip */}
            <div className="flex items-center gap-3 mt-auto">
              {project.technologies.map((tech) => (
                <Tooltip.Provider key={tech} delayDuration={200}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <div className="cursor-pointer">
                        {techIcons[tech] || (
                          <span className="text-sm">{tech}</span>
                        )}
                      </div>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="bg-gray-900 text-white text-sm rounded-md px-3 py-2 shadow-lg"
                        side="top"
                        align="center">
                        {tech}
                        <Tooltip.Arrow className="fill-gray-900" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          View All Projects →
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
