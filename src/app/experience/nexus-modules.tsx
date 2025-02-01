import React from "react";

const modules = [
  {
    category: "Marketing Performance",
    items: [
      {
        title: "Web Traffic & Cost Analysis",
        description:
          "Tracks cost-per-click (CPC) and traffic by source (Google, Facebook, LinkedIn, etc.), allowing marketing teams to optimize spend efficiency.",
      },
      {
        title: "Lead Funnel Progression",
        description:
          "Monitors the movement of leads from initial contact to enrollment, identifying conversion bottlenecks.",
      },
      {
        title: "Marketing Channel Effectiveness",
        description:
          "Compares the performance of different marketing channels (paid ads, email campaigns, organic traffic) to allocate budget effectively.",
      },
      {
        title: "Campaign Performance & Event Tracking",
        description:
          "Logs and visualizes changes to marketing assets (ad copy, landing pages, email offers) to assess their impact on lead generation.",
      },
      {
        title: "Predictive Lead Scoring",
        description:
          "Uses historical data and trends to estimate which leads have the highest likelihood of converting based on source, demographics, and engagement.",
      },
    ],
  },
  {
    category: "Recruitment & Sales",
    items: [
      {
        title: "Recruitment Agent Performance",
        description:
          "Tracks daily agent activities, including contact rates, call durations, and conversion rates for prospective students.",
      },
      {
        title: "Outbound Call & Engagement Analysis",
        description:
          "Integrates data from Nice InContact to evaluate how outreach efforts correlate with conversions.",
      },
      {
        title: "Enrollment & Student Onboarding Trends",
        description:
          "Monitors application rates, acceptance rates, and student engagement pre-enrollment to refine recruitment strategies.",
      },
    ],
  },
  {
    category: "Student Success & Retention",
    items: [
      {
        title: "Student Support & Retention Metrics",
        description:
          "Tracks degree progress, student engagement, and retention rates to identify at-risk students early.",
      },
      {
        title: "Graduation & Program Success Rates",
        description:
          "Analyzes completion rates by degree program, helping leadership make data-driven program adjustments.",
      },
    ],
  },
  {
    category: "Financial & Business Intelligence",
    items: [
      {
        title: "Revenue vs. Projected Revenue Dashboard",
        description:
          "Provides real-time financial insights by comparing actual revenue to projections.",
      },
      {
        title: "Marketing ROI & Budget Allocation Tool",
        description:
          "Helps leadership decide where to invest unspent budget late in the year and identifies underperforming marketing spend.",
      },
    ],
  },
];

const NexusModules: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Nexus Analytics Modules
      </h2>
      <div className="space-y-6">
        {modules.map((module, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {module.category}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {module.items.map((item, idx) => (
                <li key={idx} className="text-gray-700">
                  <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NexusModules;
