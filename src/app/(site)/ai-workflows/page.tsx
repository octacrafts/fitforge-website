import type { Metadata } from "next";
import { AI_WORKFLOWS_PAGE } from "@/lib/site-config";
import DarkPageIntro from "@/components/ui/DarkPageIntro";
import AiGrowthSlider from "@/components/ai/AiGrowthSlider";
import AiAutomationSection from "@/components/ai/AiAutomationSection";
import AiWorkflowsSection from "@/components/ai/AiWorkflowsSection";
import AiDashboardSection from "@/components/ai/AiDashboardSection";
import AiChurnSection from "@/components/ai/AiChurnSection";
import AiFeatureBlock from "@/components/ai/AiFeatureBlock";

export const metadata: Metadata = {
  title: "AI Workflows | FitForge",
  description: AI_WORKFLOWS_PAGE.intro.description,
};

export default function AiWorkflowsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <DarkPageIntro
        eyebrow={AI_WORKFLOWS_PAGE.intro.eyebrow}
        titleLead={AI_WORKFLOWS_PAGE.intro.titleLead}
        titleAccent={AI_WORKFLOWS_PAGE.intro.titleAccent}
        description={AI_WORKFLOWS_PAGE.intro.description}
      />
      <AiDashboardSection />
      <AiGrowthSlider />
      <AiAutomationSection />
      <AiWorkflowsSection />
      <AiChurnSection />
      {AI_WORKFLOWS_PAGE.features.map((feature) => (
        <AiFeatureBlock key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
