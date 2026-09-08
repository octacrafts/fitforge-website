import type { Metadata } from "next";
import { SIGN_IN_PAGE } from "@/lib/site-config";
import BrandLogo from "@/components/navbar/BrandLogo";
import SignInForm from "@/components/sign-in/SignInForm";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Sign In | FitForge",
  description: SIGN_IN_PAGE.description,
};

export default function SignInPage() {
  return (
    <main
      data-theme="dark"
      className="flex min-h-dvh w-full flex-1 items-center justify-center bg-ink-alt px-4 py-10 sm:px-6"
    >
      <Reveal
        variant="up"
        className="w-full max-w-[420px] rounded-[28px] bg-card px-8 py-10 shadow-[var(--shadow-card)] sm:px-10 sm:py-12"
      >
        <div className="text-center">
          <BrandLogo className="inline-block text-[26px]" />
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-ink sm:text-[34px]">
            {SIGN_IN_PAGE.title}
          </h1>
          <p className="mt-2 text-[15px] text-muted">{SIGN_IN_PAGE.description}</p>
        </div>

        <SignInForm />
      </Reveal>
    </main>
  );
}
