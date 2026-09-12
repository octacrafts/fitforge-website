import type { Metadata } from "next";
import { SIGN_UP_PAGE } from "@/lib/site-config";
import BrandLogo from "@/components/navbar/BrandLogo";
import SignUpPerkItem from "@/components/sign-up/SignUpPerkItem";
import SignUpForm from "@/components/sign-up/SignUpForm";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";

export const metadata: Metadata = {
  title: "Start Free Trial | FitForge",
  description: SIGN_UP_PAGE.panel.description,
};

export default function SignUpPage() {
  const { panel, form } = SIGN_UP_PAGE;

  return (
    <main className="flex h-dvh max-h-dvh w-full max-w-full flex-col overflow-hidden md:flex-row">
      <section
        data-theme="dark"
        className="relative flex min-h-0 w-full min-w-0 shrink-0 flex-col overflow-hidden bg-brand px-5 py-5 text-white max-md:max-h-[36%] sm:px-8 sm:py-6 md:h-full md:max-h-none md:w-1/2 md:px-12 md:py-10 lg:px-16 lg:py-14"
      >
        <Reveal variant="in">
          <BrandLogo variant="onBrand" />
        </Reveal>

        <div className="my-auto min-h-0 max-w-xl overflow-hidden pt-4 md:pt-14 lg:pt-20">
          <Reveal variant="left">
            <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[52px]">
              {panel.title}
            </h1>
          </Reveal>
          <Reveal variant="left" delay={0.1}>
            <p className="mt-3 text-sm leading-6 text-white/95 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
              {panel.description}
            </p>
          </Reveal>

          <Stagger className="mt-4 hidden flex-col gap-6 sm:mt-8 md:flex">
            {panel.perks.map((perk) => (
              <StaggerItem key={perk.id}>
                <SignUpPerkItem
                  icon={perk.icon}
                  title={perk.title}
                  description={perk.description}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        data-theme="light"
        className="flex min-h-0 w-full min-w-0 flex-1 items-center justify-center overflow-hidden bg-background px-5 pb-5 pt-10 sm:px-8 sm:pt-12 md:h-full md:px-12 md:pb-10 md:pt-20 lg:px-16 lg:pb-16 lg:pt-24"
      >
        <Reveal variant="right" className="mx-auto w-full max-w-md">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {form.title}
          </h2>
          <p className="mt-2 text-[15px] text-muted">{form.description}</p>
          <SignUpForm />
        </Reveal>
      </section>
    </main>
  );
}
