import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  FaSitemap,
  FaRegChartBar,
  FaFlask,
  FaCogs,
  FaCheck,
} from "react-icons/fa";
import PageOutro from "@/components/home/PageOutro";
import HeroRotation from "./HeroRotation";
import Screenshot from "./Screenshot";
import DataFlowDiagram from "./DataFlowDiagram";
import EvidenceTrail from "./EvidenceTrail";

const title = "Workflow Intelligence";
const description =
  "A workflow analytics platform that transforms Jira and GitLab activity into actionable engineering insights through deterministic metrics, evidence-driven dashboards, and AI-assisted analysis.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/workflow-intelligence" },
  openGraph: { title, description, url: "/projects/workflow-intelligence" },
  twitter: { title, description },
};

const SHOT_DIR = "/images/screenshots/workflow-intelligence";

const SHOTS = {
  pulseOverview: { src: `${SHOT_DIR}/pulse-overview.png`, width: 1512, height: 630 },
  deliveryHealth: { src: `${SHOT_DIR}/delivery-health.png`, width: 1512, height: 1293 },
  deliveryHealthEvidence: {
    src: `${SHOT_DIR}/delivery-health-evidence.png`,
    width: 1512,
    height: 790,
  },
  workItemDrawer: { src: `${SHOT_DIR}/work-item-drawer.png`, width: 1512, height: 790 },
  mergeRequestDrawer: {
    src: `${SHOT_DIR}/merge-request-drawer.png`,
    width: 1512,
    height: 790,
  },
  releaseEvidence: { src: `${SHOT_DIR}/release-evidence.png`, width: 1512, height: 790 },
  teamHealth: { src: `${SHOT_DIR}/team-health.png`, width: 1512, height: 450 },
  deploymentReview: {
    src: `${SHOT_DIR}/deployment-review.png`,
    width: 1512,
    height: 1894,
  },
} as const;

// Two content widths: a comfortable reading measure for prose-driven
// sections, and a wider breakout for the screenshots/diagrams that should
// carry more visual authority than a paragraph of text needs.
const WIDE = "max-w-[1400px] mx-auto px-6";

