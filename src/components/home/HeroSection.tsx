import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-bold text-primary">Daniel Sias</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
        Full-Stack Developer | AI & Automation | Data-Driven Solutions
      </p>
      <div className="mt-6">
        <Link
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
