import type { PageIntroContent } from "@/lib/site/types";

export const PRICING_PAGE = {
  id: "pricing",
  intro: {
    titleLead: "Transparent Pricing,",
    titleAccent: "Infinite Growth.",
    description:
      "No hidden fees. No complicated tiers. Just the power you need to run your gym.",
  },
  faq: {
    id: "pricing-faq",
    title: "Frequently Asked Questions",
    items: [
      {
        id: "switch-plans",
        question: "Can I switch plans later?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time through your dashboard.",
      },
      {
        id: "hidden-fees",
        question: "Are there any hidden fees?",
        answer:
          "None. The monthly subscription covers all management features and POS software.",
      },
    ],
    enterprise: {
      title: "Need a custom enterprise solution?",
      description:
        "We offer custom builds for large fitness franchises with over 50 locations.",
      ctaLabel: "Talk to our experts",
      ctaHref: "/#demo",
    },
  },
} as const satisfies {
  id: string;
  intro: PageIntroContent;
  faq: {
    id: string;
    title: string;
    items: readonly { id: string; question: string; answer: string }[];
    enterprise: {
      title: string;
      description: string;
      ctaLabel: string;
      ctaHref: string;
    };
  };
};
