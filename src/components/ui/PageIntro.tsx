"use client";

import type { PageIntroContent } from "@/lib/site-config";
import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

type PageIntroProps = PageIntroContent & {
  className?: string;
};

export default function PageIntro({
  titleLead,
  titleAccent,
  description,
  className = "",
}: PageIntroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={`bg-surface px-6 pb-10 pt-32 text-center sm:px-10 sm:pb-12 sm:pt-36 lg:px-16 ${className}`}
      data-theme="light"
    >
      <div className="mx-auto max-w-[1400px]">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
          <motion.span
            className="block"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            {titleLead}
          </motion.span>
          <motion.span
            className="block text-brand"
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
          >
            {titleAccent}
          </motion.span>
        </h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: easeOut }}
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
