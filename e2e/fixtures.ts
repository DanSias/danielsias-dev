/**
 * Shared route/content data for the E2E suite. Kept in one place so tests
 * read like assertions about the site, not a re-implementation of it.
 * Update alongside src/components/layout/Header.tsx and the page headings
 * if either changes.
 */

export type Route = {
  path: string;
  heading: string;
  navLabel?: string; // label as it appears in the header nav, if present there
};

// Order matches the header nav (About, Experience, Projects, Skills,
// Education, Resume, Contact); homepage has no nav entry of its own.
export const ROUTES: Route[] = [
  { path: "/", heading: "Daniel Sias" },
  { path: "/about", heading: "How I Think", navLabel: "About" },
  {
    path: "/experience",
    heading: "Engineering Experience",
    navLabel: "Experience",
  },
  // Footer-only route (see Footer.tsx) — deliberately has no navLabel so it
  // isn't asserted as part of the primary header nav.
  {
    path: "/marketing",
    heading: "Marketing, Analytics & Digital Experience",
  },
  { path: "/projects", heading: "Engineering Projects", navLabel: "Projects" },
  {
    path: "/projects/workflow-intelligence",
    heading: "Workflow Intelligence",
  },
  {
    path: "/projects/transaction-toolkit",
    heading: "Transaction Toolkit",
  },
  {
    path: "/projects/verbatim",
    heading: "Verbatim",
  },
  {
    path: "/projects/knowledge-exporter",
    heading: "Knowledge Exporter",
  },
  { path: "/skills", heading: "Engineering Capabilities", navLabel: "Skills" },
  {
    path: "/education",
    heading: "Engineering Foundations",
    navLabel: "Education",
  },
  { path: "/resume", heading: "Resume", navLabel: "Resume" },
  {
    path: "/contact",
    heading: "Have a Problem Worth Solving?",
    navLabel: "Contact",
  },
];

// The subset of ROUTES that appear in the header/footer nav (all but home).
export const NAV_ROUTES = ROUTES.filter((r) => r.navLabel);
