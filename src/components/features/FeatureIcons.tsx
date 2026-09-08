import type { ReactNode } from "react";
import type { FeatureIconId } from "@/lib/site-config";

type IconProps = {
  className?: string;
};

function MembersIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="11.5" r="2.25" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.5 18.5c.7-2.2 2.4-3.4 4.6-3.4 1.1 0 2 .3 2.7.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12.2 16c.7-.5 1.6-.8 2.7-.8 2.2 0 3.9 1.2 4.6 3.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="18.6" cy="17" r="2.15" fill="var(--icon-bg)" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M18.6 15.35v.7M18.6 18v.7M17 17h.7M19.5 17h.7M17.4 15.8l.5.5M19.3 17.7l.5.5M17.4 18.2l.5-.5M19.3 16.3l.5-.5"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path
        d="M9 15.2l2 2 4.2-4.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 4.5a7.5 7.5 0 1 1-6.5 3.75"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path d="M12 4.5v7.5H20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

const FEATURE_ICONS: Record<FeatureIconId, (props: IconProps) => ReactNode> = {
  members: MembersIcon,
  calendar: CalendarIcon,
  chart: ChartIcon,
};

export default function FeatureIcon({ id }: { id: FeatureIconId }) {
  const Icon = FEATURE_ICONS[id];
  return <Icon className="h-6 w-6 text-brand" />;
}
