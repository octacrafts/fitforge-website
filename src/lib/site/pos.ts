import type { PageIntroContent, ShowcaseImage } from "@/lib/site/types";

export type PosBillingIconId = "card" | "tax" | "chart";

export type PosBillingItem = {
  id: string;
  icon: PosBillingIconId;
  title: string;
  description: string;
  whyItMatters: string;
};

export type PosRetailIconId = "bolt" | "box" | "target";

export type PosRetailItem = {
  id: string;
  step: string;
  illustration: PosRetailIconId;
  title: string;
  description: string;
  whyItMatters: string;
};

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
  retail: {
    id: "pos-retail",
    eyebrow: "RETAIL & INVENTORY OPERATIONS",
    titleLead: "Run Your Retail Counter",
    titleAccent: "Like a Real Business",
    description: "From the shelf to the sale — stock and supply, under control.",
    items: [
      {
        id: "smart-pos",
        step: "01",
        illustration: "bolt",
        title: "Smart POS for Retail",
        description:
          "Sell supplements, apparel, and accessories with a built-in point-of-sale system designed for gyms. Fast checkout, no manual price entry, no end-of-day guesswork.",
        whyItMatters: "Faster counter service, fewer billing mistakes.",
      },
      {
        id: "realtime-inventory",
        step: "02",
        illustration: "box",
        title: "Real-Time Inventory Tracking",
        description:
          "Every sale updates your stock instantly. Know exactly what's selling, what's low, and what's disappearing without explanation.",
        whyItMatters:
          "Stops stock theft and wastage before it eats your margins.",
      },
      {
        id: "purchase-orders",
        step: "03",
        illustration: "target",
        title: "Supplier & Purchase Order Management",
        description:
          "Track suppliers, raise purchase orders, and see sales-vs-stock reports side by side to know exactly what to reorder and when.",
        whyItMatters: "Smarter purchasing, better retail profitability.",
      },
    ] as const satisfies readonly PosRetailItem[],
  },
  billing: {
    id: "pos-billing",
    eyebrow: "Billing, Payments & Tax",
    title: "Every Transaction, Accounted For",
    description:
      "Billing, payments, and tax compliance — all automated so nothing slips through.",
    items: [
      {
        id: "automated-billing",
        icon: "card",
        title: "Automated Billing & Payments",
        description:
          "Invoices generate themselves. Cash, card, and digital payments are tracked in one place — no more mismatched registers at closing time.",
        whyItMatters:
          "Clean records, faster financial closing, zero revenue leakage.",
      },
      {
        id: "tax-compliance",
        icon: "tax",
        title: "Tax & Compliance, Handled",
        description:
          "GST/VAT is calculated automatically and invoices are generated SRB-compliant. Audit-ready reports, always on hand.",
        whyItMatters: "No tax-season panic, no penalty risk.",
      },
      {
        id: "financial-history",
        icon: "chart",
        title: "Full Financial History",
        description:
          "Every payment, refund, and transaction is logged and searchable — a complete money trail for your business, always available.",
        whyItMatters: "Total visibility, no disputes over 'who paid what.'",
      },
    ] as const satisfies readonly PosBillingItem[],
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
  retail: {
    id: string;
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    items: readonly PosRetailItem[];
  };
  billing: {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    items: readonly PosBillingItem[];
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
