import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface Degree {
  school: string;
  degree: string;
  graduated: number;
  location: string;
  description: string;
  whatILearned: string[];
  logo: string;
}

interface EducationCardProps {
  degree: Degree;
}
const EducationCard: React.FC<EducationCardProps> = ({ degree }) => {
  return (
    <section className="body-font font-sans">
      <div className="px-4 py-6 mx-auto flex flex-col">
        <div className="mx-auto">
          <hr className="py-6 dark:border-sky-900" />
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-40 h-40 mt-4 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image
                  src={degree.logo}
                  alt="School Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-sky-50 mt-4">
                  {degree.degree}
                </h1>
                <div className="w-12 h-1 bg-blue-500 rounded mt-4 mb-2"></div>

                <h2 className="text-lg font-semibold text-gray-800 dark:text-sky-100 mt-2">
                  {degree.school}
                </h2>
                <p className="text-base font-medium text-gray-600 dark:text-sky-200">
                  {degree.location} | {degree.graduated}
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 dark:border-sky-900 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg text-gray-800 dark:text-sky-100 mb-4">
                {degree.description}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-sky-50 mb-2">
                Key Skills & Applications
              </h3>
              <ul className="pl-3 mt-2 list-disc  space-y-2 text-gray-700 dark:text-sky-100">
                {degree.whatILearned.map((item, idx) => (
                  <li key={idx} className="text-base">
                    <ReactMarkdown>{item}</ReactMarkdown>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCard;
