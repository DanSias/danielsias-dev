"use client";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCogs,
  FaDocker,
  FaAws,
  FaGit,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiGooglecloud,
  SiAuth0,
  SiTailwindcss,
  SiVuedotjs,
  SiNextdotjs,
} from "react-icons/si";
import { IconType } from "react-icons";

const techIcons: Record<string, IconType> = {
  TypeScript: SiTypescript,
  "React.js": FaReact,
  "Vue.js": SiVuedotjs,
  "Next.js": SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  "API Integration": FaCode, // No specific API icon, so using generic code icon
  "User-Centered Design": FaCogs,
  "Responsive Principles": FaCogs,

  "Node.js": FaNodeJs,
  "RESTful APIs": FaCode,
  PostgreSQL: SiPostgresql,
  "Google BigQuery": SiGooglecloud,
  JWT: FaCode, // No JWT-specific icon, defaulting
  OAuth: SiAuth0,
  Docker: FaDocker,
  AWS: FaAws,
  Git: FaGit,

  "AI-Driven Solutions": FaCode, // Could use an AI-based icon if preferred
  "Data Analysis": SiGooglecloud, // Could be adjusted if another icon is better
  "Automation Tools": FaCogs,
  "Agile Development": FaCogs,
  Documentation: FaCode,
  "Database Optimization": FaDatabase,
};

const skills = [
  {
    category: "Frontend",
    technologies: [
      "TypeScript",
      "React.js",
      "Vue.js",
      "Next.js",
      "TailwindCSS",
      "API Integration",
      "User-Centered Design",
      "Responsive Principles",
    ],
    icon: FaReact,
  },
  {
    category: "Backend",
    technologies: [
      "Node.js",
      "RESTful APIs",
      "PostgreSQL",
      "Google BigQuery",
      "JWT",
      "OAuth",
      "CI/CD",
      "Docker",
      "AWS",
      "Git",
    ],
    icon: FaNodeJs,
  },
  {
    category: "Extras",
    technologies: [
      "AI-Driven Solutions",
      "Data Analysis",
      "Automation Tools",
      "Agile Development",
      "Documentation",
      "Database Optimization",
    ],
    icon: FaCogs,
  },
];

const SkillsList = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-200">
        Technical Skills
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <li key={index} className="p-6 border rounded-lg shadow-sm">
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-4 flex items-center text-slate-700 dark:text-slate-200">
              <skill.icon className="text-blue-500 text-3xl mr-3" />
              {skill.category}
            </h3>

            {/* Technology List */}
            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
              {skill.technologies.map((tech, techIndex) => {
                const TechIcon = techIcons[tech] || FaCode; // Use specific icon or default to FaCode
                return (
                  <li key={techIndex} className="flex items-center">
                    <TechIcon className="text-blue-500 text-lg mr-2" />
                    {tech}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
