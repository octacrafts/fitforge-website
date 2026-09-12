import type { AiWorkflowItem, AiWorkflowTone } from "@/lib/site/ai";

export const AI_WORKFLOW_TONE: Record<
  AiWorkflowTone,
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
  blue: {
    accent: "text-[#4DA3FF]",
    soft: "bg-[#4DA3FF]/15",
    border: "border-[#4DA3FF]/30",
    glow: "shadow-[0_0_28px_rgba(77,163,255,0.25)]",
    whyBorder: "border-l-[#4DA3FF]",
  },
  green: {
    accent: "text-[#3DDC97]",
    soft: "bg-[#3DDC97]/15",
    border: "border-[#3DDC97]/30",
    glow: "shadow-[0_0_28px_rgba(61,220,151,0.25)]",
    whyBorder: "border-l-[#3DDC97]",
  },
};

type IconProps = { className?: string; tone: AiWorkflowTone };

export function AiWorkflowLeadIcon({ className = "h-5 w-5", tone }: IconProps) {
  const color =
    tone === "orange"
      ? "text-[#FF8A3D]"
      : tone === "blue"
        ? "text-[#4DA3FF]"
        : "text-[#3DDC97]";

  if (tone === "orange") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M6.5 18.5c1.2-2.6 3-4 5.5-4s4.3 1.4 5.5 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="17.5" cy="6.5" r="3" fill="currentColor" />
        <path
          d="M17.5 5.2v1.8M17.5 8.4v.2"
          stroke="var(--card-dark)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (tone === "blue") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
        <path
          d="M4.5 15.5l4-4 3 2.5 5.5-6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 8h4.2v4.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
      <circle cx="9" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.5" cy="8.5" r="2.1" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.8 17.5c.8-2.1 2.2-3.2 4.2-3.2 1.2 0 2.2.4 3 .1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M12.8 14.8c.7-.4 1.5-.6 2.5-.6 1.8 0 3.1 1 3.8 2.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function AiWorkflowWhyIcon({ className = "h-4 w-4", tone }: IconProps) {
  const color =
    tone === "orange"
      ? "text-[#FF8A3D]"
      : tone === "blue"
        ? "text-[#4DA3FF]"
        : "text-[#3DDC97]";

  if (tone === "orange") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={`${className} ${color}`} aria-hidden>
        <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (tone === "blue") {
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
        d="M9.5 17.5h5M10.2 20h3.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8.2 14.8c-1.5-1.2-2.4-3-2.4-5A6.2 6.2 0 0 1 12 3.6a6.2 6.2 0 0 1 6.2 6.2c0 2-.9 3.8-2.4 5H8.2z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PreviewProps = {
  item: Pick<AiWorkflowItem, "tone" | "preview">;
};

export function AiWorkflowPreview({ item }: PreviewProps) {
  const tone = AI_WORKFLOW_TONE[item.tone];

  if (item.preview.kind === "churn") {
    return (
      <div
        className={`relative w-[118px] rotate-6 rounded-2xl border border-card-line bg-card p-3 shadow-[var(--shadow-card)] ${tone.glow}`}
      >
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-full bg-icon-bg" />
          <span className="h-2 w-12 rounded bg-card-line" />
        </div>
        <div
          className={`mt-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold text-ink ${tone.soft}`}
        >
          <span aria-hidden>⚠</span> {item.preview.label}
        </div>
      </div>
    );
  }

  if (item.preview.kind === "revenue") {
    return (
      <div
        className={`relative w-[118px] -rotate-3 rounded-2xl border border-card-line bg-card p-3 shadow-[var(--shadow-card)] ${tone.glow}`}
      >
        <p className="text-[10px] text-on-dark">{item.preview.label}</p>
        <p className="mt-0.5 text-sm font-bold text-ink">{item.preview.value}</p>
        <svg viewBox="0 0 90 36" className="mt-2 h-9 w-full" aria-hidden>
          <path
            d="M2 28 L16 22 L30 24 L44 14 L58 18 L72 8 L88 12"
            fill="none"
            stroke="#4DA3FF"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M10 30h8M28 30h8M46 30h8M64 30h8"
            stroke="#4DA3FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative w-[118px] rotate-3 rounded-2xl border border-card-line bg-card p-3 shadow-[var(--shadow-card)] ${tone.glow}`}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
          <circle cx="24" cy="24" r="18" stroke="var(--card-line)" strokeWidth="5" fill="none" />
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="#3DDC97"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="95 120"
            transform="rotate(-90 24 24)"
          />
          <text
            x="24"
            y="27"
            textAnchor="middle"
            fill="var(--ink)"
            fontSize="10"
            fontWeight="700"
          >
            {item.preview.value}
          </text>
        </svg>
      </div>
      <div
        className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold text-ink ${tone.soft}`}
      >
        {item.preview.label}
      </div>
    </div>
  );
}
