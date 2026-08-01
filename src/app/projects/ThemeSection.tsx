import { Project } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

type Props = {
  title: string;
  intro: string;
  projects: Project[];
};

const ThemeSection: React.FC<Props> = ({ title, intro, projects }) => {
  const ordered = [...projects].sort(
    (a, b) => Number(!!b.lead) - Number(!!a.lead)
  );

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-1.5 max-w-2xl text-gray-500 dark:text-gray-400">
        {intro}
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ordered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ThemeSection;
