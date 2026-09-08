import type { SignUpField, SignUpPerk } from "@/lib/site/types";

export const SIGN_UP_PAGE = {
  panel: {
    title: "Start for free, grow forever.",
    description:
      "Join 5,000+ gym owners who are scaling their businesses with FitForge intelligence.",
    perks: [
      {
        id: "trial-access",
        icon: "check",
        title: "14-Day Full Access Trial",
        description: "No features locked. Explore the full power of FitForge.",
      },
      {
        id: "no-card",
        icon: "shield",
        title: "No Credit Card Required",
        description: "Start your trial without entering payment details.",
      },
    ] as const satisfies readonly SignUpPerk[],
  },
  form: {
    title: "Create your account",
    description: "Experience the next generation of gym management.",
    submitLabel: "Create My Account",
    termsPrefix: "I agree to the",
    termsLabel: "Terms of Service",
    termsHref: "/#terms",
    privacyLabel: "Privacy Policy",
    privacyHref: "/#privacy",
    signInPrompt: "Already have an account?",
    signInLabel: "Sign In",
    signInHref: "/sign-in",
    fields: [
      {
        id: "firstName",
        name: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "John",
        autoComplete: "given-name",
        half: true,
      },
      {
        id: "lastName",
        name: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Doe",
        autoComplete: "family-name",
        half: true,
      },
      {
        id: "businessName",
        name: "businessName",
        label: "Gym / Business Name",
        type: "text",
        placeholder: "FitZone Studio",
        autoComplete: "organization",
        half: false,
      },
      {
        id: "email",
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "john@gym.com",
        autoComplete: "email",
        half: false,
      },
      {
        id: "password",
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "........",
        autoComplete: "new-password",
        half: false,
      },
    ] as const satisfies readonly SignUpField[],
  },
} as const;
