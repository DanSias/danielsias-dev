const SEOAnalystExperience: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 text-gray-800">
      {/* Job Title & Company */}
      <h3 className="text-lg font-bold">Search Engine Optimization Analyst</h3>
      <p className="text-sm text-gray-600 flex justify-between">
        <span>Pearson Online Learning Services</span>
        <span>June 2013 – Sept 2015</span>
      </p>
      {/* Introduction Paragraph */}
      <p className="text-sm mt-4">
        Drove organic growth strategies, data-driven SEO analysis, and
        performance tracking to optimize digital marketing efforts for{" "}
        <strong>34 university programs</strong>. Focused on technical SEO,
        keyword strategy, content optimization, and automation tools to enhance
        search rankings and lead generation.
      </p>

      {/* Bulleted List with Proper Indentation */}
      <ul className="list-disc pl-5 text-sm space-y-2 mt-4">
        <li className="pl-2">
          Managed a <strong>$1.3MM SEO budget</strong>, leveraging advanced data
          analysis to improve content strategy and drive conversions across
          multiple programs.
        </li>
        <li className="pl-2">
          Developed real-time <strong>SEO performance dashboards</strong> using
          Tableau and Google Analytics API, streamlining reporting and improving
          decision-making.
        </li>
        <li className="pl-2">
          Automated keyword monitoring and site audits, integrating{" "}
          <strong>Ahrefs API</strong> to track rankings, backlinks, and site
          health.
        </li>
        <li className="pl-2">
          Optimized conversion funnels through <strong>A/B testing</strong>,
          on-page SEO enhancements, and technical audits, improving lead volume
          and engagement.
        </li>
        <li className="pl-2">
          Standardized reporting workflows, replacing complex spreadsheets with{" "}
          <strong>interactive data visualizations</strong> for actionable
          insights.
        </li>
      </ul>
    </section>
  );
};

export default SEOAnalystExperience;
