"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="h-8 relative inline-flex items-center gap-2 px-1 hover:bg-[var(--accent)] text-[var(--secondary-foreground)] rounded-[var(--radius)] border border-[var(--border)] transition-all duration-500 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-[var(--ring)]/20 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Icon with rotation animation */}
      <div className="flex items-center justify-center w-5 h-5 transition-transform duration-500 ease-in-out group-hover:rotate-12">
        {resolvedTheme === "dark" ? (
          <Sun className="w-3 md:w-4 h-3 md:h-4 text-orange-500 animate-pulse" />
        ) : (
          <Moon className="w-3 md:w-4 h-3 md:h-4 text-gray-500" />
        )}
      </div>
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-[var(--radius)] bg-[var(--primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </button>
  );
}
