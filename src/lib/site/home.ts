import type {
  AiInsight,
  CtaAction,
  Feature,
  PricingPlan,
  StatItem,
  TrustedBrand,
  WorkflowStep,
} from "@/lib/site/types";

export const FEATURE_SECTION = {
  id: "features",
  title: "Complete Management Suite",
  description:
    "Everything you need to run a high-performance fitness facility, optimized for growth and member retention.",
} as const;

export const FEATURES: readonly Feature[] = [
  {
    id: "member-operations",
    icon: "members",
    title: "Member Operations",
    description:
      "Automated check-ins, progress tracking, and digital contracts in one unified interface.",
  },
  {
    id: "smart-scheduling",
    icon: "calendar",
    title: "Smart Scheduling",
    description:
      "Dynamic class booking and PT scheduling with automated waitlist management.",
  },
  {
    id: "revenue-insights",
    icon: "chart",
    title: "Revenue Insights",
    description:
      "Detailed financial forecasting and member churn analysis powered by real-time data.",
  },
] as const;

export const POS_SECTION = {
  id: "pos-business",
  eyebrow: "The POS Opportunity",
  title: "Unlock a new revenue stream.",
  description:
    "FitForge POS isn't just a checkout—it's a business expansion tool. Offer supplements, apparel, and snacks with a system designed for high-volume gym environments.",
  image: {
    src: "/pos-counter.png",
    alt: "FitForge POS tablet on a gym retail counter",
    width: 476,
    height: 405,
  },
  stats: [
    { id: "revenue", value: "25%", label: "Avg. Revenue Increase from Merch" },
    { id: "accuracy", value: "100%", label: "Inventory Accuracy with Automation" },
  ] as const satisfies readonly StatItem[],
  checks: [
    "Integrated inventory management across all locations",
    "Tap-to-pay and member account charging",
  ] as const,
} as const;

export const AI_SECTION = {
  id: "ai-workflows",
  eyebrow: "AI Integration Workflows",
  title: "Scale your expertise with AI.",
  description:
    "FitForge launches with powerful AI integrations that handle the repetitive tasks, so you can focus on building your community.",
  insights: [
    {
      id: "churn",
      icon: "robot",
      title: "Churn Prediction",
      description: "AI identifies at-risk members before they cancel.",
    },
    {
      id: "engagement",
      icon: "bolt",
      title: "Auto-Engagement",
      description: "Personalized workflows for milestone celebrations.",
    },
  ] as const satisfies readonly AiInsight[],
  steps: [
    {
      step: 1,
      text: "Auto-generated marketing campaigns for local outreach",
    },
    {
      step: 2,
      text: "Intelligent staff roster optimization based on attendance data",
    },
  ] as const satisfies readonly WorkflowStep[],
} as const;

export const PRICING_SECTION = {
  id: "pricing",
  title: "Choose Your Power",
  description:
    "Scale your fitness empire with plans designed for every stage of growth.",
} as const;

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for boutique studios",
    price: 99,
    ctaLabel: "Choose Starter",
    features: [
      { label: "Up to 250 Members", included: true },
      { label: "Basic Management", included: true },
      { label: "POS Integration", included: true },
      { label: "AI Workflows", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing high-volume gyms",
    price: 249,
    ctaLabel: "Get Started with Pro",
    featured: true,
    badge: "Most Popular",
    features: [
      { label: "Unlimited Members", included: true },
      { label: "Advanced Management", included: true },
      { label: "Full POS & Inventory", included: true },
      { label: "Core AI Automations", included: true },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    description: "Multi-location enterprises",
    price: 599,
    ctaLabel: "Choose Elite",
    features: [
      { label: "Multi-location Support", included: true },
      { label: "Custom AI Workflows", included: true },
      { label: "Dedicated Account Manager", included: true },
      { label: "API Access", included: true },
    ],
  },
] as const;

export const TRUSTED_SECTION = {
  id: "trusted",
  title: "Trusted by Elite Fitness Brands",
} as const;

export const TRUSTED_BRANDS: readonly TrustedBrand[] = [
  { id: "ultrafit", name: "Ultrafit" },
  { id: "corezone", name: "Corezone" },
  { id: "peakgym", name: "Peakgym" },
  { id: "ironwill", name: "Ironwill" },
] as const;

export const CTA_SECTION = {
  id: "cta",
  title: "Ready to forge your legacy?",
  description:
    "Join the movement of tech-forward gym owners who are redefining the fitness industry with FitForge.",
  actions: [
    { href: "/sign-up", label: "Get Started Now", variant: "onBrand" },
    { href: "/#demo", label: "Schedule a Demo", variant: "dark" },
  ] as const satisfies readonly CtaAction[],
} as const;
