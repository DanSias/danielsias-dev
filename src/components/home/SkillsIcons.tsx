import Link from "next/link";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";
import { FaRobot, FaUsersGear } from "react-icons/fa6";

const skills = [
  {
    title: "Frontend",
    description:
      "React, Next.js, TypeScript, Tailwind CSS, HTML/CSS, Responsive Design, API Integration",
    icon: FaCode,
  },
  {
    title: "Backend",
    description:
      "Laravel, PHP, Node.js, Express, Python, REST APIs, OAuth, Payment Integrations",
    icon: FaServer,
  },
  {
    title: "Databases",
    description:
      "PostgreSQL, MariaDB, MySQL, BigQuery, SQL, Data Modeling, Query Optimization",
    icon: FaDatabase,
  },
  {
    title: "Cloud & DevOps",
    description: "AWS, Google Cloud, Microsoft Azure, Docker, CI/CD, GitHub Actions, Linux",
    icon: FaCloud,
  },
  {
    title: "Workflow & Collaboration",
    description: "Git, Pull Requests, Agile/Scrum, GitHub-based workflows, Performance Optimization",
    icon: FaUsersGear,
  },
  {
    title: "AI-Assisted Development",
    description:
      "LLM Integration, RAG Pipelines, AI-Assisted Coding, Local LLMs, Workflow Automation",
    icon: FaRobot,
  },
];

const SkillsIcons = () => {
  return (
    <section className="max-w-6xl mx-auto text-center">
      <h2 className="text-heading">Skills</h2>
      <p className="text-subhead">Core competencies and technical expertise.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="flex flex-col items-center gap-2 p-4 text-left rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              <skill.icon className="text-sky-500 dark:text-sky-300 text-base" />
            </div>
            <h3 className="text-primary text-base font-semibold text-center">{skill.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/skills"
          className="link-outline">
          View All Skills →
        </Link>
      </div>
    </section>
  );
};

export default SkillsIcons;
