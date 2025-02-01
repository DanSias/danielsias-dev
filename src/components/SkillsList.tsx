import {
  FaCode,
  FaServer,
  FaProjectDiagram,
  FaDatabase,
  FaChartLine,
  FaCogs,
  FaShoppingCart,
  FaSearch,
  FaUserCheck,
  FaPenNib,
} from "react-icons/fa";

const skills = [
  {
    title: "Front-End Development",
    description:
      "Building dynamic, interactive, and responsive user interfaces with React, Next.js, and modern JavaScript frameworks. Focused on optimizing performance, accessibility, and user experience.",
    icon: FaCode,
  },
  {
    title: "Back-End Development & API Architecture",
    description:
      "Building scalable APIs, microservices, and server-side applications with Node.js, PHP, and cloud-based infrastructure. Optimizing data processing and backend performance.",
    icon: FaServer,
  },
  {
    title: "Technology Architecting",
    description:
      "Building scalable, automated, and flexible technology solutions that enhance business efficiency, streamline operations, and improve long-term profitability. Experience with CRM integrations, analytics platforms, and custom development solutions.",
    icon: FaProjectDiagram,
  },
  {
    title: "CRM and Business Intelligence",
    description:
      "Expertise in implementing and optimizing CRM systems like Salesforce, Infusionsoft, and custom solutions. Experience in developing data-driven business intelligence tools that improve visibility and decision-making.",
    icon: FaDatabase,
  },
  {
    title: "Performance Marketing & Data Analytics",
    description:
      "Expertise in tracking marketing attribution, analyzing key performance indicators (KPIs), and refining strategies based on actionable insights. Experience with Google Analytics, Tableau, and custom BI dashboards.",
    icon: FaChartLine,
  },
  {
    title: "Marketing Funnels & Automation",
    description:
      "Designing, implementing, and optimizing high-converting marketing funnels. Leveraging automation tools to improve lead nurturing, email marketing workflows, and sales processes.",
    icon: FaCogs,
  },
  {
    title: "Campaign Optimization & Performance Tracking",
    description:
      "Using A/B testing, analytics, and conversion rate optimization (CRO) strategies to continuously improve marketing performance. Focused on data-driven decision-making to maximize ROI.",
    icon: FaChartLine,
  },
  {
    title: "Ecommerce & Conversion Strategies",
    description:
      "Integrating and optimizing ecommerce platforms like Shopify, Kajabi, and custom-built solutions. Expertise in optimizing checkout flows, upsell systems, and customer retention strategies.",
    icon: FaShoppingCart,
  },
  {
    title: "SEO & Organic Growth",
    description:
      "Developing and executing data-driven SEO strategies, including on-site optimization, technical SEO audits, and content-driven ranking improvements to increase organic visibility.",
    icon: FaSearch,
  },
  {
    title: "Customer Journeys & Experience Mapping",
    description:
      "Creating seamless, engaging customer journeys from acquisition to post-sale. Identifying pain points and opportunities to improve retention, engagement, and lifetime customer value.",
    icon: FaUserCheck,
  },
  {
    title: "Conversion-Focused Copywriting",
    description:
      "Crafting persuasive, high-converting messaging for landing pages, email campaigns, and sales funnels. Expertise in direct response marketing and audience engagement strategies.",
    icon: FaPenNib,
  },
];
const SkillsSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
        Skills
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="p-4 border dark:border-sky-900 rounded-lg shadow-sm">
            {/* Title (Above) */}
            <h3 className="text-lg font-semibold mb-2 text-center text-slate-700 dark:text-slate-200">
              {skill.title}
            </h3>

            {/* Icon & Description Row */}
            <div className="flex items-center space-x-4">
              <skill.icon className="text-sky-500 dark:text-sky-200 text-9xl" />
              <p className="text-gray-700 dark:text-sky-50">
                {skill.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
