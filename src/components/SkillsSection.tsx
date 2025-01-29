"use client"; // Required for interactive components in Next.js

import { useState } from "react";
import { motion } from "framer-motion";

const skillsData = {
  Frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
    "React Query",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "NestJS",
    "Prisma",
    "Supabase",
    "PostgreSQL",
    "MongoDB",
  ],
  DevOps: ["Docker", "Vercel", "AWS", "CI/CD", "GitHub Actions"],
  Tools: ["Git", "Jest", "ESLint", "Prettier", "Figma", "Postman"],
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof skillsData>("Frontend");

  return (
    <section className="flex flex-col items-center justify-center py-10">
      <h2 className="text-4xl font-bold text-gray-900">Skills</h2>

      {/* Tab Buttons */}
      <div className="mt-6 flex gap-4">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category as keyof typeof skillsData)}
            className={`px-4 py-2 text-lg font-semibold rounded-lg transition ${
              activeTab === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}>
            {category}
          </button>
        ))}
      </div>

      {/* Skills Content with Framer Motion */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow-lg">
        {skillsData[activeTab].map((skill) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.1 }}
            className="p-3 bg-gray-100 text-gray-900 text-center font-medium rounded-lg shadow-sm">
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
