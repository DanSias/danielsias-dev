import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center">
      <h1 className="text-5xl sm:text-6xl font-bold text-primary tracking-tight">
        Daniel Sias
      </h1>
      <p className="mt-4 text-xl sm:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto">
        Full-Stack Software Engineer building developer tooling, payment
        platforms, and AI-assisted software.
      </p>

      {/* What I Build List */}
      <div className="mt-8 max-w-xl mx-auto">
        <ul className="space-y-3 text-base text-gray-700 dark:text-gray-300 text-left">
          <li className="flex gap-3">
            <span className="text-sky-500 dark:text-sky-400" aria-hidden>
              →
            </span>
            <span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Developer Tooling
              </span>{" "}
              : Internal software for engineering and support teams
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-500 dark:text-sky-400" aria-hidden>
              →
            </span>
            <span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Payment Systems
              </span>{" "}
              : Merchant integrations and API design
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-500 dark:text-sky-400" aria-hidden>
              →
            </span>
            <span>
              <span className="font-semibold text-gray-900 dark:text-white">
                AI-Assisted Development
              </span>{" "}
              : From prototype to production
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-sky-500 dark:text-sky-400" aria-hidden>
              →
            </span>
            <span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Workflow Automation
              </span>{" "}
              : Replacing manual, repetitive processes
            </span>
          </li>
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex justify-center gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
          View Projects
        </Link>
        <Link
          href="/resume"
          className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800">
          View Resume
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
