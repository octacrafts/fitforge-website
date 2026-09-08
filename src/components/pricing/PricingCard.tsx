"use client";

import { motion, useReducedMotion } from "motion/react";
import type { PricingPlan } from "@/lib/site-config";
import { CTA } from "@/lib/site-config";
import Button from "@/components/ui/Button";
import PlanFeatureItem from "@/components/pricing/PlanFeatureItem";
import { easeOut } from "@/lib/motion";

type PricingCardProps = {
  plan: PricingPlan;
};

export default function PricingCard({ plan }: PricingCardProps) {
  const featured = Boolean(plan.featured);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`relative flex h-full flex-col rounded-[28px] bg-card p-8 ${
        featured
          ? "border-2 border-brand shadow-[0_18px_40px_rgba(255,127,39,0.18)]"
          : "border border-card-line"
      }`}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
              boxShadow: featured
                ? "0 24px 48px rgba(255,127,39,0.28)"
                : "var(--shadow-card)",
            }
      }
      transition={{ duration: 0.3, ease: easeOut }}
    >
      {plan.badge ? (
        <motion.span
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white"
          initial={reduceMotion ? false : { opacity: 0, y: 8, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.25, ease: easeOut }}
        >
          {plan.badge}
        </motion.span>
      ) : null}

      <div>
        <h3 className="text-2xl font-bold text-ink">{plan.name}</h3>
        <p className="mt-2 text-[15px] text-muted">{plan.description}</p>
      </div>

      <p className="mt-6 flex items-end gap-1">
        <span className="text-5xl font-bold tracking-tight text-ink">${plan.price}</span>
        <span className="pb-1 text-base text-muted">/mo</span>
      </p>

      <ul className="mt-8 flex flex-1 flex-col gap-4">
        {plan.features.map((feature) => (
          <PlanFeatureItem
            key={feature.label}
            label={feature.label}
            included={feature.included}
          />
        ))}
      </ul>

      <Button
        href={CTA.href}
        variant={featured ? "primary" : "secondary"}
        className="mt-auto w-full px-6 py-3.5 pt-8"
      >
        {plan.ctaLabel}
      </Button>
    </motion.article>
  );
}
