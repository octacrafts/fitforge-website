"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ShowcaseImage } from "@/lib/site-config";
import { easeOut } from "@/lib/motion";

type MediaShowcaseProps = {
  image: ShowcaseImage;
  className?: string;
};

export default function MediaShowcase({ image, className = "" }: MediaShowcaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      data-theme="light"
      className={`bg-surface px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 ${className}`}
    >
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          className="overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(26,32,44,0.18)] ring-1 ring-black/5"
          initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: easeOut }}
          whileHover={reduceMotion ? undefined : { y: -8 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
