"use client";

import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { easeOut } from "@/lib/motion";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { inverted, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={inverted ? "Restore section themes" : "Invert section themes"}
      aria-pressed={inverted}
      title={inverted ? "Normal theme" : "Invert light/dark sections"}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-card-line bg-card text-ink transition-colors hover:border-brand/40 hover:text-brand ${
        inverted ? "border-brand/50 text-brand" : ""
      } ${className}`}
      whileHover={reduceMotion ? undefined : { scale: 1.06, y: -1 }}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      transition={{ duration: 0.2, ease: easeOut }}
    >
      {inverted ? (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M12 4.5V3M12 21v-1.5M4.5 12H3M21 12h-1.5M6.4 6.4L5.3 5.3M18.7 18.7l-1.1-1.1M6.4 17.6l-1.1 1.1M18.7 5.3l-1.1 1.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M20 14.5A7.5 7.5 0 1 1 9.5 4a6.2 6.2 0 0 0 10.5 10.5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.button>
  );
}
