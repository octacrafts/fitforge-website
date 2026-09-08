"use client";

import type { DarkPageIntroContent } from "@/lib/site-config";
import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

type DarkPageIntroProps = DarkPageIntroContent & {
  className?: string;
};

export default function DarkPageIntro({
  eyebrow,
  titleLead,
  titleAccent,
  description,
  className = "",
}: DarkPageIntroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      data-theme="dark"
      className={`bg-ink-alt px-6 pt-32 text-center sm:px-10 sm:pt-36 lg:px-16 pb-10 sm:pb-12 lg:pb-14 ${className}`}
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.p
          className="inline-flex rounded-full border border-brand/35 bg-brand/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-brand sm:text-xs"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          {eyebrow}
        </motion.p>

        <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:mt-8 sm:text-5xl lg:text-[56px]">
          <motion.span
            className="block sm:inline"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: easeOut }}
          >
            {titleLead}{" "}
          </motion.span>
          <motion.span
            className="block text-brand sm:inline"
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.16, ease: easeOut }}
          >
            {titleAccent}
          </motion.span>
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-on-dark sm:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28, ease: easeOut }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
