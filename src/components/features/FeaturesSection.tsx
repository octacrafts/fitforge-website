import { FEATURE_SECTION, FEATURES } from "@/lib/site-config";
import FeatureCard from "@/components/features/FeatureCard";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";

export default function FeaturesSection() {
  return (
    <section
      id={FEATURE_SECTION.id}
      data-theme="light"
      className="scroll-mt-24 bg-surface px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[42px]">
            {FEATURE_SECTION.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {FEATURE_SECTION.description}
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FEATURES.map((feature) => (
            <StaggerItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
