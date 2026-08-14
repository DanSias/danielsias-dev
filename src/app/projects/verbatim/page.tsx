import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { FaChevronDown, FaCheck } from "react-icons/fa";
import PageOutro from "@/components/home/PageOutro";
import IngestionFlowDiagram from "./IngestionFlowDiagram";
import RetrievalFlowDiagram from "./RetrievalFlowDiagram";
import TrustFlowDiagram from "./TrustFlowDiagram";

const title = "Verbatim";
const description =
  "A documentation Q&A and support-assistance system that retrieves relevant internal knowledge, generates concise answers over that context, and structurally maps every citation back to the exact source section it came from.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/verbatim" },
  openGraph: { title, description, url: "/projects/verbatim" },
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

const identityDecisions = [
  {
    title: "Route-First Identity for Docs",
    body: "Documentation files often share generic filenames like page.mdx. Document identity is derived from the actual documentation route rather than the filename, so many identically named files don't collide.",
  },
  {
    title: "Path-First Identity for KB Content",
    body: "Knowledge-base articles don't have the same navigable-route model, so they use path-based identity instead.",
  },
  {
    title: "Stable Section Anchors",
    body: "Documentation chunks are split at H2 boundaries and assigned GitHub-style heading anchors, so retrieved knowledge resolves to an exact navigable section, not just a document.",
  },
  {
    title: "Incremental Re-Ingestion",
    body: "SHA-256 content hashes let unchanged documents skip chunk regeneration while changed content replaces only the relevant chunks. Ingestion runs synchronously — there's no background sync job.",
  },
];

const trustGuarantees = [
  {
    title: "Retrieval is deterministic",
    body: "The model does not retrieve content.",
  },
  {
    title: "Confidence is deterministic",
    body: "The model is never asked whether it's confident. Confidence is computed from retrieval signals — score strength and distribution — not model self-assessment.",
  },
  {
    title: "Citation resolution is deterministic",
    body: "The model may emit markers like [1] and [2], but Verbatim doesn't trust the model to identify the source. The application maps each marker back to the retrieved chunk at that index and builds the citation from that chunk's stored route, anchor, and source path. If the model produces no valid markers, the system still returns citations derived from the top retrieved chunks — the response is never citation-less.",
  },
];

const productSurfaces = [
  {
    title: "Documentation Q&A",
    body: "Question in, grounded answer with citations, confidence, and suggested navigation out.",
  },
  {
    title: "Support Reply Composer",
    body: "Uses the same document corpus to generate grounded customer-support reply drafts.",
  },
  {
    title: "Internal Pilot & Debugging Tools",
    body: "Ingest content, inspect documents and chunks, test retrieval, inspect answers, and monitor usage and cost.",
  },
];

const results = [
  "Built ingestion for MDX documentation and Markdown knowledge-base content.",
  "Created stable route/path-based document identities and section-addressable chunking.",
  "Implemented deterministic lexical retrieval and confidence scoring.",
  "Built structurally verified citation mapping back to retrieved source chunks.",
  "Implemented graceful non-LLM answer fallback.",
  "Added interchangeable OpenAI, Anthropic, and Gemini providers for answer synthesis.",
  "Built internal ingestion/retrieval/debugging interfaces.",
  "Built a grounded support-reply composer over the same knowledge corpus.",
  "Added per-query latency, token, provider, and cost observability.",
  "Added unit/integration coverage around chunking, scoring, confidence, and rate limiting.",
];

const technicalSummary: { title: string; items: string[] }[] = [
  { title: "Application", items: ["Next.js", "React", "TypeScript", "Tailwind"] },
  { title: "Data", items: ["PostgreSQL", "Prisma"] },
  {
    title: "Retrieval",
    items: [
      "Deterministic lexical scoring",
      "H2-aware chunking",
      "Stable anchors",
      "Content hashing",
    ],
  },
  { title: "AI", items: ["OpenAI", "Anthropic", "Gemini"] },
  {
    title: "Trust & Operations",
    items: [
      "Deterministic confidence",
      "Structural citations",
      "Auth.js",
      "Usage/cost observability",
    ],
  },
];

