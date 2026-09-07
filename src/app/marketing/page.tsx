import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { FaBullseye, FaChartLine, FaGraduationCap, FaLayerGroup } from "react-icons/fa";
import type { IconType } from "react-icons";
import PageOutro from "@/components/home/PageOutro";
import {
  nexusMetrics,
  forecastingMetrics,
  pearsonSeoRelaunchMetrics,
  bruteStrengthMetrics,
  rocketGateAdoptionMetrics,
} from "@/constants/marketingEvidence";

const title = "Marketing, Analytics & Digital Experience";
const description =
  "SEO, conversion optimization, marketing analytics, and marketing technology — and how that work led into analytics development and software engineering.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/marketing" },
  openGraph: { title, description, url: "/marketing" },
  twitter: { title, description },
};

// Chip styles reused from the rest of the site: emerald marks a verified
// outcome number, slate marks a skill/tool/technology — kept consistent
// with ExperienceCaseStudy and ProjectCard so the color coding means the
// same thing everywhere on the site.
function MetricChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
      {children}
    </span>
  );
}

function TagChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
      {children}
    </span>
  );
}

const proofPoints = [
  { metric: pearsonSeoRelaunchMetrics[0], source: "Pearson — Partner SEO & Conversion Relaunch" },
  { metric: pearsonSeoRelaunchMetrics[1], source: "Pearson — Partner SEO & Conversion Relaunch" },
  {
    metric: bruteStrengthMetrics[0],
    source: "Liquid Gravity / Tech Guys Who Get Marketing — Brute Strength Training engagement",
  },
  { metric: nexusMetrics[0], source: "Pearson — Nexus Analytics Platform" },
  { metric: rocketGateAdoptionMetrics[0], source: "RocketGate — Developer Enablement" },
  { metric: rocketGateAdoptionMetrics[1], source: "RocketGate — Developer Enablement" },
];

type ProofPoint = { label: string; href?: string };

