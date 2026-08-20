import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import PageOutro from "@/components/home/PageOutro";
import Screenshot from "../workflow-intelligence/Screenshot";

const title = "Knowledge Exporter";
const description =
  "A provider-abstracted export pipeline that converts Freshdesk Solutions and Confluence content into deterministic Markdown, using SHA-256 comparison so reruns update only what actually changed.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/knowledge-exporter" },
  openGraph: { title, description, url: "/projects/knowledge-exporter" },
  twitter: { title, description },
};

const SHOT_DIR = "/images/screenshots/knowledge-exporter";

const SHOTS = {
  scope: { src: `${SHOT_DIR}/knowledge-exporter-scope.png`, width: 2880, height: 2000 },
  confluenceExplore: {
    src: `${SHOT_DIR}/knowledge-exporter-confluence-explore.png`,
    width: 2880,
    height: 2000,
  },
  results: { src: `${SHOT_DIR}/knowledge-exporter-results.png`, width: 2880, height: 902 },
  inventory: { src: `${SHOT_DIR}/knowledge-exporter-inventory.png`, width: 2880, height: 2000 },
} as const;

const SHOT_SIZES = "(min-width: 1024px) 976px, 100vw";
const SHOT_SIZES_WIDE = "(min-width: 1024px) 1152px, 100vw";

function Section({
  children,
  className = "",
  padding = "py-14",
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
}) {
  return (
    <section className={`${padding} border-t border-slate-200 dark:border-slate-800 ${className}`}>
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </section>
  );
}

// Slightly wider breakout than the max-w-5xl reading column, reserved for
// the dense multi-panel screenshots (source explorer, export inventory).
const WIDE = "max-w-[1200px] mx-auto px-6";

