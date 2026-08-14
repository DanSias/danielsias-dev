import { FaChevronDown } from "react-icons/fa";

type Variant = "neutral" | "core";

type Stage = {
  label: string;
  nodes: string[];
  variant: Variant;
};

const STAGES: Stage[] = [
  { label: "Query", nodes: ["Question"], variant: "neutral" },
  {
    label: "Preprocessing",
    nodes: ["Tokenize / Normalize / Expand"],
    variant: "neutral",
  },
  {
    label: "Scoring",
    nodes: ["Score Candidate Chunks"],
    variant: "neutral",
  },
  {
    label: "Weighting",
    nodes: ["Phrase + Proximity + Heading Weighting"],
    variant: "neutral",
  },
  { label: "Ranking", nodes: ["Ranked Context"], variant: "core" },
  { label: "Selection", nodes: ["Top-K Chunks"], variant: "core" },
];

const nodeClasses: Record<Variant, string> = {
  neutral:
    "px-5 py-3.5 text-sm sm:text-base bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
  core: "px-6 py-4 text-base sm:text-lg font-bold border-2 bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-700",
};

const stageLabelClasses =
  "text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400";

/**
 * Deterministic, inspectable lexical retrieval: every stage is a rule, not
 * a model call, ending in a ranked, explainable top-K selection.
 */
const RetrievalFlowDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {STAGES.map((stage, i) => (
        <div key={stage.label} className="flex flex-col items-center w-full">
          <span className={stageLabelClasses}>{stage.label}</span>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {stage.nodes.map((node) => (
              <span
                key={node}
                className={`inline-flex items-center rounded-lg border text-center ${nodeClasses[stage.variant]}`}>
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

export default RetrievalFlowDiagram;
