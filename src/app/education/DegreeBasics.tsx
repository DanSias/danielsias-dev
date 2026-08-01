import Image from "next/image";
import Link from "next/link";
import degrees from "@/constants/education"; // Import the array directly

const EducationRow: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-heading">Education & Academic Background</h2>
      <p className="text-subhead">
        Bridging science, engineering, and management to drive innovative
        software solutions.
      </p>
      <div className="flex justify-center">
        <div className="max-w-6xl w-full flex flex-row justify-center items-start gap-6">
          {degrees.map((degree, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 w-1/3">
              {/* School Logo */}
              <div className="w-24 h-24 rounded-full flex bg-gray-200 dark:bg-gray-800 text-gray-400">
                <Image
                  src={degree.logo}
                  alt="School Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Degree & School Info */}
              <div className="mt-5 flex flex-col items-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-sky-50">
                  {degree.degree}
                </h1>
                <div className="w-12 h-1 bg-blue-500 rounded mt-2"></div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-sky-100 mt-2">
                  {degree.school}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/education"
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          View Education →
        </Link>
      </div>
    </section>
  );
};

export default EducationRow;
