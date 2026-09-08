import type { StatItem } from "@/lib/site-config";

type StatBlockProps = Pick<StatItem, "value" | "label">;

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div>
      <p className="text-4xl font-bold tracking-tight text-brand sm:text-5xl">{value}</p>
      <p className="mt-2 max-w-[12rem] text-sm leading-5 text-on-dark">{label}</p>
    </div>
  );
}
