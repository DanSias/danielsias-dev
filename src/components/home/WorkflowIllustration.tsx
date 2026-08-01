/**
 * Abstract, conceptual illustration of a workflow/kanban pipeline,
 * standing in for a Workflow Intelligence screenshot until a sanitized
 * one is available. Intentionally not a mock of any real UI.
 */
const WorkflowIllustration: React.FC = () => {
  return (
    <svg
      viewBox="0 0 400 220"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Abstract illustration of a workflow pipeline with stages and work items">
      <defs>
        <filter id="wfCardShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="1" stdDeviation="1.6" floodOpacity="0.22" />
        </filter>
      </defs>

      {/* Lane dividers */}
      <line x1="136" y1="20" x2="136" y2="200" strokeDasharray="4 5" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
      <line x1="260" y1="20" x2="260" y2="200" strokeDasharray="4 5" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />

      {/* Lane headers: status dot + label + count pill */}
      <circle cx="40" cy="28" r="4" className="fill-slate-400 dark:fill-slate-500" />
      <rect x="52" y="24" width="36" height="8" rx="4" className="fill-slate-400/50 dark:fill-slate-500/40" />
      <rect x="96" y="23" width="16" height="10" rx="5" className="fill-slate-400/10 stroke-slate-400/50 dark:fill-slate-500/10 dark:stroke-slate-500/50" strokeWidth="0.75" />

      <circle cx="164" cy="28" r="4" className="fill-sky-500 dark:fill-sky-400" />
      <rect x="176" y="24" width="36" height="8" rx="4" className="fill-sky-500/40 dark:fill-sky-400/35" />
      <rect x="220" y="23" width="16" height="10" rx="5" className="fill-sky-500/10 stroke-sky-500/50 dark:fill-sky-400/10 dark:stroke-sky-400/50" strokeWidth="0.75" />

      <circle cx="288" cy="28" r="4" className="fill-emerald-500 dark:fill-emerald-400" />
      <rect x="300" y="24" width="36" height="8" rx="4" className="fill-emerald-500/40 dark:fill-emerald-400/35" />
      <rect x="344" y="23" width="16" height="10" rx="5" className="fill-emerald-500/10 stroke-emerald-500/50 dark:fill-emerald-400/10 dark:stroke-emerald-400/50" strokeWidth="0.75" />

      {/* Lane 1 cards (backlog) */}
      {[
        { y: 52, h: 28 },
        { y: 94, h: 28 },
      ].map((card, i) => (
        <g key={`c1-${i}`} filter="url(#wfCardShadow)">
          <rect x="24" y={card.y} width="104" height={card.h} rx="5" className="fill-white stroke-slate-200 dark:fill-slate-800 dark:stroke-slate-700" strokeWidth="1" />
          <rect x="24" y={card.y} width="3" height={card.h} rx="1.5" className="fill-slate-400 dark:fill-slate-500" />
          <rect x="38" y={card.y + card.h / 2 - 1.25} width="52" height="2.5" rx="1.25" className="fill-slate-300 dark:fill-slate-600" />
          <circle cx="114" cy={card.y + 10} r="5" fill="none" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.2" />
        </g>
      ))}

      {/* Lane 2 cards (in progress) */}
      {[
        { y: 52, h: 28 },
        { y: 94, h: 40 },
      ].map((card, i) => (
        <g key={`c2-${i}`} filter="url(#wfCardShadow)">
          <rect x="148" y={card.y} width="104" height={card.h} rx="5" className="fill-white stroke-slate-200 dark:fill-slate-800 dark:stroke-slate-700" strokeWidth="1" />
          <rect x="148" y={card.y} width="3" height={card.h} rx="1.5" className="fill-sky-500 dark:fill-sky-400" />
          <rect x="162" y={card.y + card.h / 2 - 1.25} width="58" height="2.5" rx="1.25" className="fill-slate-300 dark:fill-slate-600" />
          <circle cx="238" cy={card.y + 10} r="5" fill="none" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.2" />
        </g>
      ))}

      {/* Lane 3 cards (done) */}
      {[
        { y: 52, h: 24 },
        { y: 88, h: 24 },
        { y: 124, h: 24 },
      ].map((card, i) => (
        <g key={`c3-${i}`} filter="url(#wfCardShadow)">
          <rect x="272" y={card.y} width="104" height={card.h} rx="5" className="fill-white stroke-slate-200 dark:fill-slate-800 dark:stroke-slate-700" strokeWidth="1" />
          <rect x="272" y={card.y} width="3" height={card.h} rx="1.5" className="fill-emerald-500 dark:fill-emerald-400" />
          <rect x="286" y={card.y + card.h / 2 - 1.25} width="48" height="2.5" rx="1.25" className="fill-slate-300 dark:fill-slate-600" />
          <circle cx="362" cy={card.y + 10} r="5" fill="none" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.2" />
        </g>
      ))}

      {/* Stage history rail */}
      <line x1="24" y1="192" x2="376" y2="192" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" />
      <circle cx="48" cy="192" r="3.5" className="fill-slate-400 dark:fill-slate-500" />
      <circle cx="140" cy="192" r="3.5" className="fill-slate-400 dark:fill-slate-500" />
      <circle cx="232" cy="192" r="3.5" className="fill-sky-500 dark:fill-sky-400" />
      <circle cx="324" cy="192" r="3.5" className="fill-emerald-500 dark:fill-emerald-400" />
    </svg>
  );
};

export default WorkflowIllustration;
