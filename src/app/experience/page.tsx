import type { Metadata } from "next";
import Link from "next/link";
import RocketGate from "./RocketGate";
import Pearson from "./Pearson";
import LiquidGravity from "./LiquidGravity";
import PageOutro from "@/components/home/PageOutro";

const title = "Engineering Experience";
const description =
  "Case studies from each role: the systems I built, the technologies I used, and the impact they had.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/experience" },
  openGraph: { title, description, url: "/experience" },
  twitter: { title, description },
};

export default function ExperiencePage() {
  return (
    <main className="pt-32 px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-heading">Engineering Experience</h1>
        <p className="text-subhead">
          Case studies from each role: the systems I built, the technologies
          I used, and the impact they had.
        </p>

        <section id="rocketgate" className="pt-4 scroll-mt-24">
          <RocketGate />
        </section>

        <section id="pearson" className="py-12 border-t border-slate-200 dark:border-slate-800 scroll-mt-24">
          <Pearson />
        </section>

        <section id="liquid-gravity" className="py-12 border-t border-slate-200 dark:border-slate-800 scroll-mt-24">
          <LiquidGravity />
        </section>

        <p className="pt-12 max-w-2xl text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Daniel&apos;s earlier career also included substantial SEO, conversion optimization, and
          marketing-technology work.{" "}
          <Link
            href="/marketing"
            className="font-semibold text-blue-600 dark:text-sky-400 hover:underline">
            See the marketing &amp; analytics side of this experience →
          </Link>
        </p>

        <div className="mt-12 border-t border-slate-200 dark:border-slate-800">
          <PageOutro />
        </div>
      </div>
    </main>
  );
}
