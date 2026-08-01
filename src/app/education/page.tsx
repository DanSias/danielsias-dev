import EducationCard from "./DegreeDetails";
import degrees from "@/constants/education";
import PageOutro from "@/components/home/PageOutro";

export default function EducationPage() {
  return (
    <main className="pt-32 px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-heading">Engineering Foundations</h1>
        <p className="text-subhead">
          My background in physics, optics, and management still shapes how
          I approach systems, data, and software today.
        </p>

        <div className="flex flex-col gap-6 pb-12">
          {degrees.map((degree) => (
            <EducationCard key={degree.school} degree={degree} />
          ))}
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800">
          <PageOutro />
        </div>
      </div>
    </main>
  );
}
