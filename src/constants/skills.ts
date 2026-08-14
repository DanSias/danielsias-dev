import { IconType } from "react-icons";
import { FaCode, FaServer, FaDatabase, FaCloud } from "react-icons/fa";
import { FaRobot, FaUsersGear } from "react-icons/fa6";

export type CapabilityLink = { label: string; href: string };

export type Capability = {
  title: string;
  icon: IconType;
  whatIBuild: string;
  appliedIn: CapabilityLink[];
  solves: string;
  technologies: string[];
};

export const capabilities: Capability[] = [
  {
    title: "Frontend Engineering",
    icon: FaCode,
    whatIBuild:
      "Interactive dashboards and internal tools with React, Next.js, and Vue, built for clarity under real operational data, not just demos.",
    appliedIn: [
      { label: "Workflow Intelligence", href: "/projects/workflow-intelligence" },
      { label: "Nexus", href: "/projects" },
      { label: "Executive Insights Dashboard", href: "/projects" },
    ],
    solves:
      "Turning complex operational and analytics data into interfaces people actually use every day.",
    technologies: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & API Development",
    icon: FaServer,
    whatIBuild:
      "APIs and services behind payment platform tooling, internal systems, and data integrations, built in Laravel/PHP and Node.js.",
    appliedIn: [
      { label: "Workflow Intelligence", href: "/projects/workflow-intelligence" },
      { label: "Transaction Toolkit", href: "/projects/transaction-toolkit" },
      { label: "Nexus", href: "/projects" },
    ],
    solves:
      "Integrating cleanly with third-party platforms (Jira, GitLab, Salesforce, payment systems) without the integration becoming brittle.",
    technologies: [
      "Laravel",
      "PHP",
      "Node.js",
      "Express",
      "Python",
      "REST APIs",
      "OAuth",
      "Payment Integrations",
    ],
  },
  {
    title: "Data Platforms & Analytics",
    icon: FaDatabase,
    whatIBuild:
      "Systems that unify data from multiple platforms into a single, real-time source of truth.",
    appliedIn: [
      { label: "Nexus", href: "/projects" },
      { label: "Salesforce Migration & Data Warehouse Setup", href: "/projects" },
      { label: "SEO Performance Tracker", href: "/projects" },
    ],
    solves:
      "Replacing multi-day manual reporting cycles with live dashboards, and migrating legacy data without losing historical accuracy.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "BigQuery",
      "SQL",
      "Data Modeling",
      "Query Optimization",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    whatIBuild:
      "The deployment pipelines and cloud infrastructure that keep applications reliable and releases predictable.",
    appliedIn: [
      { label: "RocketGate", href: "/experience" },
      { label: "Salesforce Migration & Data Warehouse Setup", href: "/projects" },
      { label: "Executive Insights Dashboard", href: "/projects" },
    ],
    solves:
      "Reducing manual release work and keeping infrastructure reproducible instead of ad hoc.",
    technologies: [
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    title: "AI-Assisted Development",
    icon: FaRobot,
    whatIBuild:
      "Production features and internal tools built with AI-assisted workflows: from first prototype to shipped code.",
    appliedIn: [
      { label: "Workflow Intelligence", href: "/projects/workflow-intelligence" },
      { label: "Well Prompted", href: "/projects" },
      { label: "Transaction Toolkit", href: "/projects/transaction-toolkit" },
    ],
    solves:
      "Moving faster from prototype to production without cutting corners on code quality or maintainability.",
    technologies: ["AI-Assisted Development"],
  },
  {
    title: "Engineering Workflow & Collaboration",
    icon: FaUsersGear,
    whatIBuild:
      "The tooling and processes (like Workflow Intelligence itself) that make a team's day-to-day engineering work more visible.",
    appliedIn: [
      { label: "Workflow Intelligence", href: "/projects/workflow-intelligence" },
      { label: "Developer Documentation & Onboarding", href: "/experience" },
      { label: "Marketing Forecasting Platform", href: "/experience" },
    ],
    solves:
      "Replacing scattered, manual status-tracking with systems that show teams how work is actually progressing.",
    technologies: ["Git", "Pull Requests", "Agile/Scrum", "CI/CD", "Performance Optimization"],
  },
];
