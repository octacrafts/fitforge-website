import Hero from "@/components/hero/Hero";
import FeaturesSection from "@/components/features/FeaturesSection";
import PosSection from "@/components/pos/PosSection";
import AiSection from "@/components/ai/AiSection";
import PricingSection from "@/components/pricing/PricingSection";
import TrustedSection from "@/components/trusted/TrustedSection";
import CtaSection from "@/components/cta/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <FeaturesSection />
      <PosSection />
      <AiSection />
      <PricingSection />
      <TrustedSection />
      <CtaSection />
    </div>
  );
}
