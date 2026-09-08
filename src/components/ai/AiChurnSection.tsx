"use client";

import { motion, useReducedMotion } from "motion/react";
import { AI_WORKFLOWS_PAGE } from "@/lib/site-config";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { easeOut } from "@/lib/motion";

const AVATARS = [
  { label: "Member Retention", bg: "#c45c4a", initial: "R" },
  { label: "Member", bg: "#5b7cfa", initial: "M" },
  { label: "Member", bg: "#e8a87c", initial: "A" },
  { label: "New Member", bg: "#6b8f71", initial: "N" },
  { label: "Member", bg: "#d4a017", initial: "S" },
] as const;

function ChurnChart({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 420 200" className="h-auto w-full" aria-hidden="true">
      {[40, 80, 120, 160].map((y) => (
        <line
          key={y}
          x1="36"
          x2="400"
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
      {[36, 120, 200, 280, 360].map((x) => (
        <line
          key={x}
          x1={x}
          x2={x}
          y1="20"
          y2="180"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
      ))}

      <motion.rect
        x="250"
        y="28"
        width="120"
        height="140"
        fill="rgba(96,165,250,0.12)"
        rx="4"
        initial={animate ? { opacity: 0 } : false}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
      />

      <motion.polyline
        fill="none"
        stroke="#f5b041"
        strokeWidth="1.8"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="44,160 95,140 140,148 185,118 230,125 275,95 320,100 370,72"
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.15, ease: easeOut }}
      />

      <motion.polyline
        fill="none"
        stroke="#ff7f27"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="44,150 90,120 130,135 170,95 210,110 250,70 290,85 330,55 370,40"
        initial={animate ? { pathLength: 0, opacity: 0 } : false}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.25, ease: easeOut }}
      />

      <motion.polygon
        points="370,40 360,52 380,52"
        fill="#ff7f27"
        initial={animate ? { opacity: 0, scale: 0.6 } : false}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 1.2, ease: easeOut }}
      />

      {[
        [44, 150],
        [130, 135],
        [210, 110],
        [290, 85],
        [370, 40],
      ].map(([cx, cy], index) => (
        <motion.circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="3.5"
          fill="#ff7f27"
          initial={animate ? { opacity: 0, scale: 0 } : false}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.45 + index * 0.12, ease: easeOut }}
        />
      ))}

      {["80", "60", "40", "20"].map((label, index) => (
        <text
          key={label}
          x="8"
          y={48 + index * 40}
          fill="rgba(160,174,192,0.7)"
          fontSize="10"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

export default function AiChurnSection() {
  const { churn } = AI_WORKFLOWS_PAGE;
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;

  return (
    <section
      id={churn.id}
      data-theme="dark"
      className="scroll-mt-24 bg-ink-alt px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <h2 className="max-w-md text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[42px] lg:leading-[1.15]">
            {churn.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-on-dark sm:text-lg">
            {churn.description}
          </p>

          <motion.div
            className="mt-8 rounded-2xl border border-card-line bg-card-dark/40 px-5 py-5 sm:px-6 sm:py-6"
            initial={animate ? { opacity: 0, y: 18 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <motion.span
                className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-emerald-500 px-3 text-sm font-bold text-white"
                initial={animate ? { scale: 0.7, opacity: 0 } : false}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 18, delay: 0.25 }}
              >
                {churn.metric.value}
              </motion.span>
              <p className="text-base font-semibold text-ink sm:text-lg">
                {churn.metric.label}
              </p>
            </div>
            <p className="mt-3 text-[15px] leading-7 text-on-dark">
              {churn.metric.detail}
            </p>
          </motion.div>
        </Reveal>

        <Reveal variant="right" delay={0.1}>
          <article className="rounded-[24px] border border-card-line bg-card-dark p-5 shadow-[var(--shadow-card)] sm:p-6">
            <h3 className="text-sm font-semibold text-brand sm:text-[15px]">
              AI Predict member ratio by attendance
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              <div className="h-2.5 w-28 overflow-hidden rounded-full bg-card-line">
                <motion.div
                  className="h-full rounded-full bg-[#3b82f6]"
                  initial={animate ? { width: 0 } : false}
                  whileInView={{ width: "70%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
                />
              </div>
              <motion.div
                className="h-2.5 rounded-full bg-brand"
                initial={animate ? { width: 0 } : false}
                whileInView={{ width: 144 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              />
              <motion.div
                className="h-2.5 rounded-full bg-[#f5b041]"
                initial={animate ? { width: 0 } : false}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
              />
            </div>

            <div className="mt-5 rounded-xl bg-ink-dark px-2 py-3 sm:px-3">
              <ChurnChart animate={animate} />
            </div>

            <p className="mt-4 text-xs font-medium text-sky-300/80">Pace &amp; Quality</p>

            <Stagger className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <StaggerItem>
                <div className="flex flex-col items-center gap-1.5">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: AVATARS[0].bg }}
                  >
                    {AVATARS[0].initial}
                  </span>
                  <span className="text-[11px] text-on-dark">{AVATARS[0].label}</span>
                </div>
              </StaggerItem>

              <div className="flex flex-wrap gap-3">
                {AVATARS.slice(1).map((avatar) => (
                  <StaggerItem key={avatar.label + avatar.initial}>
                    <div className="flex flex-col items-center gap-1.5">
                      <span
                        className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: avatar.bg }}
                      >
                        {avatar.initial}
                      </span>
                      <span className="text-[11px] text-on-dark">{avatar.label}</span>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </Stagger>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
