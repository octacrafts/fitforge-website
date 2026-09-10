"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { easeOut, transitionBase, viewOnce } from "@/lib/motion";

type PillEyebrowProps = {
  children: ReactNode;
  className?: string;
  withRails?: boolean;
};

const pillMotion = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
} as const;

const railMotion = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1 },
} as const;

/**
 * Section pill label — brand tokens + shared entrance motion (one place → all usages).
 */
export default function PillEyebrow({
  children,
  className = "",
  withRails = false,
}: PillEyebrowProps) {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: viewOnce,
      };

  const pill = (
    <motion.p
      className={`inline-flex items-center gap-2 rounded-full border border-brand bg-card-dark px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-brand ${className}`}
      variants={pillMotion}
      transition={{ ...transitionBase, duration: 0.45 }}
      {...motionProps}
    >
      {children}
    </motion.p>
  );

  if (!withRails) return pill;

  return (
    <div className="flex items-center justify-center gap-3">
      <motion.span
        className="hidden h-px w-10 origin-right bg-brand sm:block"
        aria-hidden
        variants={railMotion}
        transition={{ duration: 0.5, ease: easeOut }}
        {...motionProps}
      />
      {pill}
      <motion.span
        className="hidden h-px w-10 origin-left bg-brand sm:block"
        aria-hidden
        variants={railMotion}
        transition={{ duration: 0.5, ease: easeOut }}
        {...motionProps}
      />
    </div>
  );
}
