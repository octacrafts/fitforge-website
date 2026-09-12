import type { AiAutomationItem, AiAutomationTone } from "@/lib/site/ai";

export const AI_AUTOMATION_TONE: Record<
  AiAutomationTone,
  {
    accent: string;
    soft: string;
    border: string;
    glow: string;
    whyBorder: string;
  }
> = {
  orange: {
    accent: "text-[#FF8A3D]",
    soft: "bg-[#FF8A3D]/15",
    border: "border-[#FF8A3D]/30",
    glow: "shadow-[0_0_28px_rgba(255,138,61,0.25)]",
    whyBorder: "border-l-[#FF8A3D]",
  },
  purple: {
    accent: "text-[#A78BFA]",
    soft: "bg-[#A78BFA]/15",
    border: "border-[#A78BFA]/30",
    glow: "shadow-[0_0_28px_rgba(167,139,250,0.25)]",
    whyBorder: "border-l-[#A78BFA]",
  },
  teal: {
    accent: "text-[#2DD4BF]",
    soft: "bg-[#2DD4BF]/15",
    border: "border-[#2DD4BF]/30",
    glow: "shadow-[0_0_28px_rgba(45,212,191,0.25)]",
    whyBorder: "border-l-[#2DD4BF]",
  },
};

type IconProps = { className?: string; tone: AiAutomationTone };

export function AiAutomationLeadIcon({
  className = "h-5 w-5",
  tone,
}: IconProps) {
  const color =
    tone === "orange"
      ? "text-[#FF8A3D]"
      : tone === "purple"
        ? "text-[#A78BFA]"
        : "text-[#2DD4BF]";

  if (tone === "orange") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
        <path
          d="M15.2 4.5a5.2 5.2 0 0 1 0 10.3M8.8 6.8a5.2 5.2 0 1 0 4.2 7.9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M12 14.5V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (tone === "purple") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
        <rect x="5" y="6" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M8 4.5v3M16 4.5v3M5 10h14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
      <path
        d="M4.5 10.5l5.5 2.2 9.5-6.2-9.5 10.2L11 21l-1.2-5.3L4.5 10.5z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AiAutomationWhyIcon({
  className = "h-4 w-4",
  tone,
}: IconProps) {
  const color =
    tone === "orange"
      ? "text-[#FF8A3D]"
      : tone === "purple"
        ? "text-[#A78BFA]"
        : "text-[#2DD4BF]";

  if (tone === "orange") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
        <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (tone === "purple") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
        <circle cx="9" cy="8.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="15.5" cy="8.8" r="2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M5 17.5c.8-2 2.2-3.1 4-3.1 1.1 0 2 .3 2.7.9M13 15.2c.7-.4 1.5-.6 2.5-.6 1.7 0 3 1 3.7 2.9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
      <path
        d="M16.5 7.5A5.5 5.5 0 1 1 9 14.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M9 9.5v4.7H13.7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PreviewProps = {
  item: Pick<AiAutomationItem, "tone" | "preview">;
};

export function AiAutomationPreview({ item }: PreviewProps) {
  const tone = AI_AUTOMATION_TONE[item.tone];

  if (item.preview.kind === "renewal") {
    return (
      <div
        className={`relative w-[122px] rotate-6 rounded-2xl border border-card-line bg-card p-3 shadow-[var(--shadow-card)] ${tone.glow}`}
      >
        <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-icon-bg">
          <span className="text-xs">📱</span>
        </div>
        <div className={`rounded-xl px-2.5 py-2 text-[10px] leading-4 text-ink ${tone.soft}`}>
          {item.preview.label}
        </div>
      </div>
    );
  }

  if (item.preview.kind === "schedule") {
    return (
      <div
        className={`relative w-[122px] -rotate-3 rounded-2xl border border-card-line bg-card p-3 shadow-[var(--shadow-card)] ${tone.glow}`}
      >
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold text-ink">9:00 AM</span>
            <span className="flex -space-x-1">
              <span className="h-4 w-4 rounded-full bg-card-line" />
              <span className="h-4 w-4 rounded-full bg-icon-bg" />
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold text-ink">10:00 AM</span>
            <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold text-ink ${tone.soft}`}>
              {item.preview.label}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-[122px] rotate-3 rounded-2xl border border-card-line bg-card p-3 shadow-[var(--shadow-card)] ${tone.glow}`}
    >
      <div className="mb-2 flex h-8 items-center justify-center rounded-lg bg-icon-bg text-sm">
        ✉
      </div>
      <div className={`rounded-xl px-2.5 py-2 text-[10px] leading-4 text-ink ${tone.soft}`}>
        {item.preview.label}
      </div>
    </div>
  );
}
