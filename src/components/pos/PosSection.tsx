import Image from "next/image";
import { POS_SECTION } from "@/lib/site-config";
import CheckListItem from "@/components/ui/CheckListItem";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import StatBlock from "@/components/ui/StatBlock";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";

export default function PosSection() {
  return (
    <section
      id={POS_SECTION.id}
      data-theme="dark"
      className="scroll-mt-24 bg-ink-dark px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <SectionEyebrow>{POS_SECTION.eyebrow}</SectionEyebrow>
          <h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
            {POS_SECTION.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-on-dark sm:text-lg">
            {POS_SECTION.description}
          </p>

          <Stagger className="mt-10 grid max-w-lg grid-cols-2 gap-8">
            {POS_SECTION.stats.map((stat) => (
              <StaggerItem key={stat.id}>
                <StatBlock value={stat.value} label={stat.label} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-10 flex flex-col gap-4">
            {POS_SECTION.checks.map((item, index) => (
              <Reveal key={item} delay={0.08 * index}>
                <CheckListItem>{item}</CheckListItem>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal variant="right" delay={0.1}>
          <div className="relative overflow-hidden rounded-[28px]">
            <Image
              src={POS_SECTION.image.src}
              alt={POS_SECTION.image.alt}
              width={POS_SECTION.image.width}
              height={POS_SECTION.image.height}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
