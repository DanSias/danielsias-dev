import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  FaCode,
  FaServer,
  FaProjectDiagram,
  FaDatabase,
  FaChartLine,
  FaCogs,
} from "react-icons/fa";

const skills = [
  {
    title: "Interface Development",
    description:
      "Building dynamic, interactive, and responsive user interfaces with React, Next.js, and modern JavaScript frameworks. Focused on optimizing performance, accessibility, and user experience.",
    icon: FaCode,
  },
  {
    title: "Scalable API Design",
    description:
      "Building scalable APIs, microservices, and server-side applications with Node.js, PHP, and cloud-based infrastructure. Optimizing data processing and backend performance.",
    icon: FaServer,
  },
  {
    title: "Technology Architecting",
    description:
      "Building scalable, automated, and flexible technology solutions that enhance business efficiency, streamline operations, and improve long-term profitability. Experience with CRM integrations, analytics platforms, and custom development solutions.",
    icon: FaProjectDiagram,
  },
  {
    title: "CRM and Business Intelligence",
    description:
      "Expertise in implementing and optimizing CRM systems like Salesforce, Infusionsoft, and custom solutions. Experience in developing data-driven business intelligence tools that improve visibility and decision-making.",
    icon: FaDatabase,
  },
  {
    title: "Performance Marketing & Data Analytics",
    description:
      "Expertise in tracking marketing attribution, analyzing key performance indicators (KPIs), and refining strategies based on actionable insights. Experience with Google Analytics, Tableau, and custom BI dashboards.",
    icon: FaChartLine,
  },
  {
    title: "Marketing Funnels & Automation",
    description:
      "Designing, implementing, and optimizing high-converting marketing funnels. Leveraging automation tools to improve lead nurturing, email marketing workflows, and sales processes.",
    icon: FaCogs,
  },
];

const SkillsIcons = () => {
  return (
    <section className="max-w-6xl mx-auto p-6 text-center justify-center">
      <h2 className="text-3xl font-bold text-primary text-center">
        Key Skills
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center">
        Core competencies and technical expertise.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 justify-center">
        {skills.map((skill, index) => (
          <Tooltip.Provider key={index} delayDuration={200}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <div className="flex justify-center">
                  <div className="rounded-xl p-6 text-center shadow-xl border border-slate-700 my-12 w-full max-w-xs">
                    <div className="mx-auto flex h-16 w-16 -translate-y-14 transform items-center justify-center rounded-full bg-slate-700 dark:bg-slate-800 shadow-lg">
                      <skill.icon className="text-sky-500 dark:text-sky-200 text-4xl" />
                    </div>
                    <h1 className="text-darken mb-3 text-lg font-medium lg:px-8">
                      {skill.title}
                    </h1>
                  </div>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-gray-900 dark:bg-sky-600 text-white text-sm rounded-md px-3 py-2 shadow-lg max-w-xs text-center break-words"
                  side="top"
                  align="center">
                  {skill.description}
                  <Tooltip.Arrow className="fill-gray-900" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        ))}
      </div>
      <div className="">
        <Link
          href="/skills"
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          View All Skills →
        </Link>
      </div>
    </section>
  );
};

export default SkillsIcons;
