const FullStackExperience: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 text-gray-800">
      {/* Job Title & Company */}
      <h3 className="text-lg font-bold">
        Data & Analytics Lead Developer / Data Analyst
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Pearson Online Learning Services
      </p>

      {/* Introduction Paragraph */}
      <p className="text-sm mb-4">
        Developed data-driven applications, automation tools, and real-time
        analytics dashboards to optimize marketing performance, finance
        forecasting, and sales operations. Focused on scalable full-stack
        development, API integrations, and workflow automation to enhance
        efficiency.
      </p>

      {/* Bulleted List with Proper Indentation */}
      <ul className="list-disc pl-5 text-sm space-y-2">
        <li className="pl-2">
          Built a <strong>React/Node analytics platform</strong> integrating
          BigQuery & Salesforce, cutting report generation time by{" "}
          <strong>85%</strong> and automating KPI tracking for{" "}
          <strong>$25M+</strong> in marketing spend.
        </li>
        <li className="pl-2">
          Developed a <strong>marketing spend forecasting system</strong>,
          replacing manual spreadsheets with a centralized web-based platform,
          saving teams <strong>20+ hours per month</strong> and improving budget
          accuracy.
        </li>
        <li className="pl-2">
          Designed and deployed <strong>API-driven automation</strong> to
          connect Salesforce, BigQuery, and ad platforms, enabling real-time
          marketing performance tracking.
        </li>
        <li className="pl-2">
          Led the creation of an{" "}
          <strong>email marketing performance tracker</strong>, integrating
          Google Analytics API & Salesforce Marketing Cloud to improve
          engagement and A/B testing efficiency.
        </li>
        <li className="pl-2">
          Built a <strong>PPC tracking link generator</strong>, standardizing
          URL parameters to ensure accurate attribution, minimize tracking
          errors, and improve campaign performance across multiple advertising
          platforms.
        </li>
        <li className="pl-2">
          Collaborated on the{" "}
          <strong>Salesforce migration and data warehouse setup</strong>,
          transitioning legacy systems to BigQuery & cloud-based reporting while
          ensuring data integrity.
        </li>
      </ul>
    </section>
  );
};

export default FullStackExperience;
