"use client";

import { POS_BUSINESS_PAGE } from "@/lib/site-config";
import PosRetailCard from "@/components/pos/PosRetailCard";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import PillEyebrow from "@/components/ui/PillEyebrow";

export default function PosRetailSection() {
  const { retail } = POS_BUSINESS_PAGE;

  return (
    <section
      id={retail.id}
      data-theme="dark"
      className="relative scroll-mt-24 overflow-hidden bg-ink-alt px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <PillEyebrow withRails>{retail.eyebrow}</PillEyebrow>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {retail.titleLead}{" "}
            <span className="text-brand">{retail.titleAccent}</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-on-dark sm:text-lg">
            {retail.description}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {retail.items.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <PosRetailCard
                step={item.step}
                illustration={item.illustration}
                title={item.title}
                description={item.description}
                whyItMatters={item.whyItMatters}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
