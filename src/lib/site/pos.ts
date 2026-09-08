import type { PageIntroContent, ShowcaseImage } from "@/lib/site/types";

export const POS_BUSINESS_PAGE = {
  id: "pos-business",
  intro: {
    titleLead: "Your Gym is",
    titleAccent: "A Retail Powerhouse.",
    description:
      "Transform your reception area into a high-margin retail zone with a POS system built specifically for the fitness industry.",
    primaryCta: {
      label: "Get Started",
      href: "/sign-up",
    },
    secondaryCta: {
      label: "View Terminal Demo",
      href: "/#demo",
    },
    image: {
      src: "/pos-counter.png",
      alt: "FitForge POS terminal on a gym retail counter",
      width: 476,
      height: 405,
    },
  },
  features: {
    id: "pos-features",
    items: [
      {
        id: "inventory",
        icon: "barcode",
        title: "Inventory Mastery",
        description:
          "Real-time tracking of supplements, apparel, and snacks. Get automated low-stock alerts before you run out.",
      },
      {
        id: "charging",
        icon: "card",
        title: "Account Charging",
        description:
          "Let members charge purchases directly to their stored payment method. Zero friction, higher sales.",
      },
      {
        id: "bundles",
        icon: "tag",
        title: "Bundled Offers",
        description:
          "Create member-exclusive bundles. Combine class packs with merchandise to boost average order value.",
      },
    ],
  },
} as const satisfies {
  id: string;
  intro: PageIntroContent & {
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    image: ShowcaseImage;
  };
  features: {
    id: string;
    items: readonly {
      id: string;
      icon: "barcode" | "card" | "tag";
      title: string;
      description: string;
    }[];
  };
};
