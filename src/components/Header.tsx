"use client"; // Required for Next.js interactive components

import ThemeSwitcher from "./ThemeSwitcher";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50">
      <div className=" mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo or Name */}
        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-slate-700 dark:text-sky-100 hover:text-blue-600">
          <FaCode className="text-2xl mr-3" />
          Daniel Sias
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6">
          <Link href="/education" className="header-link">
            Education
          </Link>
          <Link href="/projects" className="header-link">
            Projects
          </Link>
          <Link href="/skills" className="header-link">
            Skills
          </Link>
          <Link href="/contact" className="header-link">
            Contact
          </Link>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
