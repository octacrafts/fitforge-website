"use client";

import { PRICING_PAGE } from "@/lib/site-config";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";

export default function PricingFaqSection() {
  const { faq } = PRICING_PAGE;

  return (
    <section
      id={faq.id}
      data-theme="light"
      className="scroll-mt-24 bg-background px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal variant="scale">
          <div
            data-theme="dark"
            className="grid gap-10 rounded-[32px] bg-ink-alt px-8 py-10 sm:gap-12 sm:px-10 sm:py-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:rounded-[40px] lg:px-14 lg:py-14"
          >
            <Reveal variant="left" delay={0.08}>
              <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-[34px]">
                {faq.title}
              </h2>

              <Stagger className="mt-8 space-y-8 sm:mt-10">
                {faq.items.map((item) => (
                  <StaggerItem key={item.id}>
                    <h3 className="text-base font-semibold text-ink sm:text-lg">
                      {item.question}
                    </h3>
                    <p className="mt-2 max-w-xl text-[15px] leading-7 text-on-dark sm:text-base">
                      {item.answer}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal
              variant="right"
              delay={0.16}
              className="flex flex-col justify-center lg:pl-4"
            >
              <h3 className="text-base font-semibold text-ink sm:text-lg">
                {faq.enterprise.title}
              </h3>
              <p className="mt-2 max-w-md text-[15px] leading-7 text-on-dark sm:text-base">
                {faq.enterprise.description}
              </p>
              <div className="mt-6">
                <Button
                  href={faq.enterprise.ctaHref}
                  variant="primary"
                  className="px-6 py-3.5"
                >
                  {faq.enterprise.ctaLabel}
                </Button>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
