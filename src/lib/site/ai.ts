import type {
  DarkPageIntroContent,
  ShowcaseImage,
} from "@/lib/site/types";

export type AiWorkflowTone = "orange" | "blue" | "green";

export type AiWorkflowItem = {
  id: string;
  tone: AiWorkflowTone;
  title: string;
  description: string;
  whyItMatters: string;
  preview: {
    kind: "churn" | "revenue" | "capacity";
    label: string;
    value: string;
  };
};

export type AiAutomationTone = "orange" | "purple" | "teal";

export type AiAutomationItem = {
  id: string;
  tone: AiAutomationTone;
  title: string;
  description: string;
  whyItMatters: string;
  preview: {
    kind: "renewal" | "schedule" | "marketing";
    label: string;
    value: string;
  };
};

export const AI_WORKFLOWS_PAGE = {
  id: "ai-workflows",
  intro: {
    eyebrow: "Intelligence Unleashed",
    titleLead: "Your Personal",
    titleAccent: "Growth Engine.",
    description:
      "FitForge AI doesn't just show you data—it takes action. Automate retention, marketing, and operations with integrated intelligence.",
  },
  workflows: {
    id: "ai-workflow-cards",
    eyebrow: "AI WORKFLOWS",
    titleLead: "Know What's Coming,",
    titleAccent: "Before It Happens",
    description:
      "Your data doesn't just sit on a dashboard — it warns you and plans ahead for you.",
    items: [
      {
        id: "churn-prediction",
        tone: "orange",
        title: "Churn Prediction Alerts",
        description:
          "The system flags members who are likely to cancel — before they actually do — based on their attendance and activity patterns.",
        whyItMatters:
          "You can win members back instead of finding out they're gone after the fact.",
        preview: {
          kind: "churn",
          label: "Risk of Churn",
          value: "High",
        },
      },
      {
        id: "revenue-forecasting",
        tone: "blue",
        title: "Revenue Forecasting",
        description:
          "See where your revenue is heading next month, not just where it's been. Plan staffing, promotions, and expansion with real numbers.",
        whyItMatters: "Fewer surprises, better long-term planning.",
        preview: {
          kind: "revenue",
          label: "Next Month",
          value: "$48,320",
        },
      },
      {
        id: "capacity-planning",
        tone: "green",
        title: "Capacity Planning Insights",
        description:
          "Get ahead of demand — know when classes, trainers, or branches are approaching capacity so you can plan before it becomes a bottleneck.",
        whyItMatters: "Smarter growth decisions, no last-minute scrambling.",
        preview: {
          kind: "capacity",
          label: "Near Capacity",
          value: "85%",
        },
      },
    ] as const satisfies readonly AiWorkflowItem[],
  },
  automation: {
    id: "ai-automation-engine",
    eyebrow: "AUTOMATION ENGINE",
    titleLead: "Let the System Work",
    titleAccent: "While You Run the Gym",
    description:
      "The busywork happens on its own — reminders, scheduling, and re-engagement, fully automated.",
    items: [
      {
        id: "renewal-reminders",
        tone: "orange",
        title: "Automated Renewal & Expiry Reminders",
        description:
          "Membership expiry and renewal reminders go out on their own — no front-desk staff chasing members manually.",
        whyItMatters: "Higher renewal rates, zero \"forgotten\" members.",
        preview: {
          kind: "renewal",
          label: "Your membership expires in 3 days.",
          value: "Reminder",
        },
      },
      {
        id: "smart-scheduling",
        tone: "purple",
        title: "Smart Class & Trainer Scheduling",
        description:
          "Sessions get assigned automatically based on trainer availability and class capacity, with waitlists handled without manual intervention.",
        whyItMatters: "Higher class attendance, less admin chaos.",
        preview: {
          kind: "schedule",
          label: "Auto Assigned",
          value: "9:00 AM",
        },
      },
      {
        id: "behavior-marketing",
        tone: "teal",
        title: "Behavior-Based Marketing Automation",
        description:
          "SMS, email, and push notifications trigger automatically based on member behavior and segments — re-engaging inactive members without you lifting a finger.",
        whyItMatters:
          "Reactivates dormant members and lowers your marketing spend.",
        preview: {
          kind: "marketing",
          label: "We miss you! Come back & get 10% off.",
          value: "Campaign",
        },
      },
    ] as const satisfies readonly AiAutomationItem[],
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
  workflows: {
    id: string;
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    items: readonly AiWorkflowItem[];
  };
  automation: {
    id: string;
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    items: readonly AiAutomationItem[];
  };
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
