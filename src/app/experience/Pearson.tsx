import ExperienceCaseStudy from "./ExperienceCaseStudy";
import {
  nexusMetrics,
  forecastingMetrics,
  seoAnalystMetrics,
  pearsonSeoRelaunchMetrics,
} from "@/constants/marketingEvidence";

const systems = [
  {
    title: "Nexus Analytics Platform",
    description:
      "React/Node platform unifying BigQuery and Salesforce data into real-time dashboards for marketing, forecasting, and executive reporting.",
    metrics: nexusMetrics,
  },
  {
    title: "Marketing Forecasting Platform",
    description:
      "Centralized budgeting and forecasting tool that replaced manual spreadsheets across marketing and paid media teams.",
    metrics: forecastingMetrics,
  },
  {
    title: "Data Warehouse & CRM Migration",
    description:
      "Collaborated on the Salesforce migration and BigQuery data warehouse implementation, preserving reporting continuity through the transition.",
  },
];

// Marketing/analytics work Daniel led, distinct from the systems above:
// initiatives and strategy, not software he built.
const initiatives = [
  {
    title: "SEO & Web Analytics Strategy",
    description:
      "Led data-driven SEO initiatives across 34 university partner programs: technical SEO, content strategy, and coordination with vendors and agencies on content and link development, backed by Google Analytics and Tableau reporting, before moving into analytics platform development.",
    metrics: seoAnalystMetrics,
  },
  {
    title: "Partner Online Degree Program SEO & Conversion Relaunch",
    description:
      "Led an SEO-focused relaunch of a partner's online degree program page, partnering with the client on content structure, keyword targeting, technical SEO, and on-page conversion elements.",
    metrics: pearsonSeoRelaunchMetrics,
  },
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
      summary="Roughly eleven years building the data infrastructure behind Pearson's marketing, recruitment, and financial operations, growing from SEO analyst into the engineer leading the analytics platform."
      systems={systems}
      systemsLabel="Systems & Platforms Built"
      initiatives={initiatives}
      initiativesLabel="Marketing & Analytics Initiatives Led"
      technologies={technologies}
      size="md"
    />
  );
};

export default Pearson;
