const FullStackExperience: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 text-gray-800">
      <h3 className="text-lg font-bold">
        Data & Analytics Lead Developer / Data Analyst
      </h3>
      <p className="text-sm text-gray-600 flex justify-between mb-2">
        <span>Pearson Online Learning Services</span>
        <span>Sept 2015 – July 2024</span>
      </p>

      <p className="text-sm mb-4">
        Built scalable, data-driven applications and automation tools to support
        marketing, finance, and sales teams across a global education business.
        Focused on full-stack architecture, API integration, and real-time
        analytics systems that improved efficiency, enhanced visibility, and
        powered smarter campaign decisions.
      </p>

      <ul className="list-disc pl-5 text-sm space-y-2">
        <li className="pl-2">
          Built a <strong>React/Node analytics platform</strong> integrating
          BigQuery & Salesforce, reducing reporting time by <strong>85%</strong>{" "}
          and automating KPI tracking for <strong>$25M+</strong> in marketing
          and ad spend.
        </li>
        <li className="pl-2">
          Developed a <strong>spend forecasting system</strong> to replace
          spreadsheets, improving budget accuracy and pacing while saving teams{" "}
          <strong>20+ hours per month</strong>.
        </li>
        <li className="pl-2">
          Deployed <strong>API-driven integrations</strong> across Salesforce,
          BigQuery, and ad platforms (e.g. Google Ads, Meta) to enable real-time
          campaign tracking, attribution, and performance insights.
        </li>
        <li className="pl-2">
          Led development of an{" "}
          <strong>email marketing performance dashboard</strong> using Google
          Analytics API & Salesforce Marketing Cloud, improving A/B testing and
          engagement analysis.
        </li>
        <li className="pl-2">
          Built a <strong>PPC tracking link generator</strong> to standardize
          UTM parameters, ensure attribution accuracy, and improve campaign
          performance across paid media channels.
        </li>
        <li className="pl-2">
          Supported a{" "}
          <strong>Salesforce migration and data warehouse rebuild</strong>,
          transitioning legacy infrastructure to BigQuery with robust ETL
          pipelines and clean reporting layers.
        </li>
      </ul>
    </section>
  );
};

export default FullStackExperience;
