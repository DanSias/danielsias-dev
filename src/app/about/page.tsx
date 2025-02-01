import AboutMe from "./AboutMe";
import PageOutro from "@/components/home/PageOutro";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen  pt-32">
      <div className="container mx-auto px-4">
        <h1 className="text-heading">About Me</h1>
        <p className="text-subhead">
          A little insight into who I am, what drives me, and what I love
          working on.
        </p>
        <hr className="my-16 dark:border-sky-900 max-w-4xl mx-auto" />

        <AboutMe />
        <hr className="my-16 dark:border-sky-900 max-w-4xl mx-auto" />

        <PageOutro />
      </div>
    </div>
  );
};

export default AboutPage;
