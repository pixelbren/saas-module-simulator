"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type Theme = "light" | "dark" | "system";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("system");

  // Only run on client side
  useEffect(() => {
    setMounted(true);
    // Check localStorage for theme preference
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme !== "system") {
        document.documentElement.classList.toggle(
          "dark",
          savedTheme === "dark"
        );
      }
    }
  }, []);

  // Handle system theme changes
  useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle("dark", e.matches);
      };

      // Set initial value
      document.documentElement.classList.toggle("dark", mediaQuery.matches);

      // Listen for changes
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  const toggleTheme = () => {
    let newTheme: Theme;
    if (theme === "system") {
      newTheme = "light";
    } else if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "system";
    }

    setTheme(newTheme);

    if (newTheme === "system") {
      localStorage.removeItem("theme");
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", systemDark);
    } else {
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  // Avoid hydration mismatch
  if (!mounted) return null;

  return (
    <Button
      onClick={toggleTheme}
      variant="tertiary"
      size="sm"
      aria-label="Toggle theme"
      title={
        theme === "dark"
          ? "Switch to system theme"
          : theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
    >
      {theme === "dark" ? (
        <Icon name="Sun" size={20} className="text-yellow-400" />
      ) : theme === "light" ? (
        <Icon
          name="Moon"
          size={20}
          className="text-gray-400 dark:text-gray-500"
        />
      ) : (
        <Icon
          name="Monitor"
          size={20}
          className="text-gray-400 dark:text-gray-500"
        />
      )}
    </Button>
  );
}
