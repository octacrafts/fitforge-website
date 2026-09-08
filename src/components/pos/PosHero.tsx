"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { POS_BUSINESS_PAGE } from "@/lib/site-config";
import Button from "@/components/ui/Button";
import { easeOut } from "@/lib/motion";

export default function PosHero() {
  const { intro } = POS_BUSINESS_PAGE;
  const reduceMotion = useReducedMotion();

  return (
    <section
      data-theme="dark"
      className="bg-ink-alt px-6 pb-16 pt-28 sm:px-10 sm:pb-20 sm:pt-32 lg:px-16 lg:pb-24 lg:pt-36"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[56px]">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              {intro.titleLead}
            </motion.span>
            <motion.span
              className="block text-brand"
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            >
              {intro.titleAccent}
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-lg text-base leading-8 text-on-dark sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: easeOut }}
          >
            {intro.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: easeOut }}
          >
            <Button href={intro.primaryCta.href} className="px-6 py-3.5">
              {intro.primaryCta.label}
            </Button>
            <Button
              href={intro.secondaryCta.href}
              variant="ghost"
              className="px-6 py-3.5"
            >
              {intro.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative aspect-square overflow-hidden rounded-[28px] sm:rounded-[36px]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.14, ease: easeOut }}
          whileHover={reduceMotion ? undefined : { y: -8, scale: 1.01 }}
        >
          <Image
            src={intro.image.src}
            alt={intro.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
