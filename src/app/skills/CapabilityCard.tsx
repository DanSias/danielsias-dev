import Link from "next/link";
import { Capability } from "@/constants/skills";

const CapabilityCard: React.FC<{ capability: Capability }> = ({ capability }) => {
  const Icon = capability.icon;

  return (
    <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
          <Icon className="text-sky-500 dark:text-sky-300 text-base" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {capability.title}
        </h3>
      </div>

      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {capability.whatIBuild}
      </p>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Applied In
          </h4>
          <ul className="mt-1.5 space-y-1">
            {capability.appliedIn.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-blue-600 dark:text-sky-400 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Solves
          </h4>
          <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {capability.solves}
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {capability.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CapabilityCard;
