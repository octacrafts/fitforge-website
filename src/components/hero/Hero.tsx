"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { CTA } from "@/lib/site-config";
import Button from "@/components/ui/Button";
import PlayIcon from "@/components/ui/PlayIcon";
import { easeOut } from "@/lib/motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="demo" data-theme="light" className="bg-background px-6 pt-28 pb-16 sm:px-10 lg:px-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <p className="inline-flex rounded-full bg-badge px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            Next Gen Gym SaaS
          </p>
          <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
            Elevate your fitness business with{" "}
            <span className="text-brand">intelligence.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-muted sm:text-lg">
            FitForge is the only platform that merges advanced gym management
            with a revenue-generating POS and custom AI automation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={CTA.href} className="px-6 py-3">
              {CTA.heroLabel}
            </Button>
            <Button href={CTA.demoHref} variant="secondary" className="px-6 py-3">
              <PlayIcon />
              {CTA.demoLabel}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(26,32,44,0.18)]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: easeOut }}
        >
          <Image
            src="/hero-gym.png"
            alt="Modern gym floor with treadmills"
            width={488}
            height={476}
            className="h-full w-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
