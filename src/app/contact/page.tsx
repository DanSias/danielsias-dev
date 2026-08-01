import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contactInfo } from "@/constants/contact";

export default function ContactPage() {
  return (
    <main className="pt-32 px-6 pb-16">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-heading">Have a Problem Worth Solving?</h1>
        <p className="text-subhead">The kinds of conversations I enjoy most.</p>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Developer tooling, internal platforms, AI-assisted engineering,
          payment systems, workflow automation, and especially the operational
          problems that never quite make it to the top of anyone&apos;s roadmap.
        </p>

        <div className="mt-8">
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            <FaEnvelope />
            Email Me
          </a>
        </div>

        <div className="mt-4 flex justify-center gap-6">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-sky-400 transition">
            <FaGithub />
            GitHub
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-sky-400 transition">
            <FaLinkedin />
            LinkedIn
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400 dark:text-gray-500">
          Florida (Remote) · Eastern Time · Usually replies within a day or two
        </p>

        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-pretty">
            Most of what&apos;s on this site started with the same thought:{" "}
            <span className="font-medium text-gray-700 dark:text-gray-200">
              this should be easier.
            </span>{" "}
            <br />
            If you&apos;re working on something that feels harder than it
            should, <br />
            I&apos;d like to hear about it.
          </p>
        </div>
      </div>
    </main>
  );
}
