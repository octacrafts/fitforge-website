import type { FooterLinkGroup, SocialLink } from "@/lib/site/types";

export const FOOTER = {
  description:
    "The next generation of fitness business intelligence. Management, POS, and AI in one seamless platform.",
  copyright: "© 2026 FitForge Inc. All rights reserved.",
  tagline: "Designed for the future of fitness.",
  simpleTagline:
    "Redefining gym management for the tech-forward fitness era.",
  socials: [
    { id: "instagram", href: "#", label: "Instagram" },
    { id: "twitter", href: "#", label: "Twitter" },
    { id: "linkedin", href: "#", label: "LinkedIn" },
  ] as const satisfies readonly SocialLink[],
  groups: [
    {
      title: "Product",
      links: [
        { href: "/platform", label: "Features" },
        { href: "/pos-business", label: "POS Solution" },
        { href: "/ai-workflows", label: "AI Workflows" },
        { href: "/pricing", label: "Pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#about", label: "About Us" },
        { href: "#careers", label: "Careers" },
        { href: "#privacy", label: "Privacy Policy" },
        { href: "#terms", label: "Terms" },
      ],
    },
  ] as const satisfies readonly FooterLinkGroup[],
} as const;
