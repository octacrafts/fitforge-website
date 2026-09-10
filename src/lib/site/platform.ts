import type { PageIntroContent, ShowcaseImage } from "@/lib/site/types";

export const PLATFORM_PAGE = {
  id: "platform",
  intro: {
    titleLead: "The Engine of",
    titleAccent: "Modern Fitness.",
    description:
      "FitForge provides a comprehensive suite of management tools designed to automate your gym operations and elevate member experiences.",
  },
  showcase: {
    src: "/platform-dashboard.png",
    alt: "FitForge gym management dashboard on tablet",
    width: 696,
    height: 537,
    screens: [
      "/platform-dashboard.png",
      "/platform-onboarding.png",
      "/platform-classes.png",
      "/ai-dashboard.png",
    ],
  },
  onboarding: {
    id: "member-onboarding",
    title: "Seamless Member Onboarding",
    description:
      "Convert prospects into long-term members with a frictionless digital signup process, integrated contracts, and automated welcome sequences.",
    checks: [
      "Digital waivers and membership agreements",
      "Instant QR code check-in cards",
      "Automated billing setup",
    ],
    image: {
      src: "/platform-onboarding.png",
      alt: "Member using FitForge app on phone at the gym",
      width: 1024,
      height: 414,
    },
  },
  classes: {
    id: "class-management",
    title: "Intelligent Class Management",
    description:
      "Optimize your studio floor with dynamic scheduling, waitlist automation, and PT session booking that respects your trainers' time.",
    checks: [
      "Real-time class capacity tracking",
      "Waitlist management with push notifications",
      "Trainer payroll automation",
    ],
    image: {
      src: "/platform-classes.png",
      alt: "Trainer managing classes on a tablet in the gym",
      width: 1008,
      height: 432,
    },
  },
} as const satisfies {
  id: string;
  intro: PageIntroContent;
  showcase: ShowcaseImage;
  onboarding: {
    id: string;
    title: string;
    description: string;
    checks: readonly string[];
    image: ShowcaseImage;
  };
  classes: {
    id: string;
    title: string;
    description: string;
    checks: readonly string[];
    image: ShowcaseImage;
  };
};
