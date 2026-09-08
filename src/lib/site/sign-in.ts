export const SIGN_IN_PAGE = {
  title: "Welcome back",
  description: "Sign in to manage your fitness empire.",
  submitLabel: "Sign In",
  forgotLabel: "Forgot?",
  forgotHref: "/#forgot-password",
  createPrompt: "Don't have an account yet?",
  createLabel: "Create Account",
  createHref: "/sign-up",
  fields: [
    {
      id: "email",
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "john@gym.com",
      autoComplete: "email",
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••",
      autoComplete: "current-password",
      showForgot: true,
    },
  ] as const,
} as const;
