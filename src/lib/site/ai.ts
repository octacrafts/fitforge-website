import type {
  DarkPageIntroContent,
  ShowcaseImage,
} from "@/lib/site/types";

export const AI_WORKFLOWS_PAGE = {
  id: "ai-workflows",
  intro: {
    eyebrow: "Intelligence Unleashed",
    titleLead: "Your Personal",
    titleAccent: "Growth Engine.",
    description:
      "FitForge AI doesn't just show you data—it takes action. Automate retention, marketing, and operations with integrated intelligence.",
  },
  showcase: {
    src: "/ai-dashboard.png",
    alt: "FitForge AI analytics dashboard with fitness, activity, and purchase insights",
    width: 704,
    height: 511,
  },
  churn: {
    id: "predictive-churn",
    title: "Predictive Churn Analysis",
    description:
      "Our AI identifies members whose attendance patterns suggest they're about to cancel, allowing you to intervene with personalized offers before it's too late.",
    metric: {
      value: "92%",
      label: "Accuracy in Churn Prediction",
      detail:
        "Retain up to 30% more members through automated, data-driven intervention workflows.",
    },
  },
  features: [
    {
      id: "automated-marketing",
      title: "Automated Marketing Campaigns",
      description:
        "Let the AI handle your outreach. From lead nurturing emails to social media ad copy, FitForge generates and schedules content based on local gym trends.",
      mediaTone: "mint",
      mediaLabel: "Marketing",
      mediaImage: {
        src: "/hero-gym.png",
        alt: "Gym floor used in AI marketing campaign preview",
      },
      points: [
        { id: "content", icon: "wand", label: "AI Content Generation" },
        { id: "scheduling", icon: "refresh", label: "Dynamic Scheduling" },
        { id: "leads", icon: "target", label: "Lead Scoring & Prioritization" },
      ],
    },
  ],
} as const satisfies {
  id: string;
  intro: DarkPageIntroContent;
  showcase: ShowcaseImage;
  churn: {
    id: string;
    title: string;
    description: string;
    metric: { value: string; label: string; detail: string };
  };
  features: readonly {
    id: string;
    title: string;
    description: string;
    mediaTone: "mint" | "lavender" | "peach" | "sky";
    mediaLabel: string;
    mediaImage: { src: string; alt: string };
    points: readonly {
      id: string;
      icon: "wand" | "refresh" | "target";
      label: string;
    }[];
  }[];
};
