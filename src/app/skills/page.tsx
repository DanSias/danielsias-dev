import { capabilities } from "@/constants/skills";
import CapabilityCard from "./CapabilityCard";
import PageOutro from "@/components/home/PageOutro";

export default function SkillsPage() {
  return (
    <main className="pt-32 px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-heading">Engineering Capabilities</h1>
        <p className="text-subhead">
          What I build with, where I&apos;ve applied it, and the kinds of
          problems it solves.
        </p>

        <p className="max-w-2xl mx-auto mb-10 text-center text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
          I&apos;m most interested in the systems that don&apos;t get
          noticed: internal tools, workflow automation, and the
          infrastructure that lets a team move faster without thinking about
          it.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.title} capability={capability} />
          ))}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800">
          <PageOutro />
        </div>
      </div>
    </main>
  );
}
