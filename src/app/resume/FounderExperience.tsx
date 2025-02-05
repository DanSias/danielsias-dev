const FounderExperience: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto p-6 text-gray-800">
      {/* Job Title & Company */}
      <h3 className="text-lg font-bold">
        Founder & Full Stack Developer / Marketing Consultant
      </h3>
      <p className="text-sm text-gray-600">Liquid Gravity Engineering</p>

      {/* Introduction Paragraph */}
      <p className="text-sm mt-4">
        Founded and led a <strong>marketing technology firm</strong>, developing
        custom automation, CRM integrations, and conversion-optimized sales
        funnels for high-profile clients across diverse industries. Built
        scalable web applications, ecommerce solutions, and performance-tracking
        systems to enhance marketing efficiency and drive revenue growth.
      </p>

      {/* Bulleted List with Proper Indentation */}
      <ul className="list-disc pl-5 text-sm space-y-2 mt-4">
        <li className="pl-2">
          Engineered a <strong>one-click upsell system</strong>, dynamically
          generating personalized post-checkout offers to increase revenue,
          resulting in a <strong>37% boost in conversion rates</strong>.
        </li>
        <li className="pl-2">
          Developed <strong>CRM integrations</strong> with Salesforce,
          Infusionsoft, and 1ShoppingCart, automating lead tracking, follow-ups,
          and campaign performance analysis.
        </li>
        <li className="pl-2">
          Built and automated <strong>A/B testing frameworks</strong>,
          leveraging Google Analytics and Optimizely to refine conversion
          funnels and optimize marketing campaigns.
        </li>
        <li className="pl-2">
          Designed and deployed{" "}
          <strong>custom marketing automation workflows</strong>, improving
          email sequences, lead scoring, and retargeting strategies to enhance
          engagement and conversion rates.
        </li>
        <li className="pl-2">
          Implemented <strong>real-time performance dashboards</strong>,
          centralizing KPI tracking and marketing attribution for clients across
          multiple industries.
        </li>
        <li className="pl-2">
          Consulted on <strong>strategic marketing initiatives</strong>,
          optimizing website speed, mobile experiences, and user engagement
          strategies to improve lead generation by <strong>201.2%</strong>{" "}
          without increasing ad spend.
        </li>
      </ul>
    </section>
  );
};

export default FounderExperience;
