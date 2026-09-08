"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ShowcaseImage } from "@/lib/site-config";
import CheckListItem from "@/components/ui/CheckListItem";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { easeOut } from "@/lib/motion";

export type PlatformSplitContent = {
  id: string;
  title: string;
  description: string;
  checks: readonly string[];
  image: ShowcaseImage;
  imagePosition?: "left" | "right";
  imageObjectPosition?: string;
};

type PlatformSplitSectionProps = {
  content: PlatformSplitContent;
};

export default function PlatformSplitSection({ content }: PlatformSplitSectionProps) {
  const reduceMotion = useReducedMotion();
  const imageLeft = content.imagePosition === "left";
  const objectPosition =
    content.imageObjectPosition ?? (imageLeft ? "left" : "right");

  const textBlock = (
    <div>
      <Reveal variant={imageLeft ? "right" : "left"}>
        <h2 className="max-w-md text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
          {content.title}
        </h2>
      </Reveal>
      <Reveal variant={imageLeft ? "right" : "left"} delay={0.08}>
        <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
          {content.description}
        </p>
      </Reveal>

      <Stagger className="mt-8 flex flex-col gap-4">
        {content.checks.map((item, index) => (
          <StaggerItem key={item}>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.12 + index * 0.08,
                ease: easeOut,
              }}
              whileHover={reduceMotion ? undefined : { x: 6 }}
            >
              <CheckListItem tone="light">{item}</CheckListItem>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );

  const imageBlock = (
    <Reveal variant={imageLeft ? "left" : "right"} delay={0.1}>
      <motion.div
        className="relative aspect-[5/4] overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(26,32,44,0.14)] sm:rounded-[32px]"
        whileHover={
          reduceMotion
            ? undefined
            : { y: -8, scale: 1.015, boxShadow: "0 28px 70px rgba(26,32,44,0.2)" }
        }
        transition={{ duration: 0.35, ease: easeOut }}
      >
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          style={{ objectPosition }}
          priority
        />
      </motion.div>
    </Reveal>
  );

  return (
    <section
      id={content.id}
      data-theme="light"
      className="scroll-mt-24 bg-background px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {imageLeft ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
