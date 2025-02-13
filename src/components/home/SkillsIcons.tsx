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
    title: "Front-End Craftsman",
    description:
      "Turning complex requirements into elegant user experiences through React and Next.js. My interfaces don't just look good - they're fast, accessible, and built to scale with your business needs.",
    icon: FaCode,
  },
  {
    title: "API & Backend Architecture",
    description:
      "Creating robust digital foundations with Node.js and PHP that handle millions of requests without breaking a sweat. My APIs are built for growth, with clean documentation that your team will actually want to use.",
    icon: FaServer,
  },
  {
    title: "Solutions Architect",
    description:
      "Mapping out the big picture while sweating the small details. I specialize in connecting disparate systems into cohesive solutions that solve real business problems, from CRM integrations to custom analytics platforms.",
    icon: FaProjectDiagram,
  },
  {
    title: "Data Systems Specialist",
    description:
      "Unlocking the full potential of your business data through customized CRM implementations and BI tools. Whether it's Salesforce, Infusionsoft, or a custom solution, I help teams make better decisions faster.",
    icon: FaDatabase,
  },
  {
    title: "Marketing Analytics Expert",
    description:
      "Transforming raw data into actionable insights that drive marketing success. I combine deep experience with Google Analytics and Tableau with custom dashboard development to give you the full picture of campaign performance.",
    icon: FaChartLine,
  },
  {
    title: "Revenue System Designer",
    description:
      "Engineering the machinery that turns prospects into loyal customers. I create automated marketing funnels that nurture leads, streamline email workflows, and optimize every step of your sales process.",
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
                  <div className="rounded-xl p-6 text-center shadow-xl border border-slate-400 my-12 w-full max-w-xs">
                    <div className="mx-auto flex h-16 w-16 -translate-y-14 transform items-center justify-center rounded-full bg-slate-700 dark:bg-slate-800 shadow-lg">
                      <skill.icon className="text-sky-500 dark:text-sky-200 text-4xl" />
                    </div>
                    <h1 className="text-primary mb-3 text-lg font-medium lg:px-8">
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
