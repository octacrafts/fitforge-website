import { TRUSTED_BRANDS, TRUSTED_SECTION } from "@/lib/site-config";
import BrandMark from "@/components/trusted/BrandMark";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";

export default function TrustedSection() {
  return (
    <section
      id={TRUSTED_SECTION.id}
      data-theme="light"
      className="bg-background px-6 py-14 sm:px-10 sm:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px] text-center">
        <Reveal variant="in">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink sm:text-[13px]">
            {TRUSTED_SECTION.title}
          </p>
        </Reveal>

        <Stagger className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:mt-10 sm:gap-x-14 lg:gap-x-20">
          {TRUSTED_BRANDS.map((brand) => (
            <StaggerItem key={brand.id}>
              <BrandMark name={brand.name} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
