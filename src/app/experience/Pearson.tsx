import ExperienceCaseStudy from "./ExperienceCaseStudy";

const systems = [
  {
    title: "Nexus Analytics Platform",
    description:
      "React/Node platform unifying BigQuery and Salesforce data into real-time dashboards for marketing, forecasting, and executive reporting.",
  },
  {
    title: "Marketing Forecasting Platform",
    description:
      "Centralized budgeting and forecasting tool that replaced manual spreadsheets across marketing and paid media teams.",
  },
  {
    title: "Data Warehouse & CRM Migration",
    description:
      "Collaborated on the Salesforce migration and BigQuery data warehouse implementation, preserving reporting continuity through the transition.",
  },
];

const impact = [
  "85% faster reporting",
  "$25M+ in tracked marketing spend",
  "20+ hours saved monthly",
  "$1.3M SEO budget managed",
];

const technologies = [
  "React",
  "Node.js",
  "Express.js",
  "BigQuery",
  "PostgreSQL",
  "Salesforce",
  "Google Analytics",
  "Tableau",
];

const roleProgression = (
  <span className="inline-flex flex-wrap items-center gap-1.5">
    <span className="text-gray-500 dark:text-gray-400">SEO Analyst</span>
    <span className="text-gray-400 dark:text-gray-600" aria-hidden>
      →
    </span>
    <span className="font-medium text-gray-600 dark:text-gray-300">
      Data & Analytics Lead Developer
    </span>
  </span>
);

const Pearson: React.FC = () => {
  return (
    <ExperienceCaseStudy
      company="Pearson Online Learning Services"
      role={roleProgression}
      dates="June 2013 – July 2024"
      summary="Nine years building the data infrastructure behind Pearson's marketing, recruitment, and financial operations, growing from SEO analyst into the engineer leading the analytics platform."
      systems={systems}
      impact={impact}
      technologies={technologies}
      size="md"
    />
  );
};

export default Pearson;
