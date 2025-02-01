import SkillsList from "@/components/SkillsList";
import Technologieslist from "@/components/TechnologiesList";
import PageOutro from "@/components/home/PageOutro";

const SkillsPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto pt-36 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-sky-100">
        My Skills
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
        A collection of the technologies, tools, and methodologies I specialize
        in.
      </p>
      <SkillsList />
      <Technologieslist />
      <PageOutro />
    </div>
  );
};

export default SkillsPage;
