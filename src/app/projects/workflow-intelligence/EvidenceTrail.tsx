import Screenshot from "./Screenshot";

type Step = {
  label: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Props = {
  steps: Step[];
};

/**
 * A connected investigation timeline (Evidence Dialog -> Work Item -> Merge
 * Request -> Release): a numbered spine ties each step together, and each
 * screenshot is large enough to read on its own rather than a thumbnail.
 * Vertical at every width, so it degrades to mobile with no layout change.
 */
const EvidenceTrail: React.FC<Props> = ({ steps }) => {
  return (
    <ol className="relative">
      {steps.map((step, i) => (
        <li key={step.label} className="relative pl-16 sm:pl-24 pb-16 last:pb-0">
          {i < steps.length - 1 && (
            <span
              className="absolute left-[23px] sm:left-[31px] top-12 bottom-0 w-px bg-slate-200 dark:bg-slate-800"
              aria-hidden="true"
            />
          )}
          <span className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300 text-lg sm:text-xl font-bold border-2 border-sky-200 dark:border-sky-800">
            {i + 1}
          </span>
          <div className="pt-1 sm:pt-3">
            <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {step.label}
            </h4>
            <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </div>
          <Screenshot
            src={step.src}
            alt={step.alt}
            width={step.width}
            height={step.height}
            sizes="(min-width: 1024px) 950px, 100vw"
            className="mt-6 lg:max-w-4xl"
          />
        </li>
      ))}
    </ol>
  );
};

export default EvidenceTrail;
