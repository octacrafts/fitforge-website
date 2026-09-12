"use client";

import { useRef } from "react";
import {
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import type { ShowcaseImage } from "@/lib/site-config";
import MacbookFrame from "@/components/ui/MacbookFrame";
import Image from "next/image";

const SHOWCASE_GLOW = {
  color: "#ffffff",
  x: "76%",
  y: "70%",
  hole: "48%",
  edge: "22%",
  topBlend: "7.5rem",
  bottom: "34%",
};

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
  const slideCount = Math.max(screens.length, 1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawSlideY = useTransform(scrollYProgress, [0, 1], [0, lastIndex]);
  const smoothSlideY = useSpring(rawSlideY, {
    stiffness: 48,
    damping: 22,
    mass: 0.55,
  });
  const screenY = useTransform(smoothSlideY, (value) => `${-value * 100}%`);

  if (reduceMotion) {
    return (
      <section
        data-theme="light"
        className={`relative overflow-hidden bg-surface px-6 pb-16 pt-10 sm:px-10 sm:pb-20 lg:px-16 ${className}`}
      >
        <ShowcaseBackdrop />
        <div className="relative z-10 mx-auto w-full max-w-[1100px]">
          <MacbookFrame src={image.src} alt={image.alt} screens={screens} />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      data-theme="light"
      className={`relative ${className}`}
      style={{ height: `${slideCount * 120}vh` }}
    >
      <div className="sticky top-0 flex h-dvh items-end justify-center overflow-hidden px-6 pb-[7vh] pt-24 sm:px-10 sm:pb-[8vh] sm:pt-28 lg:px-16">
        <ShowcaseBackdrop />
        <div className="relative z-10 mx-auto w-full max-w-[1100px]">
          <MacbookFrame
            src={image.src}
            alt={image.alt}
            screens={screens}
            screenY={screenY}
          />
        </div>
      </div>
    </section>
  );
}

function ShowcaseBackdrop() {
  const { color, x, y, hole, edge, topBlend, bottom } = SHOWCASE_GLOW;

  return (
    <>
      <Image
        src="/platform-mockup-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover scale-125 blur-[2px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: `radial-gradient(ellipse ${x} ${y} at 50% 42%, transparent 0%, transparent ${hole}, color-mix(in srgb, ${color} ${edge}, transparent) 78%, ${color} 100%)`,
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] bg-gradient-to-b from-background to-transparent"
        style={{ height: topBlend }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-white via-white/55 to-transparent"
        style={{ height: bottom }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[3%] left-1/2 z-[1] h-[22%] w-[72%] -translate-x-1/2 rounded-[100%] bg-white/80 blur-3xl"
        aria-hidden
      />
    </>
  );
}
