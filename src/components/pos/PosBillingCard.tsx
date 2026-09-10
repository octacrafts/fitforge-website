import type { PosBillingItem } from "@/lib/site/pos";
import PosBillingIcon from "@/components/pos/PosBillingIcon";

type PosBillingCardProps = Pick<
  PosBillingItem,
  "icon" | "title" | "description" | "whyItMatters"
>;

function WhyItMattersCheck({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="7" fill="currentColor" />
      <path
        d="M5 8.1l2 2 4-4.2"
        fill="none"
        stroke="var(--ink-alt)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PosBillingCard({
  icon,
  title,
  description,
  whyItMatters,
}: PosBillingCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[24px] border border-card-line bg-card-dark p-7 sm:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-icon-bg">
        <PosBillingIcon id={icon} />
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-on-dark">{description}</p>

      <div className="mt-auto border-t border-card-line pt-5">
        <div className="flex items-center gap-2 text-brand">
          <WhyItMattersCheck className="h-4 w-4 shrink-0 text-brand" />
          <p className="text-sm font-semibold">Why it matters:</p>
        </div>
        <p className="mt-2 text-[14px] leading-6 text-on-dark">{whyItMatters}</p>
      </div>
    </article>
  );
}
