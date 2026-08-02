"use client";

import { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { FaCode, FaHome, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900/60 dark:backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left: Logo */}
        <Link
          href="/"
          className={`flex items-center text-2xl font-bold rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 ${
            isHome
              ? "text-slate-900 dark:text-white"
              : "text-slate-700 dark:text-sky-100 hover:text-blue-600"
          }`}>
          {isHome ? (
            <FaCode className="text-2xl mr-3" />
          ) : (
            <FaHome className="text-2xl mr-3" />
          )}
          <span className="font-montserrat">Daniel Sias</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`header-link border-b-2 pb-0.5 ${
                  active
                    ? "border-sky-500 text-slate-900 dark:text-white font-semibold"
                    : "border-transparent"
                }`}>
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button in Center */}
        <div className="md:hidden flex-1 flex justify-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-700 dark:text-sky-100 rounded-sm transition-colors hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
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
            {navItems.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`mobile-link border-b-2 ${
                    active
                      ? "border-sky-500 text-slate-900 dark:text-white font-semibold"
                      : "border-transparent"
                  }`}>
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
