const ResumePreview: React.FC = () => {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 overflow-hidden">
      <iframe
        src="/resume.pdf#view=FitH"
        title="Daniel Sias: Resume"
        className="w-full h-[600px] md:h-[800px] bg-white"
      />
      <p className="p-3 text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        Preview not loading?{" "}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-sky-400 font-semibold hover:underline">
          Open the PDF directly →
        </a>
      </p>
    </div>
  );
};

export default ResumePreview;
