import Image from "next/image";
import Link from "next/link";
import { Degree } from "@/constants/education";

const EducationCard: React.FC<{ degree: Degree }> = ({ degree }) => {
  return (
    <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={degree.logo}
            alt={`${degree.school} logo`}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {degree.degree}
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{degree.school}</p>
          <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
            {degree.location} · {degree.graduated}
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
            Foundation
          </h3>
          <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {degree.foundation}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
            Still Use Today
          </h3>
          <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            {degree.stillUseToday}
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">
            Visible In
          </h3>
          <ul className="mt-1.5 space-y-1">
            {degree.visibleIn.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-blue-600 dark:text-sky-400 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
