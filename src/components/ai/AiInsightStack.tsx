import type { AiInsight } from "@/lib/site-config";
import AiInsightCard from "@/components/ai/AiInsightCard";

type AiInsightStackProps = {
  insights: readonly AiInsight[];
};

export default function AiInsightStack({ insights }: AiInsightStackProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
      {insights.map((insight) => (
        <AiInsightCard
          key={insight.id}
          icon={insight.icon}
          title={insight.title}
          description={insight.description}
        />
      ))}
    </div>
  );
}
