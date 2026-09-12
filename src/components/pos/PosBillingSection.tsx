"use client";

import { POS_BUSINESS_PAGE } from "@/lib/site-config";
import PosBillingCard from "@/components/pos/PosBillingCard";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import PillEyebrow from "@/components/ui/PillEyebrow";

export default function PosBillingSection() {
  const { billing } = POS_BUSINESS_PAGE;

  return (
    <section
      id={billing.id}
      data-theme="dark"
      className="scroll-mt-24 bg-ink-alt px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal variant="up" className="mx-auto max-w-3xl text-center">
          <PillEyebrow>{billing.eyebrow}</PillEyebrow>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[44px]">
            {billing.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-on-dark sm:text-lg">
            {billing.description}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {billing.items.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <PosBillingCard
                icon={item.icon}
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
