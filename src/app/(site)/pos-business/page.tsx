import type { Metadata } from "next";
import { POS_BUSINESS_PAGE } from "@/lib/site-config";
import PosHero from "@/components/pos/PosHero";
import PosRetailSection from "@/components/pos/PosRetailSection";
import PosBillingSection from "@/components/pos/PosBillingSection";
import PosFeaturesSection from "@/components/pos/PosFeaturesSection";

export const metadata: Metadata = {
  title: "POS Business | FitForge",
  description: POS_BUSINESS_PAGE.intro.description,
};

export default function PosBusinessPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PosHero />
      <PosRetailSection />
      <PosBillingSection />
      <PosFeaturesSection />
    </div>
  );
}
