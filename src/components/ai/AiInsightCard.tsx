import type { AiInsight } from "@/lib/site-config";
import AiIcon from "@/components/ai/AiIcons";

type AiInsightCardProps = Pick<AiInsight, "icon" | "title" | "description"> & {
  className?: string;
};

export default function AiInsightCard({
  icon,
  title,
  description,
  className = "",
}: AiInsightCardProps) {
  return (
    <article
      className={`rounded-[28px] border border-card-line bg-card-dark p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${className}`}
    >
      <AiIcon id={icon} />
      <h3 className="mt-6 text-[22px] font-bold leading-tight tracking-tight text-ink">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-6 text-on-dark">{description}</p>
    </article>
  );
}
