import { CTA_SECTION } from "@/lib/site-config";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function CtaSection() {
  return (
    <section
      id={CTA_SECTION.id}
      data-theme="light"
      className="scroll-mt-24 bg-background px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal variant="scale">
          <div className="rounded-[40px] bg-brand px-6 py-14 text-center shadow-[0_24px_60px_rgba(255,127,39,0.28)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px]">
              {CTA_SECTION.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white sm:text-lg">
              {CTA_SECTION.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              {CTA_SECTION.actions.map((action) => (
                <Button
                  key={action.label}
                  href={action.href}
                  variant={action.variant}
                  className="min-w-[170px] px-7 py-3.5"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
