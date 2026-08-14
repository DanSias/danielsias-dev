import { FaChevronDown, FaChevronRight } from "react-icons/fa";

type Variant = "neutral" | "core" | "surface";

type Stage = {
  label: string;
  nodes: string[];
  variant: Variant;
};

const STAGES: Stage[] = [
  { label: "Sources", nodes: ["Jira", "GitLab", "Deployment Data"], variant: "neutral" },
  { label: "Normalization", nodes: ["Normalization"], variant: "neutral" },
  { label: "Intelligence Engine", nodes: ["Workflow Intelligence Engine"], variant: "core" },
  { label: "Intelligence Layers", nodes: ["Metrics", "Evidence", "AI Context"], variant: "neutral" },
  { label: "Experiences", nodes: ["Dashboards", "Drawers", "Evidence Explorer"], variant: "surface" },
];

const nodeClasses: Record<Variant, string> = {
  neutral:
    "bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  core: "font-bold border-2 bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-700",
  surface:
    "bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-900",
};

const stageLabelClasses =
  "text-[11px] xl:text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 whitespace-nowrap";

/**
 * Conceptual data-flow diagram standing in for a screenshot: shows the
 * dashboards as downstream expressions of one shared pipeline rather than
 * independent pages.
 *
 * Two layouts, not one reflowed at different sizes: a horizontal pipeline
 * from xl and up (where there's genuinely enough width to read left-to-right
 * without cramming), and the original vertical stack below that. This keeps
 * the architecture diagram's grammar ("system flow") visually distinct from
 * the Evidence Trail's vertical drill-down further down the page.
 */
const DataFlowDiagram: React.FC = () => {
  return (
    <>
      {/* Horizontal pipeline — xl and up */}
      <div className="hidden xl:flex items-center justify-center gap-2.5 2xl:gap-5" aria-hidden="false">
        {STAGES.map((stage, i) => (
          <div key={stage.label} className="contents">
            <div className="flex flex-col items-center gap-3">
              <span className={stageLabelClasses}>{stage.label}</span>
              <div className="flex flex-col justify-center gap-2">
                {stage.nodes.map((node) => (
                  <span
                    key={node}
                    className={`inline-flex items-center justify-center text-center rounded-lg border leading-snug ${
                      stage.variant === "core"
                        ? "px-5 py-6 text-sm 2xl:text-base min-w-[9rem]"
                        : "px-3.5 py-2.5 text-xs 2xl:text-sm min-w-[7.5rem]"
                    } ${nodeClasses[stage.variant]}`}>
                    {node}
                  </span>
                ))}
              </div>
            </div>
            {i < STAGES.length - 1 && (
              <div className="flex items-center shrink-0" aria-hidden="true">
                <span className="w-3 2xl:w-5 h-px bg-slate-300 dark:bg-slate-700" />
                <FaChevronRight className="-ml-px text-sm text-slate-400 dark:text-slate-600" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Vertical pipeline — below xl, including mobile */}
      <div className="flex xl:hidden flex-col items-center">
        {STAGES.map((stage, i) => (
          <div key={stage.label} className="flex flex-col items-center w-full">
            <div className="flex flex-wrap justify-center gap-4">
              {stage.nodes.map((node) => (
                <span
                  key={node}
                  className={`inline-flex items-center rounded-lg border ${
                    stage.variant === "core"
                      ? "px-8 py-5 text-lg sm:text-xl"
                      : "px-5 py-3.5 text-sm sm:text-base"
                  } ${nodeClasses[stage.variant]}`}>
                  {node}
                </span>
              ))}
            </div>
            {i < STAGES.length - 1 && (
              <div className="flex flex-col items-center" aria-hidden="true">
                <span className="w-px h-5 sm:h-7 bg-slate-300 dark:bg-slate-700" />
                <FaChevronDown className="text-lg text-slate-400 dark:text-slate-600" />
                <span className="w-px h-5 sm:h-7 bg-slate-300 dark:bg-slate-700" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default DataFlowDiagram;
