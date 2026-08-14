"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string };

const SLIDES: Slide[] = [
  {
    src: "/images/screenshots/workflow-intelligence/pulse-overview.png",
    alt: "Pulse Overview: three briefing cards summarizing delivery health, team health, and deployment review, with an epic focus table below.",
  },
  {
    src: "/images/screenshots/workflow-intelligence/delivery-health.png",
    alt: "Delivery Health dashboard showing current WIP, stagnant tickets, flow distribution, and stage health with queue aging.",
  },
  {
    src: "/images/screenshots/workflow-intelligence/deployment-review.png",
    alt: "Deployment Review showing release readiness, a deployment aging heatmap, and blocked deployments with their evidence.",
  },
];

const INTERVAL_MS = 6000;

/**
 * Ambient product showcase: slow cross-fade between three key dashboards.
 * Auto-advance is disabled entirely for prefers-reduced-motion rather than
 * just dropping the transition, since the goal is no unsolicited motion.
 */
const HeroRotation: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl shadow-slate-900/10">
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={i === index ? slide.alt : ""}
          aria-hidden={i === index ? undefined : true}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 960px, 100vw"
          className={`object-cover object-top transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default HeroRotation;
