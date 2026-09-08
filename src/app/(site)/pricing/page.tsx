import type { Metadata } from "next";
import { PRICING_PAGE } from "@/lib/site-config";
import PageIntro from "@/components/ui/PageIntro";
import PricingSection from "@/components/pricing/PricingSection";
import PricingFaqSection from "@/components/pricing/PricingFaqSection";

export const metadata: Metadata = {
  title: "Pricing | FitForge",
  description: PRICING_PAGE.intro.description,
};

export default function PricingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageIntro
        titleLead={PRICING_PAGE.intro.titleLead}
        titleAccent={PRICING_PAGE.intro.titleAccent}
        description={PRICING_PAGE.intro.description}
      />
      <PricingSection showHeader={false} className="pt-6 sm:pt-8 lg:pt-10" />
      <PricingFaqSection />
    </div>
  );
}
