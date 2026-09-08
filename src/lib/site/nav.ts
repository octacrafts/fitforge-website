import type { NavLink } from "@/lib/site/types";

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/platform", label: "Platform" },
  { href: "/pos-business", label: "POS Business" },
  { href: "/ai-workflows", label: "AI Workflows" },
  { href: "/pricing", label: "Pricing" },
] as const;