function Wide({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${WIDE} ${className}`}>{children}</div>;
}

const sourceModels = [
  {
    title: "Freshdesk: Category → Folder → Article",
    body: "A fixed three-level hierarchy. Scope is selected by category, and the folders and articles beneath it export together.",
  },
  {
    title: "Confluence: Nested Page Tree",
    body: "Pages nest to arbitrary depth inside a space, mirrored directly in Explore's tree view rather than flattened into fixed levels.",
  },
  {
    title: "Shared Conversion Utilities",
    body: "Both providers route through the same HTML-to-Markdown conversion, content-quality cleanup, and stable path/slug generation — but each keeps its own source-traversal logic; there's no single normalized document schema both funnel through first.",
  },
  {
    title: "Server-Side Credentials Only",
    body: "API credentials for both providers are handled server-side. Nothing touches the browser.",
  },
];

const results = [
  "Two structurally different SaaS sources — Freshdesk and Confluence — export through one deterministic pipeline into portable Markdown.",
  "Repeat runs skip unchanged content and touch only what actually changed, instead of rewriting the entire export.",
  "Every run produces an auditable change report: created, updated, skipped, and failed counts, with the exact paths touched.",
  "Scope, run changes, and the finished export are all inspectable — nothing happens silently.",
  "The finished export is a real local filesystem artifact: browsable, greppable, and usable by other tools without depending on the source platform.",
  "API credentials for both providers stay server-side; nothing touches the browser.",
];

const technicalSummary: { title: string; items: string[] }[] = [
  { title: "Application", items: ["Next.js", "TypeScript", "Vitest"] },
  {
    title: "Conversion",
    items: [
      "HTML → Markdown (Turndown)",
      "Content-quality normalization",
      "Stable path/slug generation",
      "Oversized-content splitting",
    ],
  },
  {
    title: "Providers",
    items: [
      "Freshdesk Solutions API (paginated)",
      "Confluence Cloud API (paginated)",
      "Server-side credentials",
    ],
  },
  {
    title: "Reliability",
    items: ["SHA-256 idempotent writes", "Per-run change reports", "Live export progress"],
  },
];

const nextDirections = [
  "Preserve full source hierarchy on export, not just in Explore",
  "Retry/backoff and resumable job state for long-running exports",
  "Incremental source sync, instead of re-fetching on every run",
  "Attachment downloading and inter-document link rewriting",
];

export default function KnowledgeExporterPage() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-14">
        <div className="max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <Link
              href="/projects"
              className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">
              Projects
            </Link>
            <span className="text-gray-400 dark:text-gray-600" aria-hidden="true">
              /
            </span>
            <span className="text-gray-500 dark:text-gray-400">Case Study</span>
          </nav>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-sky-100 leading-snug max-w-3xl">
            Turning proprietary SaaS knowledge into a portable, diffable
            corpus
          </p>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        <Wide className="mt-10">
          <Screenshot
            src={SHOTS.scope.src}
            width={SHOTS.scope.width}
            height={SHOTS.scope.height}
            alt="Freshdesk Exporter scope-selection step showing four categories with folder and article counts, and an API Reference category peek listing REST Endpoints and Webhooks & Events folders with their article counts."
            caption="Source hierarchy and article counts stay visible before export, making scope an explicit decision rather than an all-or-nothing sync."
            priority
            sizes={SHOT_SIZES_WIDE}
          />
        </Wide>

        <div className="max-w-5xl mx-auto px-6">
          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl border-t border-slate-200 dark:border-slate-800 pt-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Role
              </dt>
              <dd className="mt-1.5 text-sm text-gray-700 dark:text-gray-300">
                Developer Support Engineer
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Stack
              </dt>
              <dd className="mt-1.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Next.js • TypeScript • Freshdesk • Confluence • Markdown •
                Vitest
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* The Problem */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            The Problem
          </h2>
          <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Support and internal documentation accumulate in SaaS platforms
              as proprietary HTML — hard to audit, version, migrate, or
              reuse outside the platform that generated it. Freshdesk and
              Confluence each hold that knowledge in a different shape, with
              no built-in path to a portable copy.
            </p>
            <p className="text-gray-900 dark:text-white font-semibold">
              The goal wasn&apos;t to replace either platform. It was a
              local, versionable copy of the knowledge inside them — one a
              rerun could trust, not just repeat.
            </p>
          </div>
        </div>
      </Section>

      {/* Two Sources, One Shared Pipeline */}
      <section className="py-14 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Two Sources, One Shared Pipeline
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Freshdesk and Confluence don&apos;t share a data model. There&apos;s
              no AI or LLM anywhere in this pipeline, either — every
              transformation is deterministic, so the same source content
              always produces the same Markdown output.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl">
            {sourceModels.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Wide className="mt-8">
          <Screenshot
            src={SHOTS.confluenceExplore.src}
            width={SHOTS.confluenceExplore.width}
            height={SHOTS.confluenceExplore.height}
            alt="Confluence Explore view of the Engineering space, showing a nested page tree with Webhook Delivery Service expanded into Retry Policy and Signing & Verification child pages, and the Signing & Verification page rendered on the right."
            caption="Explore mirrors Confluence's actual nested hierarchy — though today's export writes those pages flatter inside the space folder rather than preserving the full tree on disk."
            sizes={SHOT_SIZES_WIDE}
          />
        </Wide>
      </section>

      {/* Every Rerun Is a Diff, Not a Rewrite */}
      <Section padding="py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Every Rerun Is a Diff, Not a Rewrite
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Every export run re-fetches the selected source content from
            Freshdesk or Confluence — nothing about the fetch itself is
            incremental. Idempotency lives entirely in the write step: each
            converted document is content-hashed with SHA-256 and compared
            against what&apos;s already on disk, so unchanged output is
            skipped rather than rewritten, and only real content changes get
            written as a create or an update.
          </p>
        </div>

        <blockquote className="mt-8 max-w-3xl border-l-4 border-sky-500 dark:border-sky-400 bg-sky-50/60 dark:bg-sky-500/5 rounded-r-lg py-4 pl-6 pr-4">
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-sky-100 leading-snug">
            Hashing decides what changed. Nothing else does.
          </p>
        </blockquote>

        <p className="mt-6 max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed">
          The result is a per-run change report — created, updated, skipped,
          and failed counts, plus the exact list of touched paths — so a
          rerun is something you can audit, not just trust.
        </p>

        <div className="mt-8">
          <Screenshot
            src={SHOTS.results.src}
            width={SHOTS.results.width}
            height={SHOTS.results.height}
            alt="Export File Changes dialog showing 3 changed files (1 created, 2 updated), 42 skipped, and 0 failed, with the changed files listed by path and size."
            caption="SHA-256 comparison turns a rerun into an actual diff: unchanged files skip cleanly, and only real content changes show up as created or updated."
            sizes={SHOT_SIZES}
          />
        </div>
      </Section>

      {/* A Portable, Inspectable Corpus */}
      <section className="py-14 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              A Portable, Inspectable Corpus
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              The export doesn&apos;t stay trapped inside a pipeline or a
              source SaaS platform. Each run writes real files to a local
              export root — Markdown documents alongside a{" "}
              <code className="text-sm">SUMMARY.md</code> index and a{" "}
              <code className="text-sm">report.json</code> manifest — so the
              corpus is something you can open, grep, diff, or hand to
              another tool directly. Provenance for a given run lives in
              that manifest rather than scattered across individual file
              frontmatter, keeping the Markdown itself clean and portable.
            </p>
          </div>
        </div>
        <Wide className="mt-8">
          <Screenshot
            src={SHOTS.inventory.src}
            width={SHOTS.inventory.width}
            height={SHOTS.inventory.height}
            alt="Exports inventory for the freshdesk export root showing 12 folders, 47 files, 46 Markdown documents, and 51.5 KB total size, alongside a file tree and a rendered Markdown preview of 'Verifying Webhook Signatures.'"
            caption="The finished export is a browsable local Markdown corpus — structured files and rendered content stay inspectable long after the source API call is gone."
            sizes={SHOT_SIZES_WIDE}
          />
        </Wide>
        <div className="max-w-5xl mx-auto px-6">
          <p className="mt-8 max-w-3xl text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            A separate tool,{" "}
            <Link
              href="/projects/verbatim"
              className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
              Verbatim
            </Link>
            , can consume Markdown like this as retrievable source material
            — the two are complementary, not integrated: there&apos;s no
            shared database, live sync, or direct handoff between them
            today.
          </p>
        </div>
      </section>

      {/* Results */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Results
        </h2>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl">
          {results.map((result) => (
            <li
              key={result}
              className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <FaCheck
                className="mt-1 shrink-0 text-emerald-500 dark:text-emerald-400"
                aria-hidden="true"
              />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Technical Summary */}
      <Section padding="py-10">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Technical Summary
        </h2>
        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
          {technicalSummary.map((group) => (
            <div key={group.title}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {group.title}
              </dt>
              <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {group.items.join(" • ")}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* What I'd Build Next */}
      <Section padding="py-12">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What I&apos;d Build Next
        </h2>
        <div className="mt-4 flex flex-wrap gap-2 max-w-3xl">
          {nextDirections.map((direction) => (
            <span
              key={direction}
              className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {direction}
            </span>
          ))}
        </div>
      </Section>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <PageOutro />
      </div>
    </main>
  );
}
