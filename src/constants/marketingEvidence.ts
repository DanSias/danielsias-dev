/**
 * Verified marketing/analytics metrics, shared between the Experience-page
 * case studies (Pearson, Liquid Gravity, RocketGate) and /marketing so a
 * figure is written once and can't drift into two different numbers across
 * the site.
 *
 * Nexus and the Marketing Forecasting Platform are separate systems with
 * separate metrics — keep them in separate exports, never merged.
 */

export const nexusMetrics = [
  "~20 hours/week saved across teams",
  "85% faster reporting",
  "$25M+ in tracked marketing spend",
];

// Estimate, not a precise figure — do not tighten or round up.
export const forecastingMetrics = ["~10–15 hours/month saved (estimated)"];

export const seoAnalystMetrics = ["$1.3M SEO budget managed"];

export const pearsonSeoRelaunchMetrics = [
  "+40% organic traffic (6 months)",
  "Conversion: <1% → 2.5%",
];

export const bruteStrengthMetrics = ["Cost per lead: $1.21 → $0.45 (~63% reduction)"];

export const rocketGateAdoptionMetrics = [
  "New-merchant onboarding effort: ~10 hrs → ~3 hrs",
  "~30% fewer integration support tickets",
];
