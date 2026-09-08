"use client";

import { motion, useReducedMotion } from "motion/react";
import { fadeUp, transitionBase } from "@/lib/motion";

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export default function StaggerItem({ children, className = "" }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={transitionBase}
    >
      {children}
    </motion.div>
  );
}
