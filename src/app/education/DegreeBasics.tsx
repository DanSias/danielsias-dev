import Image from "next/image";
import Link from "next/link";
import degrees from "@/constants/education"; // Import the array directly

const EducationRow: React.FC = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-primary text-center">
        Education & Academic Background
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center">
        Bridging science, engineering, and management to drive innovative
        software solutions.
      </p>
      <div className="flex justify-center pt-12 px-4">
        <div className="max-w-6xl w-full flex flex-row justify-center items-start gap-6">
          {degrees.map((degree, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 w-1/3">
              {/* School Logo */}
              <div className="w-40 h-40 rounded-full flex bg-gray-200 dark:bg-gray-800 text-gray-400">
                <Image
                  src={degree.logo}
                  alt="School Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Degree & School Info */}
              <div className="mt-4 flex flex-col items-center">
                <h1 className="text-xl font-bold text-gray-900 dark:text-sky-50">
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
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center">
        <Link
          href="/education"
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline ">
          View Education →
        </Link>
      </p>
    </section>
  );
};

export default EducationRow;