function CapabilityTheme({
  icon: Icon,
  title: themeTitle,
  intro,
  evidence,
  proofPoints: points,
}: {
  icon: IconType;
  title: string;
  intro: ReactNode;
  evidence: string[];
  proofPoints: ProofPoint[];
}) {
  return (
    <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
      <Icon className="text-2xl text-sky-500 dark:text-sky-400" aria-hidden="true" />
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {themeTitle}
      </h3>
      <div className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed space-y-2">
        {intro}
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {evidence.map((item) => (
          <TagChip key={item}>{item}</TagChip>
        ))}
      </div>
      {points.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {points.map((point) => (
            <li key={point.label}>
              {point.href ? (
                <Link
                  href={point.href}
                  className="text-sm text-blue-600 dark:text-sky-400 font-semibold hover:underline">
                  {point.label}
                </Link>
              ) : (
                <span className="text-sm text-gray-600 dark:text-gray-300">{point.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function MarketingPage() {
  return (
    <main className="pt-32 px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-heading">{title}</h1>
        <p className="text-subhead">
          A decade-plus of digital marketing, SEO/SEM, conversion optimization, and marketing
          analytics, alongside full-stack development from the start — deepening over time into
          analytics platforms and software engineering.
        </p>
        <p className="max-w-2xl mx-auto -mt-8 mb-12 text-center text-gray-600 dark:text-gray-300 leading-relaxed">
          The same instincts still drive the software and AI-assisted systems I build today:
          understand the audience, measure what actually matters, and iterate against real data
          instead of assumptions.
        </p>

        {/* Proof / Outcomes */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proofPoints.map((point) => (
              <div
                key={point.metric}
                className="p-5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
                <p className="text-lg font-bold text-sky-700 dark:text-sky-400 leading-snug">
                  {point.metric}
                </p>
                <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">{point.source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Career Throughline */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            The Throughline
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              The throughline has stayed consistent even as the balance between marketing,
              analytics, and software changed: use technology, data, content, and experimentation
              to help an audience understand, engage with, convert on, or adopt something new.
              That started with hands-on marketing and marketing-technology work — building
              landing pages, checkout flows, and CRM integrations alongside conversion
              optimization and paid acquisition — then shifted toward SEO/SEM and marketing
              analytics, then into building the analytics platforms that replaced manual marketing
              reporting, and has continued deepening into full-stack software and AI-assisted
              systems.
            </p>
            <p>
              That background still shows up directly in the current software work. The RocketGate
              developer-enablement systems below exist to help a technical audience understand and
              adopt something new — the same underlying problem SEO and conversion work solve for
              an external audience, just aimed at a different one.
            </p>
          </div>
        </section>

        {/* Capability Themes */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Where This Shows Up
          </h2>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CapabilityTheme
              icon={FaBullseye}
              title="Acquire & Convert"
              intro={
                <p>
                  Getting the right audience to a page — SEO, SEM, and paid acquisition — and
                  improving what happens once they&apos;re there through conversion optimization
                  and continuous A/B testing.
                </p>
              }
              evidence={[
                "SEO",
                "SEM",
                "Paid Acquisition",
                "Content Strategy",
                "Keyword Targeting",
                "Technical SEO",
                "Landing Pages",
                "Conversion Optimization",
                "A/B Testing",
                "Ad Targeting",
              ]}
              proofPoints={[
                { label: "Pearson SEO & Conversion Relaunch ↓", href: "#pearson-seo-relaunch" },
                { label: "Brute Strength Paid Acquisition & CRO ↓", href: "#brute-strength" },
              ]}
            />

            <CapabilityTheme
              icon={FaChartLine}
              title="Measure & Optimize"
              intro={
                <>
                  <p>
                    Turning fragmented marketing and analytics data — spend, campaigns, SEO,
                    forecasting — into systems people actually check, not year-end exports.
                  </p>
                  <p>
                    This includes two separate systems worth telling apart: Nexus (unifying
                    BigQuery and Salesforce into live dashboards) and the Marketing Forecasting
                    Platform (replacing manual budget spreadsheets) — distinct tools, not one.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {nexusMetrics.map((m) => (
                      <MetricChip key={m}>{m}</MetricChip>
                    ))}
                    {forecastingMetrics.map((m) => (
                      <MetricChip key={m}>{m}</MetricChip>
                    ))}
                  </div>
                </>
              }
              evidence={[
                "Google Analytics",
                "Tableau",
                "Salesforce",
                "Marketing Analytics",
                "Campaign Reporting",
                "BigQuery",
              ]}
              proofPoints={[
                { label: "Nexus Analytics Platform →", href: "/experience#pearson" },
                { label: "Marketing Forecasting Platform →", href: "/experience#pearson" },
                { label: "SEO Performance Tracker →", href: "/projects" },
                { label: "Email Marketing Performance Tracker →", href: "/projects" },
              ]}
            />

            <CapabilityTheme
              icon={FaGraduationCap}
              title="Educate & Drive Adoption"
              intro={
                <>
                  <p>
                    Translating complex technical material into something a new audience can
                    actually use, and connecting that content to where people need it, when they
                    need it.
                  </p>
                  <p>
                    Verbatim, Knowledge Exporter, and RocketGate&apos;s developer documentation are
                    three separate systems that function together as one developer-enablement
                    ecosystem: centralized technical documentation, a searchable, RAG-grounded
                    knowledge base, and natural-language retrieval surfaced directly in the
                    support-ticket workflow.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {rocketGateAdoptionMetrics.map((m) => (
                      <MetricChip key={m}>{m}</MetricChip>
                    ))}
                  </div>
                </>
              }
              evidence={[
                "Technical Documentation",
                "SDK Integration Examples",
                "RAG Knowledge Retrieval",
                "Support Workflow Integration",
                "Stakeholder Communication",
                "Client Video Walkthroughs",
                "Video Editing",
              ]}
              proofPoints={[
                { label: "Verbatim →", href: "/projects/verbatim" },
                { label: "Knowledge Exporter →", href: "/projects/knowledge-exporter" },
                { label: "RocketGate Experience →", href: "/experience#rocketgate" },
              ]}
            />

            <CapabilityTheme
              icon={FaLayerGroup}
              title="Build the Experience"
              intro={
                <p>
                  The technical layer underneath the marketing strategy: implementing the pages,
                  integrating the systems, and shipping the checkout and automation flows a
                  campaign actually depends on.
                </p>
              }
              evidence={[
                "HTML/CSS",
                "CMS Integrations",
                "Salesforce Integrations",
                "CRM Integrations",
                "Marketing Automation",
                "Shopping Cart Integrations",
                "Checkout Flows",
                "One-Click Upsells",
                "Full-Stack Engineering",
                "AI-Assisted Systems",
              ]}
              proofPoints={[{ label: "Liquid Gravity Experience →", href: "/experience#liquid-gravity" }]}
            />
          </div>
        </section>

        {/* Rich Stories */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Two Stories in Depth
          </h2>

          <div className="mt-6 space-y-6">
            {/* Pearson SEO & Conversion Relaunch */}
            <div
              id="pearson-seo-relaunch"
              className="p-6 sm:p-8 rounded-lg border border-sky-200 dark:border-sky-900 bg-white dark:bg-slate-900 scroll-mt-24">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                Pearson Online Learning Services
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Partner Online Degree Program: SEO & Conversion Relaunch
              </h3>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Challenge
                  </h4>
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    A partner&apos;s online degree program page was underperforming in organic
                    visibility, with a conversion rate below 1%.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Approach
                  </h4>
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Led the SEO-focused relaunch in partnership with the client: content-structure
                    improvements, keyword targeting, technical SEO, and on-page conversion
                    elements.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Outcome
                  </h4>
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Organic traffic increased 40% over the six months following launch, and
                    conversion rate improved from under 1% to 2.5%.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Content Strategy", "Keyword Targeting", "Technical SEO", "Conversion Optimization"].map(
                  (tag) => (
                    <TagChip key={tag}>{tag}</TagChip>
                  )
                )}
              </div>

              <p className="mt-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Part of the broader SEO and analytics work at Pearson — see the{" "}
                <Link
                  href="/experience#pearson"
                  className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">
                  fuller Pearson experience →
                </Link>
              </p>
            </div>

            {/* Brute Strength Training */}
            <div
              id="brute-strength"
              className="p-6 sm:p-8 rounded-lg border border-sky-200 dark:border-sky-900 bg-white dark:bg-slate-900 scroll-mt-24">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                Liquid Gravity Engineering · Client Engagement via Tech Guys Who Get Marketing
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Brute Strength Training — Paid Acquisition & CRO
              </h3>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Challenge
                  </h4>
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Brute Strength Training&apos;s paid lead-generation program needed a lower cost
                    per lead.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Daniel&apos;s Contribution
                  </h4>
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    As part of the Tech Guys Who Get Marketing engagement, built and tested landing
                    and funnel pages, set up optimization experiments, coordinated copy and design
                    assets, refined ad targeting, and recorded client-facing performance
                    walkthroughs.
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Engagement Outcome
                  </h4>
                  <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    Over the course of the engagement, cost per lead fell from $1.21 to $0.45 — a
                    reduction of about 63%.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["A/B Testing", "Landing Pages", "Ad Targeting", "Video Walkthroughs"].map((tag) => (
                  <TagChip key={tag}>{tag}</TagChip>
                ))}
              </div>

              <p className="mt-5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Part of broader marketing-technology and CRO work at Liquid Gravity — see the{" "}
                <Link
                  href="/experience#liquid-gravity"
                  className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">
                  fuller Liquid Gravity experience →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800">
          <PageOutro />
        </div>
      </div>
    </main>
  );
}
