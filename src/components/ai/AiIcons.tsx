import type { ReactNode } from "react";
import type { AiIconId } from "@/lib/site-config";

type IconProps = {
  className?: string;
};

function RobotIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.5v2.2M8.2 20.5v-1.3M15.8 20.5v-1.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect
        x="4.5"
        y="7.5"
        width="15"
        height="11.5"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="9.2" cy="13" r="1.35" fill="currentColor" />
      <circle cx="14.8" cy="13" r="1.35" fill="currentColor" />
      <circle cx="12" cy="3.2" r="1.2" fill="currentColor" />
    </svg>
  );
}

function BoltIcon({ className = "h-8 w-8" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M13.4 2.8L6.2 13.2h5.4L10.6 21.2l7.2-10.4h-5.4L13.4 2.8z"
        fill="currentColor"
      />
    </svg>
  );
}

const AI_ICONS: Record<AiIconId, (props: IconProps) => ReactNode> = {
  robot: RobotIcon,
  bolt: BoltIcon,
};

export default function AiIcon({ id }: { id: AiIconId }) {
  const Icon = AI_ICONS[id];
  return <Icon className="h-8 w-8 text-brand" />;
}
