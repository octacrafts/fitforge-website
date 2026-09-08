import type { ReactNode } from "react";
import type { SignUpPerk } from "@/lib/site-config";

type IconProps = {
  className?: string;
};

function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M3.2 8.2l3 3 6.4-6.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        d="M8 1.6l5.2 2.2v3.7c0 3.1-2.1 5.8-5.2 6.9-3.1-1.1-5.2-3.8-5.2-6.9V3.8L8 1.6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M5.8 8.1l1.6 1.6 2.8-2.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const PERK_ICONS: Record<SignUpPerk["icon"], (props: IconProps) => ReactNode> = {
  check: CheckIcon,
  shield: ShieldIcon,
};

type SignUpPerkItemProps = Pick<SignUpPerk, "icon" | "title" | "description">;

export default function SignUpPerkItem({
  icon,
  title,
  description,
}: SignUpPerkItemProps) {
  const Icon = PERK_ICONS[icon];

  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm leading-6 text-white/90">{description}</p>
      </div>
    </div>
  );
}
