import type { AiAutomationItem } from "@/lib/site/ai";
import {
  AI_AUTOMATION_TONE,
  AiAutomationLeadIcon,
  AiAutomationPreview,
  AiAutomationWhyIcon,
} from "@/components/ai/AiAutomationVisuals";

type AiAutomationCardProps = Pick<
  AiAutomationItem,
  "tone" | "title" | "description" | "whyItMatters" | "preview"
>;

export default function AiAutomationCard({
  tone,
  title,
  description,
  whyItMatters,
  preview,
}: AiAutomationCardProps) {
  const theme = AI_AUTOMATION_TONE[tone];

  return (
    <article className="flex h-full flex-col rounded-[24px] border border-card-line bg-card-dark p-6 shadow-[var(--shadow-card)] sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${theme.border} ${theme.soft}`}
        >
          <AiAutomationLeadIcon tone={tone} />
        </span>
        <AiAutomationPreview item={{ tone, preview }} />
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-on-dark">{description}</p>

      <div
        className={`mt-auto flex items-start gap-3 rounded-2xl border-l-2 bg-ink-dark p-4 ${theme.whyBorder}`}
      >
        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${theme.border} ${theme.soft}`}
        >
          <AiAutomationWhyIcon tone={tone} />
        </span>
        <p className="text-[14px] leading-6 text-on-dark">
          <span className={`font-semibold ${theme.accent}`}>Why it matters: </span>
          {whyItMatters}
        </p>
      </div>
    </article>
  );
}
