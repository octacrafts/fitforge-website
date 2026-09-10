"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import type { ShowcaseImage } from "@/lib/site-config";
import MacbookFrame from "@/components/ui/MacbookFrame";
import { easeOut } from "@/lib/motion";

type MediaShowcaseProps = {
  image: ShowcaseImage;
  className?: string;
};

export default function MediaShowcase({
  image,
  className = "",
}: MediaShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const screens = image.screens?.length ? image.screens : [image.src];
  const lastIndex = Math.max(screens.length - 1, 0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const screenY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${lastIndex * 100}%`],
  );

  if (reduceMotion) {
    return (
      <section
        data-theme="light"
        className={`bg-surface px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 ${className}`}
      >
        <div className="mx-auto max-w-[1100px]">
          <MacbookFrame
            src={image.src}
            alt={image.alt}
            screens={screens}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      data-theme="light"
      className={`relative h-[280vh] bg-surface ${className}`}
    >
      <div className="sticky top-0 flex min-h-dvh items-center px-6 sm:px-10 lg:px-16">
        <motion.div
          className="mx-auto w-full max-w-[1100px]"
          initial={{ opacity: 0, y: 36, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <MacbookFrame
            src={image.src}
            alt={image.alt}
            screens={screens}
            screenY={screenY}
          />
        </motion.div>
      </div>
    </section>
  );
}
