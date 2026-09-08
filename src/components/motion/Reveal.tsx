"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import {
  fadeUp,
  transitionBase,
  viewOnce,
} from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delay?: number;
  variant?: "up" | "in" | "left" | "right" | "scale";
};

const VARIANTS = {
  up: fadeUp,
  in: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  left: { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
} as const;

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
      transition={{ ...transitionBase, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