function Section({
  children,
  className = "",
  padding = "py-16",
}: {
  children: ReactNode;
  className?: string;
  padding?: string;
}) {
  return (
    <section className={`${padding} border-t border-slate-200 dark:border-slate-800 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

function Wide({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`${WIDE} ${className}`}>{children}</div>;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
      {children}
    </span>
  );
}

const determinismPrinciples = [
  "Deterministic metrics: every number is computed the same way, every time. No AI-generated scores in the calculation path.",
  "The same evidence queries that back the drawers also power the dashboards, so an aggregate and its detail can never quietly drift apart.",
  "Canonical workflow and status definitions, shared across Jira and GitLab data instead of redefined per screen.",
  "One shared taxonomy and one source of truth: dashboards, drawers, and AI summaries all read from the same underlying computation.",
];

const engineeringChallenges = [
  {
    icon: FaSitemap,
    title: "Unified Evidence Navigation",
    description:
      "Designed a shared drawer architecture allowing users to move between Work Items, Merge Requests, and Releases without losing context.",
  },
  {
    icon: FaRegChartBar,
    title: "Evidence-first Analytics",
    description:
      "Every KPI links directly to the underlying work responsible for the metric, not just a number on a card.",
  },
  {
    icon: FaFlask,
    title: "Demo Mode",
    description:
      "Built a fully isolated demonstration environment with deterministic synthetic engineering data for portfolio screenshots, while preserving production behavior.",
  },
  {
    icon: FaCogs,
    title: "Shared Metric Engine",
    description:
      "Centralized workflow calculations power dashboards, AI summaries, and evidence dialogs from the same underlying computation pipeline.",
  },
];

const technicalHighlights: { title: string; items: string[] }[] = [
  {
    title: "Backend",
    items: ["Laravel", "MySQL", "Query optimization", "Metrics engine", "Evidence APIs"],
  },
  {
    title: "Frontend",
    items: ["Vue", "TypeScript", "Inertia", "Headless UI / Reka UI", "Tailwind"],
  },
  {
    title: "Architecture",
    items: [
      "Shared query services",
      "Deterministic analytics",
      "AI abstraction layer",
      "Unified drawer system",
    ],
  },
];

const results = [
  "Unified Jira and GitLab operational data into a single workflow model.",
  "Built multiple evidence-driven operational dashboards on top of it.",
  "Created reusable analytics services that power every dashboard from the same source.",
  "Developed cross-linked evidence navigation between engineering entities.",
  "Implemented a deterministic demo mode for portfolio and product demonstrations.",
  "Designed a scalable foundation for future workflow intelligence features.",
];

const nextDirections = [
  "Predictive bottleneck detection",
  "Trend forecasting",
  "Proactive notifications",
  "Organization-level benchmarks",
  "Release simulations",
  "Historical comparisons",
];

export default function WorkflowIntelligencePage() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16">
        <div className="max-w-6xl mx-auto px-6">
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
            Building an operational intelligence platform for software delivery
          </p>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        <Wide className="mt-10">
          <HeroRotation />
        </Wide>

        <div className="max-w-6xl mx-auto px-6">
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
                Responsibilities
              </dt>
              <dd className="mt-1.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Product Design • UX • Architecture • Backend • Frontend • Analytics
                • AI Integration
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Stack
              </dt>
              <dd className="mt-1.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Laravel • Vue • TypeScript • MySQL • Tailwind • Inertia • OpenAI
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* The Challenge */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            The Challenge
          </h2>
          <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              The problem was never a lack of dashboards. Engineering
              organizations already generate enormous amounts of delivery
              data — Jira status transitions, GitLab review activity,
              deployment events, code review history — and most reporting
              simply restates what happened. It doesn&apos;t say what to look
              at right now.
            </p>
            <p>
              That data also tends to live in places that don&apos;t talk to
              each other: workflow state in Jira, review activity in GitLab,
              deployment information somewhere else entirely. Getting a real
              picture of delivery health meant manually cross-referencing all
              of it, every time, for every question.
            </p>
            <p className="text-gray-900 dark:text-white font-semibold">
              The challenge became building a system that turns raw
              engineering events into operational intelligence — a shared
              model that can answer specific operational questions and prove
              its answers, rather than another chart to interpret.
            </p>
          </div>
        </div>
      </Section>

      {/* From Data to Decisions */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              From Data to Decisions
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              Every dashboard is a downstream view of the same pipeline. Jira,
              GitLab, and deployment activity are normalized into one
              workflow model; the engine computes metrics and assembles
              evidence from it; every surface — dashboard, drawer, or
              evidence explorer — reads from that shared result instead of
              running its own logic.
            </p>
          </div>
        </div>
        <Wide className="mt-8">
          <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-16 overflow-x-auto">
            <DataFlowDiagram />
          </div>
        </Wide>
      </section>

      {/* Designing Around Questions */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Designing Around Questions
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Screens aren&apos;t organized by feature. Each one exists to
            answer a specific operational question, and it stays traceable
            back to the same underlying data.
          </p>

          {/* What should leadership know right now? */}
          <div className="mt-12">
            <Eyebrow>Operational Question</Eyebrow>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              What should leadership know right now?
            </h3>
            <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Pulse is an executive briefing layer, not another dashboard to
              check. Three briefing cards summarize delivery health, team
              health, and deployment review, each surfaced only when there is
              a signal worth reviewing, with a direct link into the
              supporting evidence instead of a wall of metrics to sift
              through.
            </p>
          </div>
        </div>
        <Wide className="mt-6">
          <Screenshot
            src={SHOTS.pulseOverview.src}
            width={SHOTS.pulseOverview.width}
            height={SHOTS.pulseOverview.height}
            alt="Pulse Overview showing three briefing cards for Delivery Health, Team Health, and Deployment Review, each with review-suggested signals, plus an Epic Focus table below."
            caption="Pulse surfaces only the highest-value operational questions and links directly into the supporting evidence."
          />
        </Wide>

        <div className="max-w-6xl mx-auto px-6">
          {/* Why is delivery slowing down? */}
          <div className="mt-20">
            <Eyebrow>Operational Question</Eyebrow>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Why is delivery slowing down?
            </h3>
            <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Delivery Health isn&apos;t a metrics wall either. Stage Health
              shows queue-aging risk by workflow stage, Flow Distribution
              shows where work currently sits, and queue aging buckets show
              how long it&apos;s been sitting there. Together they turn
              &ldquo;delivery feels slow&rdquo; into a specific stage, with a
              specific age distribution, worth investigating.
            </p>
          </div>
        </div>
        <Wide className="mt-6">
          <Screenshot
            src={SHOTS.deliveryHealth.src}
            width={SHOTS.deliveryHealth.width}
            height={SHOTS.deliveryHealth.height}
            alt="Delivery Health dashboard with current WIP, stagnant tickets, backflow rate, and median cycle time KPIs, a Flow Distribution bar, and a Stage Health table showing queue-aging risk by stage."
          />
        </Wide>
      </section>

      {/* Show Me the Evidence */}
      <section className="py-16 sm:py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Show Me the Evidence
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed">
            A queue-aging number on Delivery Health isn&apos;t the end of the
            story — it&apos;s the start of one. Clicking into a stage opens
            the exact work items behind it, and from there the investigation
            keeps going: work item, to merge request, to release.
          </p>
          <blockquote className="mt-6 border-l-4 border-sky-500 dark:border-sky-400 bg-sky-50/60 dark:bg-sky-500/5 rounded-r-lg py-4 pl-6 pr-4 max-w-2xl">
            <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-sky-100 leading-snug">
              Every aggregate metric can be traced directly back to the work
              items responsible for it.
            </p>
          </blockquote>
        </div>

        <Wide className="mt-12">
          <EvidenceTrail
            steps={[
              {
                label: "Evidence Dialog",
                description:
                  "Clicking a stage total opens the exact work items behind it — the moment an aggregate becomes a specific, inspectable list.",
                src: SHOTS.deliveryHealthEvidence.src,
                width: SHOTS.deliveryHealthEvidence.width,
                height: SHOTS.deliveryHealthEvidence.height,
                alt: "Evidence dialog listing the nine work items currently in Code Review, opened from the Delivery Health stage table.",
              },
              {
                label: "Work Item",
                description:
                  "Opening a row surfaces the ticket's full context: workflow metadata, assignee, stage history, and its related evidence.",
                src: SHOTS.workItemDrawer.src,
                width: SHOTS.workItemDrawer.width,
                height: SHOTS.workItemDrawer.height,
                alt: "Work Item drawer for PAY-221, showing related evidence links to its Jira work item, merge request, and release.",
              },
              {
                label: "Merge Request",
                description:
                  "The same Related Evidence link follows the ticket into its code — implementation and review, not just a status label.",
                src: SHOTS.mergeRequestDrawer.src,
                width: SHOTS.mergeRequestDrawer.width,
                height: SHOTS.mergeRequestDrawer.height,
                alt: "Merge Request drawer for !1433, showing branches, approvals, pipeline status, and the same related-evidence links.",
              },
              {
                label: "Release",
                description:
                  "And from there into the release it shipped in, alongside every other work item that went out with it.",
                src: SHOTS.releaseEvidence.src,
                width: SHOTS.releaseEvidence.width,
                height: SHOTS.releaseEvidence.height,
                alt: "Release drawer for RELEASE-4821, listing the five work items included in the release and their current status.",
              },
            ]}
          />
        </Wide>
      </section>

      {/* Cross-linked Evidence */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cross-linked Evidence
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed">
            The Work Item and Merge Request drawers share one layout and one
            Related Evidence section, so moving between a ticket and its code
            is a click, not a context switch. Both link to the same Jira
            work item, merge request, and release — navigating relationships
            in the engineering graph instead of bouncing between
            disconnected pages.
          </p>
        </div>
        <Wide className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Screenshot
              src={SHOTS.workItemDrawer.src}
              width={SHOTS.workItemDrawer.width}
              height={SHOTS.workItemDrawer.height}
              alt="Work Item drawer for PAY-221, showing related evidence, workflow metadata, assignee, and stage history."
              caption="Work item — related evidence, workflow metadata, and stage history in one panel."
              sizes="(min-width: 1024px) 680px, 100vw"
            />
            <Screenshot
              src={SHOTS.mergeRequestDrawer.src}
              width={SHOTS.mergeRequestDrawer.width}
              height={SHOTS.mergeRequestDrawer.height}
              alt="Merge Request drawer for !1433, opened from the same related-evidence link, showing branches, approvals, and pipeline status."
              caption="Merge request — opened from the same related-evidence link, same drawer shell."
              sizes="(min-width: 1024px) 680px, 100vw"
            />
          </div>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl font-semibold text-slate-800 dark:text-sky-100 leading-snug">
            Rather than opening disconnected pages, users move through the
            engineering graph without losing context.
          </p>
        </Wide>
      </section>

      {/* Who Needs Help? */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <Eyebrow>Operational Question</Eyebrow>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Who needs help?
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Team Health surfaces workload and review-bottleneck signals —
            idle tickets, large WIP, MRs waiting on review — as things worth
            a conversation, not a ranking. The goal is understanding where a
            developer is constrained, not scoring them against each other.
          </p>
        </div>
        <Wide className="mt-6">
          <Screenshot
            src={SHOTS.teamHealth.src}
            width={SHOTS.teamHealth.width}
            height={SHOTS.teamHealth.height}
            alt="Team Health view listing developers with their current Jira item and merge request counts, and attention signals like idle tickets or large WIP."
          />
        </Wide>
      </section>

      {/* Is This Release Safe? */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <Eyebrow>Operational Question</Eyebrow>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Is this release safe?
          </h2>
          <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Deployment Review answers the question a release manager
            actually asks before shipping: what&apos;s blocked, what&apos;s
            at risk, and why. It combines release readiness, merge request
            quality, and deployment queue aging with an AI-generated
            operational summary — interpretation layered on top of
            deterministic evidence, not a replacement for it.
          </p>
        </div>
        <Wide className="mt-6">
          <Screenshot
            src={SHOTS.deploymentReview.src}
            width={SHOTS.deploymentReview.width}
            height={SHOTS.deploymentReview.height}
            alt="Deployment Review showing a 'Proceed with caution' readiness banner, a deployment review queue, release readiness counts, a deployment aging heatmap, and blocked deployments with their evidence."
          />
        </Wide>
      </section>

      {/* Building Trust Through Determinism */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Building Trust Through Determinism
        </h2>
        <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300 leading-relaxed">
          AI shows up throughout the platform, but never as the source of a
          number. The metrics are computed once, deterministically, and
          reused everywhere they appear.
        </p>
        <blockquote className="mt-8 border-l-4 border-sky-500 dark:border-sky-400 bg-sky-50/60 dark:bg-sky-500/5 rounded-r-lg py-4 pl-6 pr-4 max-w-2xl">
          <p className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-sky-100 leading-snug">
            AI explains the data. It never invents the data.
          </p>
        </blockquote>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl">
          {determinismPrinciples.map((principle) => (
            <li
              key={principle}
              className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="text-sky-500 dark:text-sky-400 mt-0.5" aria-hidden="true">
                →
              </span>
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Interesting Engineering Challenges */}
      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Interesting Engineering Challenges
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {engineeringChallenges.map((challenge) => (
            <div
              key={challenge.title}
              className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <challenge.icon
                className="text-2xl text-sky-500 dark:text-sky-400"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {challenge.title}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Technical Highlights — a compact reference strip, not another
          card section: the stack was already introduced in the hero. */}
      <Section padding="py-10">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          Technical Highlights
        </h2>
        <dl className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4">
          {technicalHighlights.map((group) => (
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

      {/* Results */}
      <Section padding="py-12">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Results
        </h2>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl">
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

      {/* What I'd Build Next — a short closing note, not another content
          section. */}
      <Section padding="py-12">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          What I&apos;d Build Next
        </h2>
        <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          The current system answers today&apos;s operational questions well.
          The natural next step is answering tomorrow&apos;s:
        </p>
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
