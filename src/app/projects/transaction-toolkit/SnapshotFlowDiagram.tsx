import { FaChevronDown } from "react-icons/fa";

type Variant = "neutral" | "core" | "surface";

type Stage = {
  label: string;
  nodes: string[];
  variant: Variant;
};

const STAGES: Stage[] = [
  { label: "Source", nodes: ["Transaction History API"], variant: "neutral" },
  {
    label: "Normalization",
    nodes: ["Paginated XML Fetch", "Field Normalization"],
    variant: "neutral",
  },
  { label: "Snapshot", nodes: ["Immutable Snapshot (SQLite)"], variant: "core" },
  {
    label: "Analysis",
    nodes: [
      "Declines",
      "3DS / Auth",
      "Retries",
      "Customers",
      "Concentration",
      "Signals",
    ],
    variant: "neutral",
  },
  { label: "Output", nodes: ["Structured Reports"], variant: "surface" },
];

const nodeClasses: Record<Variant, string> = {
  neutral:
    "px-5 py-3.5 text-sm sm:text-base bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  core: "px-8 py-5 text-lg sm:text-xl font-bold border-2 bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-700",
  surface:
    "px-5 py-3.5 text-sm sm:text-base bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-900",
};

const stageLabelClasses =
  "text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400";

/**
 * Snapshot Once, Analyze Many Ways: the source API is fetched and normalized
 * once into an immutable local snapshot (the emphasized node — it's the
 * stable boundary every analysis module reads from), which then supports
 * several independent analysis modules over the same data.
 */
const SnapshotFlowDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {STAGES.map((stage, i) => (
        <div key={stage.label} className="flex flex-col items-center w-full">
          <span className={stageLabelClasses}>{stage.label}</span>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {stage.nodes.map((node) => (
              <span
                key={node}
                className={`inline-flex items-center rounded-lg border ${nodeClasses[stage.variant]}`}>
                {node}
              </span>
            ))}
          </div>
          {i < STAGES.length - 1 && (
            <div className="flex flex-col items-center py-3" aria-hidden="true">
              <span className="w-px h-5 bg-slate-300 dark:bg-slate-700" />
              <FaChevronDown className="text-lg text-slate-400 dark:text-slate-600" />
              <span className="w-px h-5 bg-slate-300 dark:bg-slate-700" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SnapshotFlowDiagram;
