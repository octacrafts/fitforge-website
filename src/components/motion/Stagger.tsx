"use client";

import { motion, useReducedMotion } from "motion/react";
import { staggerContainer, viewOnce } from "@/lib/motion";

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Stagger({ children, className = "" }: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewOnce}
    >
      {children}
    </motion.div>
  );
}
