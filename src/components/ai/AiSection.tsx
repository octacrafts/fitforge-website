import { AI_SECTION } from "@/lib/site-config";
import AiInsightStack from "@/components/ai/AiInsightStack";
import NumberedRow from "@/components/ui/NumberedRow";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function AiSection() {
  return (
    <section
      id={AI_SECTION.id}
      data-theme="dark"
      className="scroll-mt-24 bg-ink-alt px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left">
          <AiInsightStack insights={AI_SECTION.insights} />
        </Reveal>

        <Reveal variant="right" delay={0.08}>
          <SectionEyebrow>{AI_SECTION.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {AI_SECTION.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-on-dark sm:text-lg">
            {AI_SECTION.description}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {AI_SECTION.steps.map((item, index) => (
              <Reveal key={item.step} delay={0.1 + index * 0.08}>
                <NumberedRow step={item.step}>{item.text}</NumberedRow>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