const nextDirections = [
  "Semantic/vector or hybrid retrieval",
  "Wire API-key verification into answer/widget endpoints",
  "Complete the live embedded widget integration",
  "Evaluate retrieval quality against a representative question set",
  "Freshdesk ticket submission behind an explicit review workflow",
  "Richer citation-to-answer validation",
];

export default function VerbatimPage() {
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
            Grounded answers with traceable sources
          </p>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl border-t border-slate-200 dark:border-slate-800 pt-6">
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
                Next.js • React • TypeScript • PostgreSQL • Prisma • Auth.js •
                Tailwind
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                AI &amp; Retrieval
              </dt>
              <dd className="mt-1.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                OpenAI • Anthropic • Gemini • Deterministic keyword retrieval
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
              Generic documentation assistants have two related failure
              modes: an answer can sound plausible even when the underlying
              documentation only weakly supports it, and a citation shown
              alongside that answer can still be something the model loosely
              associated with the response rather than the actual source it
              was grounded in.
            </p>
            <p className="text-gray-900 dark:text-white font-semibold">
              Verbatim was designed around a stronger constraint: an answer
              should be traceable to the exact source content used to
              produce it, and uncertainty should change the workflow rather
              than encourage the model to guess.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                High enough confidence
              </h3>
              <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-300">
                Answer with traceable citations
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Low confidence
              </h3>
              <p className="mt-1.5 text-sm text-gray-700 dark:text-gray-300">
                Structured support-ticket draft
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* From Documents to Addressable Knowledge */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            From Documents to Addressable Knowledge
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Verbatim ingests two kinds of source material: Next.js MDX
            documentation pages and Markdown knowledge-base articles. The
            interesting problem isn&apos;t file upload — it&apos;s turning
            heterogeneous source files into stable, addressable chunks that
            retrieval can point back to precisely.
          </p>
        </div>
        <div className="mt-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-12 overflow-x-auto">
          <IngestionFlowDiagram />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl">
          {identityDecisions.map((item) => (
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
        <p className="mt-8 max-w-3xl text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Verbatim deliberately consumes portable document formats rather
          than coupling retrieval directly to a specific SaaS knowledge
          platform. A separate tool,{" "}
          <Link
            href="/projects"
            className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
            Knowledge Exporter
          </Link>
          , can prepare Freshdesk and Confluence content as deterministic
          Markdown for downstream use — the two are complementary, not
          integrated: there&apos;s no shared database, live sync, or direct
          handoff between them today.
        </p>
        {/* Future screenshot: source/chunk inspector — document -> heading path -> anchor -> chunk content */}
      </Section>

      {/* Retrieval Before Generation */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Retrieval Before Generation
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Retrieval is completely deterministic — and it&apos;s
            keyword-based, on purpose. Query terms are tokenized,
            normalized, and expanded (plurals, synonyms), then scored
            against candidate chunks using term-frequency weighting,
            quoted-phrase matching, a proximity bonus, heading weighting,
            and square-root length normalization, scoped to the requesting
            workspace. The result is a ranked, top-K set of chunks — not a
            formal BM25 implementation, but a deliberate, inspectable
            weighted lexical scoring engine.
          </p>
        </div>
        <div className="mt-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-12 overflow-x-auto">
          <RetrievalFlowDiagram />
        </div>
        <blockquote className="mt-8 max-w-3xl border-l-4 border-sky-500 dark:border-sky-400 bg-sky-50/60 dark:bg-sky-500/5 rounded-r-lg py-4 pl-6 pr-4">
          <p className="text-lg sm:text-xl font-semibold text-slate-800 dark:text-sky-100 leading-snug">
            Retrieval stays inspectable: the system can show exactly which
            chunks ranked highest and why — not opaque model reasoning —
            became the context window.
          </p>
        </blockquote>
        {/* Future screenshot: /pilot/ask retrieval-debug view showing ranked chunks and scores */}
      </Section>

      {/* Trust Lives Outside the Model */}
      <Section padding="py-16 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Trust Lives Outside the Model
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Three guarantees hold regardless of which model is answering:
          </p>
          <div className="mt-6 space-y-4">
            {trustGuarantees.map((item) => (
              <div key={item.title}>
                <h3 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-12 overflow-x-auto">
          <TrustFlowDiagram />
        </div>

        <blockquote className="mt-8 max-w-3xl border-l-4 border-sky-500 dark:border-sky-400 bg-sky-50/60 dark:bg-sky-500/5 rounded-r-lg py-4 pl-6 pr-4">
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-sky-100 leading-snug">
            The model writes the prose. The application decides what counts
            as evidence.
          </p>
        </blockquote>

        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            When Confidence Is Low
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            Low confidence isn&apos;t an invitation for the model to
            improvise. Instead, it can route the outcome toward a
            structured support-ticket draft — title, summary, suggested
            next information, and citations — instead of an answer.
            Freshdesk submission is feature-flagged off, so the system
            stops at a draft rather than filing a ticket automatically.
          </p>
          <p className="mt-3 text-gray-900 dark:text-white font-semibold leading-relaxed">
            When the system doesn&apos;t have enough evidence to answer
            confidently, it changes the task from &ldquo;answer&rdquo; to
            &ldquo;help a human escalate.&rdquo;
          </p>
        </div>
        {/* Future screenshot: /pilot/answer — question, generated answer, [1][2] citations, source links, confidence */}
      </Section>

      {/* One Retrieval Core, Multiple Products */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            One Retrieval Core, Multiple Products
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            The retrieval and grounding layer isn&apos;t coupled to one
            chatbot UI. The same corpus and ranking logic support three
            different surfaces:
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <span className="inline-flex items-center px-8 py-5 text-lg sm:text-xl font-bold rounded-lg border-2 bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-700">
            Retrieval &amp; Grounding Layer
          </span>
          <div className="flex flex-col items-center py-3" aria-hidden="true">
            <span className="w-px h-5 bg-slate-300 dark:bg-slate-700" />
            <FaChevronDown className="text-lg text-slate-400 dark:text-slate-600" />
            <span className="w-px h-5 bg-slate-300 dark:bg-slate-700" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {productSurfaces.map((surface) => (
              <span
                key={surface.title}
                className="inline-flex items-center px-5 py-3.5 rounded-lg border text-sm sm:text-base bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-900">
                {surface.title}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-6 max-w-4xl">
          {productSurfaces.map((surface) => (
            <div key={surface.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {surface.title}
              </h3>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {surface.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-gray-500 dark:text-gray-400 italic">
          The embedded documentation widget is currently a UI mock, not a
          completed integration.
        </p>
        {/* Future screenshot: Reply Composer surface */}
      </Section>

      {/* Multi-Provider AI Without Moving the Trust Boundary */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Multi-Provider AI Without Moving the Trust Boundary
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            Answer synthesis runs through OpenAI, Anthropic, or Google
            Gemini behind a shared provider interface, selectable by
            request parameter or environment configuration. Changing the
            model doesn&apos;t change retrieval, ranking, confidence, or
            citation mapping — those guarantees live outside the provider
            implementation entirely.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["OpenAI", "Anthropic", "Gemini"].map((provider) => (
              <span
                key={provider}
                className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                {provider}
              </span>
            ))}
          </div>
          <p className="mt-6 text-gray-900 dark:text-white font-semibold leading-relaxed">
            Model providers are interchangeable; retrieval and evidence
            rules are not.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            LLM calls run under a timeout. If a call times out or fails,
            Verbatim can still return a deterministic response built
            directly from the highest-ranked source chunk, rather than
            failing the request outright.
          </p>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 italic">
            The support reply composer currently calls OpenAI directly
            rather than through the shared provider abstraction.
          </p>
        </div>
      </Section>

      {/* Operating Verbatim: Observability & Access */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Operating Verbatim: Observability &amp; Access
        </h2>

        <div className="mt-8 max-w-3xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Observability &amp; Cost
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            Every query can record provider, model, token usage, retrieval
            latency, LLM latency, estimated cost, citations, and a question
            hash or preview — full question logging is configurable rather
            than unconditional.
          </p>
          <p className="mt-3 text-gray-900 dark:text-white font-semibold leading-relaxed">
            Model quality is only one operational concern; latency, cost,
            retrieval behavior, and what gets logged all need to stay
            inspectable.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Access
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
            Internal pilot tooling is protected through Google OAuth (via
            Auth.js) with JWT sessions, gated by middleware behind an
            email/domain allowlist. In-memory rate limiting applies per IP
            and workspace.
          </p>
        </div>
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
        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
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
