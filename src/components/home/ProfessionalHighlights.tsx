const ProfessionalHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Advanced Analytics Platform",
      description:
        "Led development of a custom analytics dashboard using React and Node.js, transforming marketing and ad reporting workflows. Reduced reporting time from days to hours while tracking over $25M in campaign spend and performance metrics.",
    },
    {
      title: "Marketing Budget Forecasting",
      description:
        "Replaced complex spreadsheets with a dynamic budgeting and pacing system for marketing and paid media teams. Saved nearly three working days per month and improved forecast accuracy across departments.",
    },
    {
      title: "Ad & Marketing Automation",
      description:
        "Integrated Salesforce, BigQuery, and ad platforms into a unified data pipeline, enabling real-time performance tracking, campaign attribution, and automated reporting. Improved visibility across teams and reduced reliance on fragmented spreadsheets.",
    },
    {
      title: "Campaign Performance Tracker",
      description:
        "Built an interactive dashboard that helped marketing teams monitor campaign outcomes, refine A/B tests, and improve ROAS. The tool became central to running more efficient paid media campaigns.",
    },
    {
      title: "Full-Stack System Architecture",
      description:
        "Designed scalable web applications with React, Node.js, and PostgreSQL, emphasizing speed, reliability, and extensibility for high-volume data, analytics workloads, and real-time reporting use cases.",
    },
    {
      title: "Executive Leadership Dashboard",
      description:
        "Delivered a high-level analytics interface for executives to track marketing, ad, and operational KPIs. Empowered faster strategic decisions with real-time trend analysis and department-level insights.",
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
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white leading-snug">
              {highlight.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
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
