import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-32 px-6 pb-16">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-heading">Page Not Found</h1>
        <p className="text-subhead">
          That page doesn&apos;t exist, or it moved.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Try the homepage, or head straight to the engineering work.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
