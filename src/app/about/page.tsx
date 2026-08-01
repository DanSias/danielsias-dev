import AboutMe from "./AboutMe";
import PageOutro from "@/components/home/PageOutro";

const AboutPage: React.FC = () => {
  return (
    <main className="pt-32 px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-heading">How I Think</h1>
        <p className="text-subhead">
          The thought that keeps showing up in almost everything I build.
        </p>

        <div className="pb-12">
          <AboutMe />
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800">
          <PageOutro />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
