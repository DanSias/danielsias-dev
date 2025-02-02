"use client";

import Link from "next/link";

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "Daniel_Sias_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 pt-24">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-sky-100">
        My Resume
      </h1>
      <p className="text-lg text-gray-600 dark:text-sky-200 text-center mt-2">
        View or download my resume below.
      </p>

      {/* Download Button */}
      <div className="mt-6">
        <Link
          href="/resume.pdf"
          target="_blank"
          onClick={handleDownload}
          download="Daniel_Sias_Resume.pdf"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          📄 Download Resume (PDF)
        </Link>
      </div>

      {/* PDF Embed in an iFrame */}
      <div className="mt-6 w-full max-w-5xl h-[1300px] border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="/resume.pdf#view=Fit"
          className="w-full h-full"
          title="Resume PDF"
        />
      </div>
    </main>
  );
}
