export type ProjectTheme =
  | "ai-tooling"
  | "analytics"
  | "infrastructure"
  | "professional";

export type Project = {
  title: string;
  company: string;
  theme: ProjectTheme;
  /** Marks the standout project within its theme, giving it a larger, richer card. */
  lead?: boolean;
  /** Shown on the homepage's "More Projects" section. */
  featured?: boolean;
  description: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  /** One concise sentence naming the interesting engineering idea, for the project-index card. Case-study page carries the full depth. */
  engineeringHook?: string;
  /** Omit when the stack can't be verified rather than guessing. */
  technologies?: string[];
  liveDemo?: string;
  github?: string;
  /** Screenshot shown at the top of the card, e.g. "/images/screenshots/example.png". */
  image?: string;
  /** Object-position class biasing the card crop, e.g. "object-top" for a tall source image. */
  imagePosition?: string;
  /** Link to a dedicated case-study page, e.g. "/projects/example". */
  caseStudyHref?: string;
  /** Short architectural/use-case note shown below tags, e.g. a relationship to another project. Self-contained — doesn't assume layout adjacency. */
  note?: string;
};

export const projects: Project[] = [
  // AI-Assisted Developer Tools
  {
    title: "Well Prompted",
    company: "Personal Project",
    theme: "ai-tooling",
    featured: true,
    description:
      "Developers lose time re-deriving good prompts for the same recurring tasks (debugging, documentation, code review) from scratch every time. Built a structured prompt library with React, Node, and Prisma that keeps AI-assisted development consistent and reusable across a codebase instead of ad hoc.",
    technologies: ["React", "Node.js", "Prisma", "Supabase", "Tailwind CSS"],
    liveDemo: "https://wellprompted.danielsias.dev",
    github: "https://github.com/DanSias/well-prompted",
    image: "/images/screenshots/wellprompted.png",
  },
  {
    title: "PromptWorks",
    company: "Personal Project",
    theme: "ai-tooling",
    description:
      "Writing a clear, well-structured AI prompt takes iteration most people don't have time for. Built an AI prompt-generation tool with React and Node that turns a rough goal into a reusable prompt: useful for technical documentation as much as general business writing.",
    technologies: ["React", "Node.js"],
    liveDemo: "https://promptworks.danielsias.dev",
    github: "https://github.com/DanSias/prompt-works",
    image: "/images/screenshots/promptworks.png",
  },
  {
    title: "Well Applied",
    company: "Personal Project",
    theme: "ai-tooling",
    description:
      "Job applications benefit from tailored, specific language, but writing that from scratch for every posting doesn't scale. Built an AI assistant that generates tailored prompts for applications and interview prep, extending the same structured-prompt approach into a non-developer use case.",
    technologies: ["React", "Node.js"],
    liveDemo: "https://wellapplied.danielsias.dev",
    github: "https://github.com/DanSias/well-applied",
    image: "/images/screenshots/wellapplied.png",
  },

  // Professional & Internal Engineering (RocketGate)
  {
    title: "Verbatim",
    company: "RocketGate",
    theme: "professional",
    description: "Grounded documentation Q&A and support assistance.",
    problem:
      "Documentation assistants can produce plausible answers without a reliable connection to the exact source material behind them.",
    approach:
      "Retrieve and rank source chunks deterministically, compute confidence outside the model, then use an LLM only for synthesis while mapping citations back to the actual retrieved sections.",
    outcome:
      "A traceable answer workflow with always-on source citations, graceful low-confidence escalation, multi-provider generation, and reusable retrieval infrastructure for support-reply drafting.",
    engineeringHook:
      "Retrieves and ranks source chunks deterministically, then uses an LLM only for synthesis — every citation maps back to the exact retrieved section, with graceful escalation when confidence is low.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Anthropic"],
    image: "/images/screenshots/verbatim/verbatim-answer.png",
    caseStudyHref: "/projects/verbatim",
  },
  {
    title: "Transaction Toolkit",
    company: "RocketGate",
    theme: "professional",
    description: "Local-first payment investigation and analytics.",
    problem:
      "Live transaction-history queries make repeated cross-cutting investigation cumbersome.",
    approach:
      "Snapshot and normalize transaction data locally, then analyze the same dataset across declines, authentication, retries, concentration, and operational signals.",
    outcome:
      "A repeatable investigation workflow with deterministic reporting and optional AI explanation over pre-aggregated, PII-excluding metrics.",
    engineeringHook:
      "Snapshots transaction history locally, then analyzes the same dataset across declines, retries, and concentration — deterministic reporting by default, with optional AI explanation layered on top.",
    technologies: ["TypeScript", "React", "SQLite", "OpenAI"],
    image: "/images/screenshots/transaction-toolkit/transaction-toolkit-identifier.png",
    imagePosition: "object-top",
    caseStudyHref: "/projects/transaction-toolkit",
  },
  {
    title: "Knowledge Exporter",
    company: "RocketGate",
    theme: "professional",
    description: "Deterministic knowledge extraction for portable, diffable content.",
    problem:
      "Support and internal documentation accumulate in SaaS platforms as proprietary HTML that's difficult to audit, version, migrate, or reuse elsewhere.",
    approach:
      "Built a provider-abstracted, read-only export pipeline for Freshdesk and Confluence that converts source content to Markdown, applies deterministic quality transforms, and uses SHA-256 content comparison so reruns create, update, or skip files rather than rewriting everything.",
    outcome:
      "A repeatable extraction workflow with diff-aware results, per-run lineage, portable filesystem output, and a clean upstream boundary for downstream documentation and knowledge systems.",
    engineeringHook:
      "A provider-abstracted pipeline that converts Freshdesk and Confluence content into deterministic Markdown, using SHA-256 comparison so reruns diff cleanly instead of rewriting everything.",
    technologies: ["Next.js", "TypeScript", "Freshdesk", "Confluence"],
    image: "/images/screenshots/knowledge-exporter/knowledge-exporter-inventory.png",
    note: "Designed as an upstream source-preparation layer for downstream knowledge tools, including Verbatim — a complementary, standalone tool rather than an integrated pipeline.",
    caseStudyHref: "/projects/knowledge-exporter",
  },

  // Analytics & Reporting Platforms
  {
    title: "Nexus: Analytics Command Center",
    company: "Pearson Online Learning Services",
    theme: "analytics",
    lead: true,
    featured: true,
    description:
      "A full-stack analytics platform unifying BigQuery and Salesforce data behind a single API layer.",
    problem:
      "Marketing and executive teams were waiting multiple days for hand-compiled reports pulled from Salesforce, BigQuery, and ad platforms separately. By the time a report was ready, the numbers had already moved.",
    approach:
      "Built a full-stack platform with React and Node.js that unified BigQuery and Salesforce data behind a single API layer, replacing the manual export-and-compile cycle with live dashboards.",
    outcome:
      "Cut reporting time by 85% and gave teams real-time visibility into $25M+ in tracked marketing and ad spend.",
    technologies: ["React", "Node.js", "Express.js", "BigQuery", "Salesforce"],
  },
  {
    title: "Executive Insights Dashboard",
    company: "Pearson Online Learning Services",
    theme: "analytics",
    description:
      "Department leaders each tracked performance in separate spreadsheets, making it hard to see risk or alignment across the organization at a glance. Consolidated department performance, goals, and emerging issues into one interactive dashboard built with React, Node.js, and BigQuery, giving leadership a shared, real-time view instead of a monthly snapshot.",
    technologies: [
      "React",
      "Node.js",
      "BigQuery",
      "PostgreSQL",
      "Chart.js",
      "Google Cloud Functions",
    ],
  },
  {
    title: "Email Marketing Performance Tracker",
    company: "Pearson Online Learning Services",
    theme: "analytics",
    description:
      "Email performance data was scattered across Salesforce Marketing Cloud and Google Analytics, making it slow to compare campaigns or run a clean A/B test. Built a centralized dashboard with React and Node.js that pulled both sources into one view, so marketing teams could compare open rates, click-through, and conversions without exporting anything by hand.",
    technologies: [
      "React",
      "Node.js",
      "Salesforce Marketing Cloud API",
      "Google Analytics API",
      "BigQuery",
    ],
  },
  {
    title: "SEO Performance Tracker",
    company: "Pearson Online Learning Services",
    theme: "analytics",
    description:
      "Tracking keyword rankings and competitor movement meant logging into Ahrefs manually and exporting data by hand. Built a dashboard on the Ahrefs API with Node.js and React that automated rank tracking, site health, and competitor analysis into one place the SEO team could check daily.",
    technologies: [
      "Node.js",
      "React",
      "Ahrefs API",
      "PostgreSQL",
      "Express.js",
      "Chart.js",
    ],
  },

  // Operations, Automation & Data Infrastructure
  {
    title: "Marketing Budget & Forecast Hub",
    company: "Pearson Online Learning Services",
    theme: "infrastructure",
    description:
      "Budget planning ran through shared spreadsheets that broke down under multi-user editing and made approvals hard to track. Replaced it with a centralized forecasting platform built on React, Node.js, and PostgreSQL that supports multi-user input and approval workflows, turning a fragile manual process into a reliable operational system.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Google Sheets API",
      "Tailwind CSS",
    ],
  },
  {
    title: "Salesforce Migration & Data Warehouse Setup",
    company: "Pearson Online Learning Services",
    theme: "infrastructure",
    description:
      "Legacy reporting lived on an aging MS SQL Server system that limited how leadership could analyze the business. Collaborated on migrating that data into Salesforce and a new BigQuery warehouse, preserving historical accuracy while unlocking scalable, real-time reporting.",
    technologies: [
      "Salesforce",
      "BigQuery",
      "MS SQL Server",
      "Python",
      "Google Cloud Functions",
    ],
  },
  {
    title: "Recruitment Agent Activity Tracking",
    company: "Pearson Online Learning Services",
    theme: "infrastructure",
    description:
      "Recruitment managers had no real-time way to see agent performance against targets. Activity data lived inside a separate call platform. Integrated the Nice inContact API with React and Node.js to surface agent activity and lead progression in one dashboard, giving managers same-day visibility instead of a weekly report.",
    technologies: [
      "Node.js",
      "React",
      "Nice inContact API",
      "PostgreSQL",
      "BigQuery",
      "Chart.js",
    ],
  },
];
