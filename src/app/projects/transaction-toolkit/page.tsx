import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import PageOutro from "@/components/home/PageOutro";
import SnapshotFlowDiagram from "./SnapshotFlowDiagram";
import DeterminismForkDiagram from "./DeterminismForkDiagram";

const title = "Transaction Toolkit";
const description =
  "A local-first analytics and diagnostics tool that snapshots payment transaction history into a normalized local dataset, then supports repeated analysis across declines, authentication, retries, customer behavior, concentration, and operational signals.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/transaction-toolkit" },
  openGraph: { title, description, url: "/projects/transaction-toolkit" },
  twitter: { title, description },
};

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

const analysisAreas = [
  "Declines",
  "3DS & Authentication",
  "Retries",
  "Customers",
  "Concentration",
  "Signals",
];

const aiDoes = [
  "Explains already-computed metrics for three report types: Investigation Overview, Decline Investigation, and 3DS Performance.",
  "Reads from a pre-aggregated, typed payload — the same one the deterministic report uses.",
];

const aiNeverDoes = [
  "Query the database or choose which records to inspect",
  "Retrieve documents or access raw transaction rows",
  "Calculate metrics or select the report schema",
  "See customer IDs, invoice IDs, or cardholder data",
];

const results = [
  "Built an end-to-end snapshot ingestion pipeline around a payment transaction-history API.",
  "Normalized heterogeneous API responses into a shared analytical model.",
  "Created reusable analysis modules for declines, authentication, retries, customers, concentration, and operational signals.",
  "Implemented three structured investigation report types.",
  "Designed optional AI reporting around pre-aggregated, PII-excluding typed payloads.",
  "Preserved deterministic report generation regardless of AI availability.",
  "Added versioned report lineage and encrypted local credential storage.",
];

