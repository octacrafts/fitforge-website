import type { PosRetailItem } from "@/lib/site/pos";
import {
  PosRetailIllustration,
  PosRetailWhyIcon,
} from "@/components/pos/PosRetailVisuals";

type PosRetailCardProps = Pick<
  PosRetailItem,
  "step" | "illustration" | "title" | "description" | "whyItMatters"
>;

export default function PosRetailCard({
  step,
  illustration,
  title,
  description,
  whyItMatters,
}: PosRetailCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[24px] border border-card-line bg-card p-6 shadow-[var(--shadow-card)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <span className="text-sm font-bold tracking-wide text-brand">{step}</span>
        <PosRetailIllustration id={illustration} />
      </div>

      <h3 className="mt-5 text-xl font-bold tracking-tight text-ink sm:text-[22px]">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-7 text-muted">{description}</p>

      <div className="mt-auto flex items-start gap-3 rounded-2xl bg-surface p-4">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-icon-bg">
          <PosRetailWhyIcon id={illustration} />
        </span>
        <p className="text-[14px] leading-6 text-muted">
          <span className="font-semibold text-brand">Why it matters: </span>
          {whyItMatters}
        </p>
      </div>
    </article>
  );
}
