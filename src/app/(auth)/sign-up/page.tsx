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
    <main className="min-h-full lg:grid lg:grid-cols-2">
      <section
        data-theme="dark"
        className="relative flex flex-col bg-brand px-8 py-10 text-white sm:px-12 lg:px-16 lg:py-14"
      >
        <Reveal variant="in">
          <BrandLogo variant="onBrand" />
        </Reveal>

        <div className="my-auto max-w-xl pt-14 lg:pt-20">
          <Reveal variant="left">
            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-[52px]">
              {panel.title}
            </h1>
          </Reveal>
          <Reveal variant="left" delay={0.1}>
            <p className="mt-5 text-base leading-8 text-white/95 sm:text-lg">
              {panel.description}
            </p>
          </Reveal>

          <Stagger className="mt-10 flex flex-col gap-6">
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
        className="flex items-center bg-background px-6 py-12 sm:px-10 lg:px-16 lg:py-16"
      >
        <Reveal variant="right" className="mx-auto w-full max-w-md">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            {form.title}
          </h2>
          <p className="mt-2 text-[15px] text-muted">{form.description}</p>
          <SignUpForm />
        </Reveal>
      </section>
    </main>
  );
}
