import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center pb-12">
      <h1 className="text-5xl sm:text-6xl font-bold text-primary tracking-tight">
        Daniel Sias
      </h1>
      <p className="mt-4 text-xl sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
        Engineering Scalable Solutions at the Intersection of AI, Data, and
        Modern Marketing
      </p>
      <p className="mt-32 text-lg text-gray-800 dark:text-gray-100 font-medium">
        Full-stack developer focused on analytics, automation, and
        performance-driven systems:
      </p>

      {/* What I Build List */}
      <div className="mt-4 max-w-xl mx-auto">
        <ul className="space-y-2 text-base text-gray-700 dark:text-gray-300 text-left">
          <li>
            • Dashboards for ad performance, budget pacing, and executive
            insight
          </li>
          <li>
            • Backend services that unify CRM, analytics, and ad platform data
          </li>
          <li>• Attribution systems and campaign tracking pipelines</li>
          <li>
            • Interfaces that simplify data for marketers, analysts, and
            leadership
          </li>
        </ul>
      </div>

      {/* CTA Buttons */}
      <div className="mt-12 flex justify-center gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
          View My Work
        </Link>
        <Link
          href="/resume"
          className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800">
          📄 View Resume
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
