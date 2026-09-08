"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  inverted: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "fitforge-theme-invert";

function opposite(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}

function applyChromeTheme(theme: Theme, inverted: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("theme-invert", inverted);
  root.dataset.theme = theme;
  root.dataset.invert = inverted ? "true" : "false";
}

function getViewportTheme(): Theme {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-theme='light'], [data-theme='dark']"),
  );

  if (sections.length === 0) return "light";

  const viewportMid = window.innerHeight / 2;
  let best: { theme: Theme; distance: number } | null = null;

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= window.innerHeight) continue;

    const sectionMid = rect.top + rect.height / 2;
    const distance = Math.abs(sectionMid - viewportMid);
    const theme = section.dataset.theme === "dark" ? "dark" : "light";

    if (!best || distance < best.distance) {
      best = { theme, distance };
    }
  }

  return best?.theme ?? "light";
}

function readStoredInvert(): boolean {
  try {
    // migrate old absolute theme key if present
    window.localStorage.removeItem("fitforge-theme");
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [viewportTheme, setViewportTheme] = useState<Theme>("light");
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    setInverted(readStoredInvert());
  }, []);

  useEffect(() => {
    const sync = () => {
      const next = getViewportTheme();
      setViewportTheme((current) => (current === next ? current : next));
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      observer.disconnect();
    };
  }, [pathname, inverted]);

  const theme = inverted ? opposite(viewportTheme) : viewportTheme;

  useEffect(() => {
    applyChromeTheme(theme, inverted);
  }, [theme, inverted]);

  const toggleTheme = useCallback(() => {
    setInverted((current) => {
      const next = !current;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ theme, inverted, toggleTheme }),
    [theme, inverted, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
