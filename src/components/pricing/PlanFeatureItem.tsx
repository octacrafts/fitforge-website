type PlanFeatureItemProps = {
  label: string;
  included: boolean;
};

export default function PlanFeatureItem({ label, included }: PlanFeatureItemProps) {
  return (
    <li className="flex items-center gap-3 text-[15px] leading-6 text-ink">
      {included ? (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
          <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
            <path
              d="M2.4 6.2l2.3 2.3 5-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      ) : (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center text-ink" aria-hidden="true">
          <svg viewBox="0 0 12 12" className="h-3.5 w-3.5">
            <path
              d="M3 3l6 6M9 3L3 9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </span>
      )}
      <span className={included ? "" : "text-muted"}>{label}</span>
    </li>
  );
}
