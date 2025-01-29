import EducationCard from "@/components/EducationCard";
import degrees from "@/constants/education";

export default function EducationPage() {
  return (
    <main className="flex flex-col items-center justify-center pt-36 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center">Education</h1>
        <p className="text-lg text-gray-600 dark:text-sky-200 text-center mt-2">
          A summary of my academic background and key takeaways from each
          program.
        </p>

        <div className="mt-6 flex flex-col gap-6">
          {degrees.map((degree, index) => (
            <EducationCard key={index} degree={degree} />
          ))}
        </div>
      </div>
    </main>
  );
}
