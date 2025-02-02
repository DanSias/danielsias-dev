"use client";

import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaCode, FaHome, FaBars, FaTimes, FaFilePdf } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900/60 dark:backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Logo */}
        <Link
          href="/"
          className="flex items-center text-2xl font-bold text-slate-700 dark:text-sky-100 hover:text-blue-600">
          {pathname === "/" ? (
            <FaCode className="text-2xl mr-3" />
          ) : (
            <FaHome className="text-2xl mr-3" />
          )}
          <span className="font-montserrat">Daniel Sias</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/about" className="header-link">
            About
          </Link>
          <Link href="/experience" className="header-link">
            Experience
          </Link>
          <Link href="/projects" className="header-link">
            Projects
          </Link>
          <Link href="/skills" className="header-link">
            Skills
          </Link>
          <Link href="/education" className="header-link">
            Education
          </Link>
          <Link href="/resume" className="header-link flex items-center gap-2">
            <FaFilePdf className="text-red-500 dark:text-red-300" />
            Resume
          </Link>
          <Link href="/contact" className="header-link">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button in Center */}
        <div className="md:hidden flex-1 flex justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-700 dark:text-sky-100 focus:outline-none"
            aria-label="Toggle menu">
            {menuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Right: Theme Switcher */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg absolute top-full left-0 w-full flex justify-center">
          <nav className="flex flex-col items-center gap-4 py-4 w-full max-w-xs">
            <Link
              href="/about"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link
              href="/experience"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}>
              Experience
            </Link>
            <Link
              href="/projects"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link
              href="/skills"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
            <Link
              href="/education"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}>
              Education
            </Link>
            <Link
              href="/resume"
              className="mobile-link flex items-center gap-2"
              onClick={() => setMenuOpen(false)}>
              <FaFilePdf className="text-red-500" />
              Resume
            </Link>
            <Link
              href="/contact"
              className="mobile-link"
              onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
