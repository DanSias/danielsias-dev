"use client";

import Link from "next/link";
import EmbeddedResume from "./Embed";

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
      <section className="max-w-3xl mx-auto p-6 text-sky-200">
        <div className="w-full flex justify-between items-center">
          {/* Left-aligned Text */}
          <h2 className="text-xl font-bold text-left mr-8">View My Resume</h2>

          {/* Right-aligned Button */}
          <Link
            href="/resume.pdf"
            download
            onClick={handleDownload}
            target="_blank"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all">
            📄 Download as PDF
          </Link>
        </div>
      </section>
      <EmbeddedResume />

      {/* Download Button */}
      {/* <div className="mt-6">
        <Link
          href="/resume.pdf"
          target="_blank"
          onClick={handleDownload}
          download="Daniel_Sias_Resume.pdf"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          📄 Download Resume (PDF)
        </Link>
      </div> */}
    </main>
  );
}
