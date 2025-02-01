import Link from "next/link";

const FinalCTA: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
        Let’s Work Together
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
        Interested in working together or have a question? Reach out and let’s
        talk!
      </p>
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Me
        </Link>
        <Link
          href="https://www.linkedin.com/in/daniel-sias"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-200 dark:bg-gray-800 dark:text-white text-gray-800 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition">
          Connect on LinkedIn
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
