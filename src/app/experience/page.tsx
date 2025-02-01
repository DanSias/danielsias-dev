import PearsonEngineer from "./pearson-engineer";
import PearsonSeo from "./pearson-seo";
import LiquidGravityExperience from "./liquid-gravity";
import PageOutro from "@/components/home/PageOutro";
// import degrees from "@/constants/education";

export default function ExperiencePage() {
  return (
    <main className="flex flex-col items-center justify-center pt-36 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-slate-900 dark:text-slate-200">
          Professional Experience
        </h1>
        <p className="text-lg text-gray-600 dark:text-sky-200 text-center mt-2">
          Solving problems, streamlining processes, and making technology work
          smarter.
        </p>
        <hr className="my-16 dark:border-sky-900" />

        <PearsonEngineer />
        <hr className="my-16 dark:border-sky-900" />

        <PearsonSeo />
        <hr className="my-16 dark:border-sky-900" />

        <LiquidGravityExperience />
        <hr className="my-16 dark:border-sky-900" />

        <PageOutro />
      </div>
    </main>
  );
}
