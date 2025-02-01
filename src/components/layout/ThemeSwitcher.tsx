"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false); // Prevents SSR/CSR mismatch

  useEffect(() => {
    // Ensure this runs only on the client
    setMounted(true);

    // Check local storage or system preference
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Apply the theme
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.classList.add(initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;

    const newTheme = theme === "dark" ? "light" : "dark";

    // Remove old theme and apply new one
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);

    // Store preference
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // **Prevent hydration mismatch by not rendering until mounted**
  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
      aria-label="Toggle Dark Mode">
      {theme === "dark" ? (
        <FaSun className="w-6 h-6 text-slate-400" />
      ) : (
        <FaMoon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
