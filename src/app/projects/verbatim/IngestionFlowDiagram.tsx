import { FaChevronDown } from "react-icons/fa";

type Variant = "neutral" | "core" | "surface";

type Stage = {
  label: string;
  nodes: string[];
  variant: Variant;
  sub?: string;
};

const STAGES: Stage[] = [
  {
    label: "Sources",
    nodes: ["Next.js MDX Documentation", "Markdown Knowledge Base"],
    variant: "neutral",
  },
  { label: "Parse", nodes: ["Parse"], variant: "neutral" },
  {
    label: "Identity",
    nodes: ["Stable Document Identity"],
    variant: "neutral",
  },
  { label: "Change Detection", nodes: ["Content Hashing (SHA-256)"], variant: "neutral" },
  { label: "Chunking", nodes: ["H2-Aware Chunking"], variant: "neutral" },
  {
    label: "Output",
    nodes: ["Addressable Source Chunks"],
    variant: "core",
    sub: "route / anchor / source path",
  },
  { label: "Storage", nodes: ["PostgreSQL"], variant: "surface" },
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
 * Two heterogeneous source types collapse into one pipeline that ends in
 * addressable chunks (the emphasized node) — the artifact retrieval
 * actually points back to, not just a document.
 */
const IngestionFlowDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {STAGES.map((stage, i) => (
        <div key={stage.label} className="flex flex-col items-center w-full">
          <span className={stageLabelClasses}>{stage.label}</span>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {stage.nodes.map((node) => (
              <span
                key={node}
                className={`inline-flex flex-col items-center rounded-lg border text-center ${nodeClasses[stage.variant]}`}>
                {node}
                {stage.sub && (
                  <span className="mt-1 text-xs font-normal text-sky-700 dark:text-sky-300">
                    {stage.sub}
                  </span>
                )}
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

export default IngestionFlowDiagram;
