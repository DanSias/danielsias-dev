import { FaChevronDown } from "react-icons/fa";

const nodeBase = "inline-flex flex-col items-center rounded-lg border text-center";
const coreClasses =
  "px-6 py-4 text-base sm:text-lg font-bold border-2 bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-700";
const alwaysClasses =
  "px-6 py-4 text-sm sm:text-base font-semibold border-2 bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-900";
const optionalClasses =
  "px-6 py-4 text-sm sm:text-base bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";

const Connector = () => (
  <div className="flex flex-col items-center py-2" aria-hidden="true">
    <span className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
    <FaChevronDown className="text-base text-slate-400 dark:text-slate-600" />
    <span className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
  </div>
);

/**
 * The deterministic report always runs from the same computed payload,
 * whether or not the optional LLM explanation is enabled or succeeds.
 * Side-by-side placement plus shared connectors above/below communicates
 * "both branch from and return to the same path" without literal
 * branching lines.
 */
const DeterminismForkDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <span className={`${nodeBase} ${coreClasses}`}>Computed Metrics Payload</span>

      <Connector />

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch w-full max-w-xl">
        <span className={`${nodeBase} ${alwaysClasses} flex-1 justify-center`}>
          Deterministic Report
          <span className="mt-1 text-xs font-normal text-emerald-700 dark:text-emerald-300">
            always runs
          </span>
        </span>
        <span className={`${nodeBase} ${optionalClasses} flex-1 justify-center`}>
          Optional LLM Explanation
          <span className="mt-1 text-xs font-normal text-slate-600 dark:text-slate-400">
            if enabled &amp; available
          </span>
        </span>
      </div>

      <Connector />

      <span className={`${nodeBase} ${coreClasses}`}>Final Report</span>
    </div>
  );
};

export default DeterminismForkDiagram;
