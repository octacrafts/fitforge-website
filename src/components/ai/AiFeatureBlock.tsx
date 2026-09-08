"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import AiPointIcon from "@/components/ai/AiPointIcon";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { easeOut } from "@/lib/motion";

const TONE_CLASS = {
  mint: "bg-[#9fe8d4]",
  lavender: "bg-[#d4c4f5]",
  peach: "bg-[#ffc9a8]",
  sky: "bg-[#a8d8ff]",
} as const;

export type AiFeatureBlockData = {
  id: string;
  title: string;
  description: string;
  mediaTone: keyof typeof TONE_CLASS;
  mediaLabel: string;
  mediaImage: { src: string; alt: string };
  points: readonly {
    id: string;
    icon: "wand" | "refresh" | "target";
    label: string;
  }[];
  reverse?: boolean;
};

type AiFeatureBlockProps = {
  feature: AiFeatureBlockData;
};

export default function AiFeatureBlock({ feature }: AiFeatureBlockProps) {
  const reverse = Boolean(feature.reverse);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={feature.id}
      data-theme="dark"
      className="scroll-mt-24 bg-ink-alt px-6 py-16 sm:px-10 sm:py-20 lg:px-16"
    >
      <div
        className={`mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal variant={reverse ? "right" : "left"}>
          <motion.div
            className={`relative overflow-hidden rounded-[28px] ${TONE_CLASS[feature.mediaTone]} px-6 py-10 sm:rounded-[36px] sm:px-10 sm:py-14`}
            whileHover={reduceMotion ? undefined : { scale: 1.015 }}
            transition={{ duration: 0.35, ease: easeOut }}
          >
            <motion.div
              className="mx-auto w-full max-w-[420px]"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
            >
              <div className="overflow-hidden rounded-t-[14px] border border-black/10 bg-[#1a1f2c] shadow-[0_24px_50px_rgba(15,23,42,0.35)]">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="relative aspect-[16/10] bg-ink-dark">
                  <Image
                    src={feature.mediaImage.src}
                    alt={feature.mediaImage.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="text-lg font-bold text-white sm:text-xl">
                      {feature.mediaLabel}
                    </p>
                    <span className="mt-2 inline-flex rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-white">
                      Shop now
                    </span>
                  </div>
                  <motion.span
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-xs font-bold text-white shadow-[0_8px_20px_rgba(255,127,39,0.45)]"
                    initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.35 }}
                  >
                    AI
                  </motion.span>
                </div>
              </div>
              <div className="mx-auto h-2 w-[88%] rounded-b-xl bg-[#c5c9d1]" />
              <div className="mx-auto h-1.5 w-[28%] rounded-b-md bg-[#9aa1ad]" />
            </motion.div>
          </motion.div>
        </Reveal>

        <Reveal variant={reverse ? "left" : "right"} delay={0.08}>
          <h2 className="max-w-md text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[40px] lg:leading-[1.15]">
            {feature.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-on-dark sm:text-lg">
            {feature.description}
          </p>

          <Stagger className="mt-8 flex flex-col gap-4">
            {feature.points.map((point) => (
              <StaggerItem key={point.id}>
                <motion.div
                  className="flex items-center gap-3 text-[15px] font-semibold text-brand sm:text-base"
                  whileHover={reduceMotion ? undefined : { x: 6 }}
                  transition={{ duration: 0.2, ease: easeOut }}
                >
                  <AiPointIcon id={point.icon} />
                  <span>{point.label}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
