import { ReactNode } from "react";

// Shared shape for both `systems` (things built) and `initiatives` (marketing/
// analytics work led). Keeping one shape avoids duplicating this markup per
// case study, while the two props + labels keep "built" vs "led" distinct.
type WorkItem = { title: string; description: string; metrics?: string[] };

type Props = {
  company: string;
  role: ReactNode;
  dates: string;
  badge?: string;
  summary?: string;
  systems?: WorkItem[];
  /** Heading shown above `systems`, e.g. "Systems & Platforms Built". */
  systemsLabel?: string;
  initiatives?: WorkItem[];
  /** Heading shown above `initiatives`, e.g. "Marketing Initiatives Led". */
  initiativesLabel?: string;
  impact?: string[];
  technologies: string[];
  size: "lg" | "md" | "sm";
  children?: ReactNode;
};

const headingSize: Record<Props["size"], string> = {
  lg: "text-3xl",
  md: "text-2xl",
  sm: "text-xl",
};

function WorkItemGroup({ label, items }: { label?: string; items: WorkItem[] }) {
  return (
    <div className="mt-6 space-y-4">
      {label && (
        <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
          {label}
        </h3>
      )}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="pl-4 border-l-2 border-slate-300 dark:border-slate-700">
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {item.description}
            </p>
            {item.metrics && item.metrics.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    {metric}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const ExperienceCaseStudy: React.FC<Props> = ({
  company,
  role,
  dates,
  badge,
  summary,
  systems,
  systemsLabel,
  initiatives,
  initiativesLabel,
  impact,
  technologies,
  size,
  children,
}) => {
  return (
    <div>
      <h2
        className={`${headingSize[size]} font-bold tracking-tight text-gray-900 dark:text-white`}>
        {company}
      </h2>
      <p className="mt-0.5 text-gray-500 dark:text-gray-400">{role}</p>
      <div className="mt-1.5 flex items-center gap-2">
        {badge && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300">
            {badge}
          </span>
        )}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {dates}
        </span>
      </div>

      {summary && (
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          {summary}
        </p>
      )}

      {systems && systems.length > 0 && (
        <WorkItemGroup label={systemsLabel} items={systems} />
      )}

      {initiatives && initiatives.length > 0 && (
        <WorkItemGroup label={initiativesLabel} items={initiatives} />
      )}

      {children}

      {impact && impact.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {impact.map((item) => (
            <span
              key={item}
              className="inline-flex items-center px-4 py-1.5 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {technologies.map((tech) => (
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

export default ExperienceCaseStudy;
