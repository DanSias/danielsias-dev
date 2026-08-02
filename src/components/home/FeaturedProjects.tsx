import Link from "next/link";
import { projects } from "@/constants/projects";
import * as Tooltip from "@radix-ui/react-tooltip";
const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => Number(!!b.lead) - Number(!!a.lead));
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
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
  SiLaravel,
  SiVuedotjs,
  SiMysql,
  SiJira,
  SiGitlab,
} from "react-icons/si";

import { cloneElement, ReactElement } from "react";

// Map technology names to icons
const techIcons: Record<string, ReactElement<{ "aria-label"?: string }>> = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  PostgreSQL: <FaDatabase />,
  BigQuery: <SiGooglebigquery />,
  Salesforce: <FaSalesforce />,
  Supabase: <SiSupabase />,
  "Tailwind CSS": <SiTailwindcss />,
  Prisma: <SiPrisma />,
  TypeScript: <SiTypescript />,
  "Express.js": <SiExpress />,
  "Chart.js": <FaRegChartBar />,
  "Google Cloud Functions": <SiGooglecloud />,
  "Google Sheets API": <SiGooglesheets />,
  Laravel: <SiLaravel />,
  Vue: <SiVuedotjs />,
  MySQL: <SiMysql />,
  Jira: <SiJira />,
  GitLab: <SiGitlab />,
};

const FeaturedProjects: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-heading">More Projects</h2>
      <p className="text-subhead">
        Full-stack architecture and AI-assisted tooling, beyond the flagship
        above.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto gap-6">
        {featuredProjects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full">
            <div className="flex-grow mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {project.company}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm leading-relaxed">
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
                        {techIcons[tech] ? (
                          cloneElement(techIcons[tech], { "aria-label": tech })
                        ) : (
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
