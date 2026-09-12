"use client";

import { AI_WORKFLOWS_PAGE } from "@/lib/site-config";
import AiAutomationCard from "@/components/ai/AiAutomationCard";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import PillEyebrow from "@/components/ui/PillEyebrow";

export default function AiAutomationSection() {
  const { automation } = AI_WORKFLOWS_PAGE;

  return (
    <section
      id={automation.id}
      data-theme="dark"
      className="relative scroll-mt-24 overflow-hidden bg-ink-alt px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-8 h-40 w-[28rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <PillEyebrow>
            <span aria-hidden>⚡</span>
            {automation.eyebrow}
          </PillEyebrow>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {automation.titleLead} {automation.titleAccent}
          </h2>

          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            {automation.description}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {automation.items.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <AiAutomationCard
                tone={item.tone}
                title={item.title}
                description={item.description}
                whyItMatters={item.whyItMatters}
                preview={item.preview}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
