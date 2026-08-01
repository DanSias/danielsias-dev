import Link from "next/link";
import {
  FaBriefcase,
  FaCode,
  FaLayerGroup,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { contactInfo } from "@/constants/contact";
import ResumePreview from "./ResumePreview";
import PageOutro from "@/components/home/PageOutro";

const currentFocus = [
  "Developer Tooling",
  "Payment Platforms",
  "Internal Systems",
  "AI-Assisted Development",
];

const exploreLinks = [
  {
    label: "Engineering Experience",
    description: "Where I've built software",
    href: "/experience",
    icon: FaBriefcase,
  },
  {
    label: "Engineering Projects",
    description: "How I solve engineering problems",
    href: "/projects",
    icon: FaCode,
  },
  {
    label: "Engineering Capabilities",
    description: "What I bring to an engineering team",
    href: "/skills",
    icon: FaLayerGroup,
  },
  {
    label: "Engineering Foundations",
    description: "How my background shaped this path",
    href: "/education",
    icon: FaGraduationCap,
  },
  {
    label: "GitHub",
    description: "Code, repos, and commits",
    href: contactInfo.github,
    icon: FaGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    description: "Connect professionally",
    href: contactInfo.linkedin,
    icon: FaLinkedin,
    external: true,
  },
];

export default function ResumePage() {
  return (
    <main className="pt-32 px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-heading">Resume</h1>
        <p className="text-subhead">
          The PDF below is always the current version: everything else here
          just helps you explore faster.
        </p>

        <div className="max-w-2xl mx-auto text-center pb-10">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Full-Stack Software Engineer building developer tooling, payment
            platforms, and AI-assisted software, currently at RocketGate.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {currentFocus.map((item) => (
              <span
                key={item}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-6">
          <a
            href="/resume.pdf"
            download="Daniel_Sias_Resume.pdf"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Download PDF
          </a>
        </div>

        <ResumePreview />

        <div className="mt-16 pb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Explore the Work
          </h2>
          <p className="mt-1.5 text-center text-gray-500 dark:text-gray-400">
            The engineering stories behind this resume.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exploreLinks.map((item) => {
              const Icon = item.icon;
              const linkProps = item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  {...linkProps}
                  className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 hover:border-sky-300 dark:hover:border-sky-800 transition">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                    <Icon className="text-sky-500 dark:text-sky-300 text-base" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800">
          <PageOutro />
        </div>
      </div>
    </main>
  );
}
