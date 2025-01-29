import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { contactInfo } from "@/constants/contact";

export default function ContactButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {/* Email Button */}
      <a
        href={`mailto:${contactInfo.email}`}
        className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-red-700 transition">
        <FaEnvelope size={24} />
        <span>Email Me</span>
      </a>

      {/* GitHub Button */}
      <a
        href={contactInfo.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-gray-800 transition">
        <FaGithub size={24} />
        <span>GitHub</span>
      </a>

      {/* LinkedIn Button */}
      <a
        href={contactInfo.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
        <FaLinkedin size={24} />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}
