import React from "react";

const SEOAnalyticsProject: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 text-gray-800">
      {/* Project Title */}
      <h3 className="text-lg font-bold">
        SEO Analytics & Competitive Insights Dashboard
      </h3>

      {/* Introduction Paragraph */}
      <p className="text-sm mt-2">
        Developed a <strong>custom dashboard</strong> to track keyword rankings,
        competitor insights, and backlink health, providing real-time{" "}
        <strong>SEO performance metrics</strong> to enhance search visibility
        and drive organic growth strategies.
      </p>

      {/* Technologies Used */}
      <p className="text-sm text-gray-600 mt-2">
        <strong>Technologies:</strong> Node.js • React.js • Ahrefs API •
        PostgreSQL • Express.js
      </p>

      {/* Key Achievements Section */}
      <h4 className="text-md font-semibold mt-4">Key Achievements:</h4>
      <ul className="list-disc pl-5 text-sm space-y-2 mt-2">
        <li className="pl-2">
          Integrated <strong>Ahrefs API</strong> to automate SEO tracking,
          eliminating the need for manual rank monitoring.
        </li>
        <li className="pl-2">
          Developed a <strong>real-time reporting dashboard</strong>,
          visualizing keyword trends, backlink health, and competitor data.
        </li>
        <li className="pl-2">
          Enabled marketing teams to refine SEO strategies, leading to{" "}
          <strong>data-driven content optimization</strong> and better rankings.
        </li>
        <li className="pl-2">
          Replaced manual spreadsheets with <strong>automated insights</strong>,
          saving hours per week in SEO reporting.
        </li>
      </ul>
    </section>
  );
};

export default SEOAnalyticsProject;
