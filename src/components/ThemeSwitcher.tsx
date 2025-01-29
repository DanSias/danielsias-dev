"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-800">
      {theme === "dark" ? (
        <FaSun className="w-6 h-6 text-slate-400" />
      ) : (
        <FaMoon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
