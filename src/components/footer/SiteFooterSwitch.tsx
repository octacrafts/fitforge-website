"use client";

import { usePathname } from "next/navigation";
import { FOOTER } from "@/lib/site-config";
import SiteFooter from "@/components/footer/SiteFooter";
import SimpleFooter from "@/components/footer/SimpleFooter";

type FooterVariant =
  | { kind: "simple"; tone: "light" | "dark"; showNav?: boolean; tagline?: string }
  | { kind: "site" };

const FOOTER_BY_PREFIX: readonly { prefix: string; variant: FooterVariant }[] = [
  { prefix: "/pricing", variant: { kind: "simple", tone: "light" } },
  { prefix: "/ai-workflows", variant: { kind: "simple", tone: "dark", showNav: true } },
  { prefix: "/pos-business", variant: { kind: "simple", tone: "dark", showNav: true } },
  {
    prefix: "/platform",
    variant: {
      kind: "simple",
      tone: "light",
      showNav: true,
      tagline: FOOTER.simpleTagline,
    },
  },
];

function matchFooterVariant(pathname: string): FooterVariant {
  for (const entry of FOOTER_BY_PREFIX) {
    if (pathname === entry.prefix || pathname.startsWith(`${entry.prefix}/`)) {
      return entry.variant;
    }
  }
  return { kind: "site" };
}

export default function SiteFooterSwitch() {
  const pathname = usePathname();
  const variant = matchFooterVariant(pathname);

  if (variant.kind === "site") {
    return <SiteFooter />;
  }

  return (
    <SimpleFooter
      tone={variant.tone}
      showNav={variant.showNav}
      tagline={variant.tagline}
    />
  );
}
