const ProfessionalHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Advanced Analytics Platform",
      description:
        "Led the development of a custom analytics dashboard that transformed our marketing reporting process. Using React and Node.js, we slashed reporting time from days to hours while tracking over $25M in marketing investments.",
    },
    {
      title: "Marketing Forecasting Automation",
      description:
        "Tackled our team's biggest pain point by replacing clunky spreadsheets with a streamlined budgeting system. This gave marketing teams back nearly three working days each month, previously lost to manual data entry.",
    },
    {
      title: "API-Driven Automation",
      description:
        "Connected our core business platforms - Salesforce, BigQuery, and various ad services - to create a single source of truth for marketing data. This enabled our team to monitor performance in real-time and generate reports automatically.",
    },
    {
      title: "Marketing Performance Tracker",
      description:
        "Built an intuitive dashboard that helped our marketing team make data-driven decisions. This tool became central to improving campaign performance and running more effective A/B tests.",
    },
    {
      title: "Full-Stack System Architecture",
      description:
        "Designed and built scalable applications from the ground up, combining React frontends with Node.js backends and PostgreSQL databases. Each project focused on making our systems faster and more reliable.",
    },
    {
      title: "Executive Leadership Dashboard",
      description:
        "Created a comprehensive view of business performance that became our executives' go-to resource for tracking department metrics, analyzing trends, and making strategic decisions.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-primary">
        Professional Highlights
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-2">
        Key achievements showcasing impact, efficiency, and technical expertise.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-slate-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {highlight.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {highlight.description}
            </p>
          </div>
        ))}
      </div>

      {/* Link to full experience page */}
      <div className="mt-8 text-center">
        <a
          href="/experience"
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          View Full Experience →
        </a>
      </div>
    </section>
  );
};

export default ProfessionalHighlights;
