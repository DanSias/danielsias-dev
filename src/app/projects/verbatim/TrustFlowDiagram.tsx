import { FaChevronDown } from "react-icons/fa";

const nodeBase = "inline-flex flex-col items-center rounded-lg border text-center";
const neutral =
  "px-5 py-3.5 text-sm sm:text-base bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
const deterministic =
  "px-5 py-3.5 text-sm sm:text-base font-semibold border-2 bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-900";
const outcome =
  "px-6 py-4 text-sm sm:text-base font-bold border-2 bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-700";

const Connector = ({ small = false }: { small?: boolean }) => (
  <div className="flex flex-col items-center py-2" aria-hidden="true">
    <span className={`w-px ${small ? "h-3" : "h-5"} bg-slate-300 dark:bg-slate-700`} />
    <FaChevronDown className="text-base text-slate-400 dark:text-slate-600" />
    <span className={`w-px ${small ? "h-3" : "h-5"} bg-slate-300 dark:bg-slate-700`} />
  </div>
);

/**
 * The thesis diagram: a deterministic backbone (emerald) runs alongside the
 * model's contribution (gray), and the one place they meet — citation
 * resolution — is deterministic too. Both branches converge on two
 * equally legitimate, deterministically-chosen outcomes.
 */
const TrustFlowDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <span className={`${nodeBase} ${neutral}`}>Question</span>
      <Connector />
      <span className={`${nodeBase} ${deterministic}`}>Deterministic Retrieval</span>
      <Connector />
      <span className={`${nodeBase} ${neutral}`}>Ranked Source Chunks</span>
      <Connector />

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center items-start">
        <div className="flex flex-col items-center">
          <span className={`${nodeBase} ${deterministic}`}>
            Deterministic Confidence
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className={`${nodeBase} ${neutral}`}>LLM Synthesis</span>
          <Connector small />
          <span className={`${nodeBase} ${neutral}`}>
            Answer with <span className="font-mono">[N]</span> markers
          </span>
          <Connector small />
          <span className={`${nodeBase} ${deterministic}`}>
            Structural Citation Resolution
          </span>
        </div>
      </div>

      <Connector />

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <span className={`${nodeBase} ${outcome}`}>
          Answer + Verified Citations
        </span>
        <span className={`${nodeBase} ${outcome}`}>Support-Ticket Draft</span>
      </div>
    </div>
  );
};

export default TrustFlowDiagram;
