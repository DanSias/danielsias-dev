const NexusProject: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 text-gray-800">
      {/* Project Title */}
      <h3 className="text-lg font-bold">
        Nexus: Data-Driven Analytics & Reporting System
      </h3>

      {/* Introduction Paragraph */}
      <p className="text-sm mt-2">
        Led development of an <strong>enterprise analytics platform</strong>{" "}
        that automated KPI tracking across <strong>5 departments</strong>,
        reducing report generation time by <strong>70%</strong> and enabling{" "}
        <strong>$2M in marketing spend optimizations</strong> through ML-powered
        forecasting.
      </p>

      {/* Technologies Used */}
      <p className="text-sm text-gray-600 mt-2">
        <strong>Technologies:</strong> React.js • Node.js • BigQuery • Prisma •
        PostgreSQL • Salesforce API
      </p>

      {/* Key Achievements Section */}
      <h4 className="text-md font-semibold mt-4">Key Achievements:</h4>
      <ul className="list-disc pl-5 text-sm space-y-2 mt-2">
        <li className="pl-2">
          Automated data processing, reducing manual reporting by{" "}
          <strong>85%</strong> and enabling tracking of <strong>$25M+</strong>{" "}
          in marketing spend.
        </li>
        <li className="pl-2">
          Integrated <strong>Salesforce data</strong> into BigQuery to
          consolidate marketing lead and spend data into one interactive source.
        </li>
        <li className="pl-2">
          Built <strong>custom API endpoints</strong> for dynamic data
          retrieval, ensuring scalability and real-time decision-making.
        </li>
        <li className="pl-2">
          Replaced spreadsheet-based workflows, saving teams{" "}
          <strong>20+ hours per week</strong> spent in reporting and
          forecasting.
        </li>
      </ul>
    </section>
  );
};

export default NexusProject;
