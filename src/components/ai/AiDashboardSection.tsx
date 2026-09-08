"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { AI_WORKFLOWS_PAGE } from "@/lib/site-config";
import { easeOut } from "@/lib/motion";

export default function AiDashboardSection() {
  const { showcase } = AI_WORKFLOWS_PAGE;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ai-dashboard"
      data-theme="dark"
      className="scroll-mt-24 bg-ink-alt px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16"
    >
      <div className="relative mx-auto max-w-[1100px]">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[90px]"
          initial={reduceMotion ? false : { opacity: 0.35, scale: 0.9 }}
          whileInView={{ opacity: 0.7, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: easeOut }}
        />

        <motion.div
          className="relative overflow-hidden rounded-[24px] border border-card-line bg-card-dark shadow-[var(--shadow-card)] ring-1 ring-brand/20 sm:rounded-[28px]"
          initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easeOut }}
          whileHover={reduceMotion ? undefined : { y: -6 }}
        >
          <Image
            src={showcase.src}
            alt={showcase.alt}
            width={showcase.width}
            height={showcase.height}
            className="h-auto w-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
