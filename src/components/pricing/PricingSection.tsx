import { PRICING_PLANS, PRICING_SECTION } from "@/lib/site-config";
import PricingCard from "@/components/pricing/PricingCard";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";

type PricingSectionProps = {
  showHeader?: boolean;
  className?: string;
};

export default function PricingSection({
  showHeader = true,
  className = "",
}: PricingSectionProps) {
  return (
    <section
      id={PRICING_SECTION.id}
      data-theme="light"
      className={`scroll-mt-24 bg-background px-6 py-20 sm:px-10 sm:py-24 lg:px-16 ${className}`}
    >
      <div className="mx-auto max-w-[1400px]">
        {showHeader ? (
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[42px]">
              {PRICING_SECTION.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {PRICING_SECTION.description}
            </p>
          </Reveal>
        ) : null}

        <Stagger
          className={`grid gap-6 lg:grid-cols-3 lg:gap-8 lg:items-stretch ${
            showHeader ? "mt-14 sm:mt-16" : ""
          }`}
        >
          {PRICING_PLANS.map((plan) => (
            <StaggerItem key={plan.id} className="h-full">
              <PricingCard plan={plan} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