const technicalSummary: { title: string; items: string[] }[] = [
  { title: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind", "Recharts"] },
  { title: "Backend", items: ["Node.js", "Express", "TypeScript", "SQLite"] },
  {
    title: "Integration",
    items: ["Transaction History API", "XML normalization (fast-xml-parser)", "OpenAI"],
  },
  {
    title: "Architecture",
    items: [
      "Immutable snapshots",
      "Shared query layer",
      "Typed report contracts",
      "Deterministic + optional AI reporting",
      "Encrypted local vault (Node crypto)",
    ],
  },
];

export default function TransactionToolkitPage() {
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
            Turning live transaction history into a repeatable investigation
            workflow
          </p>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl border-t border-slate-200 dark:border-slate-800 pt-6">
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
                TypeScript • React • Express • SQLite • Tailwind • Recharts •
                OpenAI
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
              The Transaction History API supports live queries, and that&apos;s
              exactly what it&apos;s built for. But support and operations
              investigation often means slicing the same time window from
              several different angles — by decline reason, processor, card
              type, retry behavior, 3DS outcome, customer behavior,
              concentration — one after another, against a system designed
              for point-in-time lookups rather than repeated analytical
              passes.
            </p>
            <p className="text-gray-900 dark:text-white font-semibold">
              The problem wasn&apos;t fetching transactions. It was: how do you
              turn a live API response into a stable investigation workspace
              that can be examined repeatedly without continually
              re-querying the source system?
            </p>
          </div>
        </div>
      </Section>

      {/* Snapshot Once, Analyze Many Ways */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Snapshot Once, Analyze Many Ways
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Large date ranges are fetched in 30-day windows and parsed from
            XML, then normalized into a stable internal transaction model
            before anything is persisted. That normalized data lands in
            SQLite as an immutable snapshot — one merchant, one date range,
            frozen in place. Every analysis module reads from that same
            snapshot instead of interpreting raw API responses on its own.
          </p>
        </div>
        <div className="mt-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-12 overflow-x-auto">
          <SnapshotFlowDiagram />
        </div>
        {/* Future screenshot: snapshot/build progress */}
      </Section>

      {/* Designing for Investigation */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Designing for Investigation
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            The application isn&apos;t a static report generator. One
            normalized snapshot supports several independent questions, each
            backed by its own analysis module reading through a shared query
            layer rather than the raw API — with signal ranking designed to
            surface what&apos;s actually material rather than dump every
            available metric.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {analysisAreas.map((area) => (
              <span
                key={area}
                className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {area}
              </span>
            ))}
          </div>
          <blockquote className="mt-8 border-l-4 border-sky-500 dark:border-sky-400 bg-sky-50/60 dark:bg-sky-500/5 rounded-r-lg py-4 pl-6 pr-4">
            <p className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-sky-100 leading-snug">
              The value of the snapshot is not persistence alone — it
              creates a stable analytical boundary that every investigation
              module can share.
            </p>
          </blockquote>
        </div>
        {/* Future screenshot: Concentration or Signals analysis view */}
      </Section>

      {/* AI Without Giving Up Determinism */}
      <Section padding="py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            AI Without Giving Up Determinism
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            For the reports that support it, the deterministic report is
            computed every time — regardless of whether AI is enabled,
            available, or succeeds. The LLM was never the fallback
            architecture; it&apos;s an optional layer on top of a report
            generator that always runs on its own.
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-12">
          <DeterminismForkDiagram />
        </div>

        <blockquote className="mt-8 max-w-3xl border-l-4 border-sky-500 dark:border-sky-400 bg-sky-50/60 dark:bg-sky-500/5 rounded-r-lg py-4 pl-6 pr-4">
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-sky-100 leading-snug">
            AI explains a computed result. It does not decide what the
            result is.
          </p>
        </blockquote>

        <p className="mt-6 max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Both paths — the deterministic report and the optional LLM
          explanation — consume the same pre-computed, typed metrics
          payload, so anything the model explains is grounded in the same
          numbers the deterministic report already produced. The payload
          contract structurally excludes raw transaction rows: no customer
          IDs, no invoice IDs, no cardholder data reach the model at all.
          OpenAI is the only implemented provider.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              What AI Does
            </h3>
            <ul className="mt-3 space-y-2.5">
              {aiDoes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="text-sky-500 dark:text-sky-400 mt-0.5 shrink-0" aria-hidden="true">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              What AI Never Does
            </h3>
            <ul className="mt-3 space-y-2.5">
              {aiNeverDoes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <span className="text-slate-400 dark:text-slate-600 mt-0.5 shrink-0" aria-hidden="true">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Future screenshot: report detail with deterministic/LLM status and version info */}
      </Section>

      {/* Traceable Reports & Local-First Security */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Traceable Reports &amp; Local-First Security
        </h2>

        <div className="mt-8 max-w-3xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Traceable Reports
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            Every generated report stores enough metadata to reconstruct how
            it was produced: payload version, prompt version, generated-by
            mode (<code className="text-sm">llm</code> or{" "}
            <code className="text-sm">deterministic</code>), LLM status, an
            explicit reason when the LLM was skipped or failed, the complete
            aggregate payload, the complete prompt, and the generated
            markdown itself.
          </p>
          <p className="mt-3 text-gray-900 dark:text-white font-semibold leading-relaxed">
            Versioned payload and prompt contracts preserve the context
            behind historical reports even as report logic evolves.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Local-First Security
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            The application is intentionally local and single-operator, not
            multi-tenant SaaS. Gateway passwords and the OpenAI API key are
            encrypted at rest with AES-256-GCM, using a random IV per
            encryption and a scrypt-derived key. The encryption key exists
            only in process memory while the vault is unlocked, and is
            explicitly zeroed before being discarded when it locks —
            there&apos;s no persistent login or session system, so restarting
            the app returns it to a locked state.
          </p>
          <p className="mt-3 text-gray-900 dark:text-white font-semibold leading-relaxed">
            The security model matches the product boundary: sensitive
            credentials remain local, encrypted at rest, and unavailable
            once the vault is locked.
          </p>
        </div>
        {/* Future screenshot: vault/settings state */}
      </Section>

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

      <div className="border-t border-slate-200 dark:border-slate-800">
        <PageOutro />
      </div>
    </main>
  );
}
