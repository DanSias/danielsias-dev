import Link from "next/link";

const MarketingCallout: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 px-6 py-6 sm:px-8 sm:py-8 text-center">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
          Marketing &amp; Analytics Background
        </span>
        <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
          My background spans digital marketing, SEO/SEM, conversion optimization, marketing
          analytics, and marketing technology — alongside full-stack development from the start.
          That experience still shapes how I approach products, audiences, measurement, and
          adoption today.
        </p>
        <Link
          href="/marketing"
          className="mt-4 inline-flex items-center gap-1.5 text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          Explore Marketing &amp; Analytics →
        </Link>
      </div>
    </section>
  );
};

export default MarketingCallout;
