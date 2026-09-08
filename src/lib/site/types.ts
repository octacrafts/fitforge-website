export type NavLink = {
  href: string;
  label: string;
};

export type FeatureIconId = "members" | "calendar" | "chart";

export type Feature = {
  id: string;
  icon: FeatureIconId;
  title: string;
  description: string;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
};

export type AiIconId = "robot" | "bolt";

export type AiInsight = {
  id: string;
  icon: AiIconId;
  title: string;
  description: string;
};

export type WorkflowStep = {
  step: number;
  text: string;
};

export type PricingFeature = {
  label: string;
  included: boolean;
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: number;
  ctaLabel: string;
  featured?: boolean;
  badge?: string;
  features: readonly PricingFeature[];
};

export type TrustedBrand = {
  id: string;
  name: string;
};

export type CtaAction = {
  href: string;
  label: string;
  variant: "onBrand" | "dark";
};

export type PageIntroContent = {
  titleLead: string;
  titleAccent: string;
  description: string;
};

export type ShowcaseImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type DarkPageIntroContent = PageIntroContent & {
  eyebrow: string;
};

export type SignUpPerk = {
  id: string;
  icon: "check" | "shield";
  title: string;
  description: string;
};

export type SignUpField = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete?: string;
  half?: boolean;
};

export type FooterLinkGroup = {
  title: string;
  links: readonly NavLink[];
};

export type SocialLink = {
  id: "instagram" | "twitter" | "linkedin";
  href: string;
  label: string;
};
