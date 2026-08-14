"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = { src: string; alt: string; position: string };

const SLIDES: Slide[] = [
  {
    src: "/images/screenshots/workflow-intelligence/pulse-overview.png",
    alt: "Pulse Overview: the Workflow Intelligence app header and executive briefing cards summarizing Delivery Health, Team Health, and Deployment Review.",
    position: "object-left-top",
  },
  {
    src: "/images/screenshots/workflow-intelligence/delivery-health.png",
    alt: "Delivery Health dashboard showing current WIP, stagnant tickets, backflow rate, and median cycle time KPIs.",
    position: "object-top",
  },
  {
    src: "/images/screenshots/workflow-intelligence/deployment-review.png",
    alt: "Deployment Review showing a release-readiness banner and the deployment review queue.",
    position: "object-top",
  },
];

const INTERVAL_MS = 6000;

/**
 * Ambient rotation through three representative product views, cross-fading
 * in place inside a fixed-size box (set by the parent's aspect-ratio) so
 * nothing shifts between slides. Auto-advance is disabled entirely under
 * prefers-reduced-motion, leaving the first slide (Pulse) as a static image.
 */
const FlagshipRotation: React.FC = () => {
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
    <>
      {SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={i === index ? slide.alt : ""}
          aria-hidden={i === index ? undefined : true}
          fill
          priority={i === 0}
          // `sizes` is intentionally declared larger than the true render
          // width: with object-cover cropping a wide 1512x630 screenshot
          // into a 4:3 box, the box's HEIGHT (not its width) drives how
          // much source resolution is needed, and Next only sizes its
          // srcset off the declared `sizes` value. Understating it fetches
          // a candidate too short to cover the box without upscaling (the
          // original blur bug). This component renders inside two slightly
          // different column widths (the /projects flagship card and the
          // homepage flagship card), so the desktop value carries enough
          // margin to stay at full source resolution in both.
          sizes="(min-width: 1024px) 900px, 180vw"
          className={`${slide.position} object-cover transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
};

export default FlagshipRotation;
