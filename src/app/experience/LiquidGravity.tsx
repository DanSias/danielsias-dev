import ExperienceCaseStudy from "./ExperienceCaseStudy";

const impact = [
  "37% increase in post-purchase conversion",
  "201.2% growth in lead generation, no added ad spend",
];

const technologies = ["PHP", "JavaScript", "Ecommerce Systems", "CRM Integrations", "A/B Testing"];

const LiquidGravity: React.FC = () => {
  return (
    <ExperienceCaseStudy
      company="Liquid Gravity Engineering"
      role="Founder & Full-Stack Developer / Marketing Consultant"
      dates="July 2005 – June 2013"
      summary="Founded and led a marketing technology consultancy, building custom ecommerce features, CRM integrations, and automation systems for clients across multiple industries."
      impact={impact}
      technologies={technologies}
      size="sm"
    />
  );
};

export default LiquidGravity;
