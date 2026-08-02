import type { Metadata } from "next";
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

        <section className="pt-4">
          <RocketGate />
        </section>

        <section className="py-12 border-t border-slate-200 dark:border-slate-800">
          <Pearson />
        </section>

        <section className="py-12 border-t border-slate-200 dark:border-slate-800">
          <LiquidGravity />
        </section>

        <div className="border-t border-slate-200 dark:border-slate-800">
          <PageOutro />
        </div>
      </div>
    </main>
  );
}
