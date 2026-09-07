import ExperienceCaseStudy from "./ExperienceCaseStudy";
import { bruteStrengthMetrics } from "@/constants/marketingEvidence";

const systems = [
  {
    title: "Marketing Technology & Funnel Engineering",
    description:
      "Technical integration and testing of checkout and one-click upsell flows, shopping carts, CRM systems, CMS platforms, and Salesforce integrations, alongside broader marketing-automation tooling, for clients across multiple industries.",
  },
];

// Marketing/analytics work Daniel led, distinct from the systems above:
// campaign and optimization work, not software he built.
const initiatives = [
  {
    title: "Brute Strength Training — Client Engagement via Tech Guys Who Get Marketing",
    description:
      "Contracting with Tech Guys Who Get Marketing, contributed to the paid lead-generation and conversion engagement for Brute Strength Training as part of the team: setting up optimization experiments, building and implementing landing and funnel pages, coordinating the required copy and design assets, working on ad targeting, and recording client-facing video walkthroughs of performance and recommended next tests. Over the course of the engagement, cost per lead fell from $1.21 to $0.45 (about 63%).",
    metrics: bruteStrengthMetrics,
  },
];

const impact = [
  "37% increase in post-purchase conversion",
  "201.2% growth in lead generation, no added ad spend",
];

const technologies = [
  "PHP",
  "JavaScript",
  "Ecommerce Systems",
  "CRM Integrations",
  "Salesforce",
  "CMS Integrations",
  "Marketing Automation",
  "A/B Testing",
  "Paid Acquisition",
  "Video Marketing",
];

const LiquidGravity: React.FC = () => {
  return (
    <ExperienceCaseStudy
      company="Liquid Gravity Engineering"
      role="Founder & Full-Stack Developer / Marketing Consultant"
      dates="July 2005 – June 2013"
      summary="Founded and led a marketing technology consultancy: conversion optimization, paid acquisition, and marketing-technology integrations (CMS, CRM, Salesforce, marketing automation, checkout and upsell flows) for clients across multiple industries, including conversion-optimization engagements delivered through Tech Guys Who Get Marketing."
      systems={systems}
      systemsLabel="Marketing Technology Built"
      initiatives={initiatives}
      initiativesLabel="Marketing Initiatives Led"
      impact={impact}
      technologies={technologies}
      size="sm"
    />
  );
};

export default LiquidGravity;
