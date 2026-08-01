import { FaCreditCard, FaDiagramProject, FaWandMagicSparkles } from "react-icons/fa6";

const focusAreas = [
  {
    title: "Payment Platform Engineering",
    description:
      "Full-stack engineering on payment infrastructure at RocketGate: merchant integrations, transaction reconstruction tooling, and the internal software behind payment platform operations.",
    icon: FaCreditCard,
  },
  {
    title: "Developer Tooling & Workflow Visibility",
    description:
      "Leading Workflow Intelligence, a Laravel/Vue platform giving engineering teams visibility into work items, stage history, and delivery progress.",
    icon: FaDiagramProject,
  },
  {
    title: "AI-Assisted Development",
    description:
      "Using AI-assisted workflows to move faster from prototype to production, without cutting corners on code quality or maintainability.",
    icon: FaWandMagicSparkles,
  },
];

const AreasOfExpertise: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-heading">Areas of Expertise</h2>
      <p className="text-subhead">Current engineering focus at RocketGate.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {focusAreas.map((area) => (
          <div
            key={area.title}
            className="p-6 bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700">
            <area.icon className="text-2xl text-sky-500 dark:text-sky-400" />
            <h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {area.title}
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-base leading-relaxed">
              {area.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
        I&apos;m drawn to the behind-the-scenes software that makes everyone
        else&apos;s job easier.
      </p>
    </section>
  );
};

export default AreasOfExpertise;
