"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import * as Tooltip from "@radix-ui/react-tooltip";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false); // Prevents SSR/CSR mismatch

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    document.documentElement.classList.add(initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={100}>
        <Tooltip.Trigger asChild>
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
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-gray-900 text-white px-3 py-2 mt-4 rounded-md text-sm shadow-lg dark:bg-gray-700"
            side="bottom"
            align="center">
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            <Tooltip.Arrow className="fill-gray-900 dark:fill-gray-700" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default ThemeSwitcher;
