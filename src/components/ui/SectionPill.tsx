"use client";

import type { ReactNode } from "react";
import PillEyebrow from "@/components/ui/PillEyebrow";

type SectionPillProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

/** Alias of PillEyebrow — keeps a single animation + brand style source. */
export default function SectionPill({
  children,
  icon,
  className = "",
}: SectionPillProps) {
  return (
    <PillEyebrow className={className}>
      {icon}
      {children}
    </PillEyebrow>
  );
}
