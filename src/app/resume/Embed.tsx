import Summary from "./Summary";
import FullStackExperience from "./FullStackExperience";
import AnalystExperience from "./AnalystExperience";
import FounderExperience from "./FounderExperience";
import NexusProject from "./NexusProject";
import SearchProject from "./SearchProject";
import Education from "./Education";

const Resume: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg text-gray-800">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Daniel Sias</h1>
        <p className="text-sm text-gray-600">
          <a
            href="mailto:daniel.sias@gmail.com"
            className="text-blue-600 hover:underline">
            daniel.sias@gmail.com
          </a>{" "}
          | (407) 272-1720 |{" "}
          {/* <a
            href="https://danielsias.dev"
            className="text-blue-600 hover:underline">
            danielsias.dev
          </a>{" "}
          |{" "} */}
          <a
            href="https://www.linkedin.com/in/daniel-sias"
            className="text-blue-600 hover:underline">
            LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/daniel-sias"
            className="text-blue-600 hover:underline">
            GitHub
          </a>
        </p>
      </header>

      {/* Summary */}
      <Summary />

      <section className="mb-6">
        <h2 className="relative text-lg font-bold text-center my-6">
          <span className="bg-white px-4 relative z-10">
            Skills & Technologies
          </span>
          <span className="absolute inset-x-0 top-1/2 border-t border-gray-300 z-0"></span>
        </h2>

        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Frontend Development:</span>{" "}
            React.js • Next.js • TypeScript • API Integration • TailwindCSS •
            User-Centered Design
          </p>
          <p>
            <span className="font-semibold">Backend Architecture:</span> Node.js
            • Express.js • FastAPI • Django • PostgreSQL • BigQuery • RESTful
            APIs • OAuth • PHP
          </p>
          <p>
            <span className="font-semibold">Cloud & DevOps:</span> Supabase •
            Google Cloud • AWS • CI/CD Pipelines • Docker
          </p>
          <p>
            <span className="font-semibold">Data & Analytics:</span> Marketing
            Automation • Data Engineering • Business Intelligence • AI-Powered
            Tools
          </p>
          <p>
            <span className="font-semibold">Tools & Workflow:</span> Git •
            Agile/Scrum • API Design • Performance Optimization • Automation
          </p>
        </div>
      </section>

      <h2 className="relative text-lg font-bold text-center mt-6">
        <span className="bg-white px-4 relative z-10">
          Professional Experience
        </span>
        <span className="absolute inset-x-0 top-1/2 border-t border-gray-300 z-0"></span>
      </h2>

      <FullStackExperience />

      <AnalystExperience />

      <FounderExperience />

      <h2 className="relative text-lg font-bold text-center mt-6">
        <span className="bg-white px-4 relative z-10">Project Highlights</span>
        <span className="absolute inset-x-0 top-1/2 border-t border-gray-300 z-0"></span>
      </h2>

      <NexusProject />

      <SearchProject />

      <h2 className="relative text-lg font-bold text-center mt-6">
        <span className="bg-white px-4 relative z-10">Academic Background</span>
        <span className="absolute inset-x-0 top-1/2 border-t border-gray-300 z-0"></span>
      </h2>

      <Education />
    </div>
  );
};

export default Resume;
