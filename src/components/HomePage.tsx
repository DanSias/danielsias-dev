// src/components/HomePage.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900">Daniel Sias</h1>
        <p className="text-xl text-gray-600 mt-2">
          Software Engineer | Full-Stack Developer
        </p>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl">
          Passionate about building scalable web applications and solving
          complex problems with modern technologies.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-gray-900 transition">
            Contact Me
          </a>
        </div>
      </div>
    </main>
  );
}
