"use client";

import { motion, useReducedMotion } from "motion/react";
import { POS_BUSINESS_PAGE } from "@/lib/site-config";
import PosFeatureIcon from "@/components/pos/PosFeatureIcon";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { easeOut } from "@/lib/motion";

export default function PosFeaturesSection() {
  const { features } = POS_BUSINESS_PAGE;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id={features.id}
      data-theme="dark"
      className="scroll-mt-24 bg-ink-alt px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24"
    >
      <Stagger className="mx-auto grid max-w-[1400px] gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {features.items.map((item, index) => (
          <StaggerItem key={item.id} className="h-full">
            <motion.article
              className="flex h-full flex-col rounded-[24px] border border-card-line bg-card-dark p-7 sm:p-8"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -10,
                      borderColor: "rgba(255,127,39,0.35)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.28)",
                    }
              }
              transition={{ duration: 0.3, ease: easeOut }}
            >
              <motion.div
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-icon-bg"
                initial={reduceMotion ? false : { scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 16,
                  delay: 0.15 + index * 0.08,
                }}
              >
                <PosFeatureIcon id={item.icon} />
              </motion.div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-on-dark">
                {item.description}
              </p>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
