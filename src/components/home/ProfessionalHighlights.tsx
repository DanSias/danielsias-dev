const ProfessionalHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Advanced Analytics Platform",
      description:
        "Built a React/Node.js analytics dashboard that cut reporting time by 85% and automated KPI tracking for $25M+ in marketing spend.",
    },
    {
      title: "Marketing Forecasting Automation",
      description:
        "Developed a budgeting & forecasting system that replaced spreadsheets, saving teams 20+ hours per week in manual workflows.",
    },
    {
      title: "API-Driven Automation",
      description:
        "Integrated Salesforce, BigQuery, and ad platforms, enabling real-time marketing performance tracking and automated reporting.",
    },
    {
      title: "Marketing Performance Tracker",
      description:
        "Created an analytics dashboard to track campaign performance, improving engagement and refining A/B testing strategies.",
    },
    {
      title: "Full-Stack System Architecture",
      description:
        "Engineered scalable applications using React, Node.js, PostgreSQL, and cloud infrastructure, optimizing system efficiency.",
    },
    {
      title: "Executive Leadership Dashboard",
      description:
        "Developed a high-level dashboard providing executives with insights into departmental performance, forecasting trends, and key business metrics.",
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
