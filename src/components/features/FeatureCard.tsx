import type { Feature } from "@/lib/site-config";
import FeatureIcon from "@/components/features/FeatureIcons";

type FeatureCardProps = Pick<Feature, "icon" | "title" | "description">;

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="rounded-2xl bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-icon-bg">
        <FeatureIcon id={icon} />
      </div>
      <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-muted">{description}</p>
    </article>
  );
}
