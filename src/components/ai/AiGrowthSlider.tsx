"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { AI_WORKFLOWS_PAGE } from "@/lib/site-config";
import { easeOut } from "@/lib/motion";

export default function AiGrowthSlider() {
  const { slider } = AI_WORKFLOWS_PAGE;
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const slide = slider.slides[index];
  const count = slider.slides.length;

  function go(next: number) {
    setIndex((next + count) % count);
  }

  return (
    <section
      id={slider.id}
      data-theme="light"
      className="relative overflow-hidden bg-background px-6 pb-16 pt-4 sm:px-10 sm:pb-20 lg:px-16"
    >
      <div className="relative mx-auto max-w-[1400px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 inset-y-0 rounded-[40px] bg-brand/10 blur-3xl"
        />

        <div className="relative overflow-hidden rounded-[28px] border border-card-line bg-card px-6 py-8 shadow-[var(--shadow-card)] sm:rounded-[32px] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8">
            <div className="relative min-h-[200px] sm:min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, x: -18 }}
                  transition={{ duration: 0.35, ease: easeOut }}
                >
                  <p className="inline-flex rounded-full bg-badge px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                    {slide.eyebrow}
                  </p>
                  <h2 className="mt-5 max-w-md text-[32px] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[44px]">
                    {slide.titleLead}{" "}
                    <span className="text-brand">{slide.titleAccent}</span>
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] leading-7 text-muted sm:text-base">
                    {slide.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <GrowthVisual />
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
            <SliderButton label="Previous slide" onClick={() => go(index - 1)}>
              <Chevron dir="left" />
            </SliderButton>
            <div className="flex items-center gap-1.5 px-1">
              {slider.slides.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-2 bg-brand" : "w-2 bg-card-line"
                  }`}
                />
              ))}
            </div>
            <SliderButton label="Next slide" onClick={() => go(index + 1)}>
              <Chevron dir="right" />
            </SliderButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-card-line bg-card text-muted transition hover:border-brand/40 hover:text-ink"
    >
      {children}
    </button>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M10 3.5 5.5 8 10 12.5" : "M6 3.5 10.5 8 6 12.5"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GrowthVisual() {
  return (
    <div className="relative mx-auto h-[340px] w-full max-w-[560px] sm:h-[380px]">
      <div className="absolute left-[46%] top-[46%] h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-card-line sm:h-[250px] sm:w-[250px]" />
      <div className="absolute left-[46%] top-[46%] h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-card-line sm:h-[180px] sm:w-[180px]" />
      <div className="absolute left-[46%] top-[46%] h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[2px] sm:h-[110px] sm:w-[110px]" />

      <div className="absolute left-[46%] top-[46%] z-10 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[22px] bg-ink-dark text-[22px] font-extrabold text-white shadow-[0_12px_40px_rgba(255,127,39,0.28)] ring-[5px] ring-brand sm:h-[80px] sm:w-[80px] sm:text-2xl">
        AI
      </div>

      <NodeCard
        className="absolute left-0 top-2 sm:left-4 sm:top-4"
        icon={<UserIcon />}
        title="Retention"
        subtitle="Bring members back"
        value="+28%"
      />
      <NodeCard
        className="absolute right-0 top-0 sm:right-6 sm:top-2"
        icon={<MegaphoneIcon />}
        title="Marketing"
        subtitle="More signups & leads"
        value="+42%"
      />
      <NodeCard
        className="absolute bottom-16 left-0 sm:bottom-20 sm:left-6"
        icon={<GearIcon />}
        title="Operations"
        subtitle="Smarter workflows"
        value="+35%"
      />

      <div className="absolute bottom-0 right-0 w-[210px] rounded-2xl border border-card-line bg-card p-3.5 shadow-[var(--shadow-card)] sm:w-[230px] sm:p-4">
        <p className="text-[11px] font-medium text-muted">Total Growth</p>
        <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-emerald-500">
          +62%
        </p>
        <svg viewBox="0 0 180 46" className="mt-1 h-10 w-full" aria-hidden>
          <path
            d="M2 38 C 28 36, 40 28, 58 24 S 96 22, 112 14 S 150 10, 178 4"
            fill="none"
            stroke="#34d399"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2 38 C 28 36, 40 28, 58 24 S 96 22, 112 14 S 150 10, 178 4 V 46 H 2 Z"
            fill="url(#growthFill)"
            opacity="0.25"
          />
          <defs>
            <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <ul className="mt-2 space-y-1 text-[11px] font-medium text-muted">
          <li className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Members
            </span>
            <span className="text-emerald-500">+28%</span>
          </li>
          <li className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Revenue
            </span>
            <span className="text-emerald-500">+42%</span>
          </li>
          <li className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-violet-500" />
              Efficiency
            </span>
            <span className="text-emerald-500">+35%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function NodeCard({
  className,
  icon,
  title,
  subtitle,
  value,
}: {
  className: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  value: string;
}) {
  return (
    <div
      className={`z-[1] w-[158px] rounded-2xl border border-card-line bg-card px-3 py-2.5 shadow-[var(--shadow-card)] sm:w-[168px] ${className}`}
    >
      <div className="flex items-start gap-2">
        {icon}
        <div className="min-w-0">
          <p className="text-[13px] font-semibold leading-tight text-ink">{title}</p>
          <p className="mt-0.5 text-[10px] leading-tight text-muted">{subtitle}</p>
          <p className="mt-1 text-[12px] font-semibold text-emerald-500">{value}</p>
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-500">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M10 10a3.5 3.5 0 1 0-3.5-3.5A3.5 3.5 0 0 0 10 10Zm0 1.5c-3.1 0-5.75 1.7-5.75 3.75V16h11.5v-.75C15.75 13.2 13.1 11.5 10 11.5Z" />
      </svg>
    </span>
  );
}

function MegaphoneIcon() {
  return (
    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-500">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M3 8.5v3a1.5 1.5 0 0 0 1.5 1.5H6l1.2 2.4A1 1 0 0 0 8.1 16H9V8.5H4.5A1.5 1.5 0 0 0 3 8.5Zm14-3.2v9.4a.8.8 0 0 1-1.18.7L12 13.2V6.8l3.82-2.2A.8.8 0 0 1 17 5.3Z" />
      </svg>
    </span>
  );
}

function GearIcon() {
  return (
    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-500">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
        <path d="M8.2 2.5h3.6l.35 1.7a5.7 5.7 0 0 1 1.35.78l1.7-.55 1.8 3.12-1.35 1.15c.1.45.15.9.15 1.3s-.05.85-.15 1.3l1.35 1.15-1.8 3.12-1.7-.55a5.7 5.7 0 0 1-1.35.78l-.35 1.7H8.2l-.35-1.7a5.7 5.7 0 0 1-1.35-.78l-1.7.55L3 12.48l1.35-1.15A5.6 5.6 0 0 1 4.2 10c0-.4.05-.85.15-1.3L3 7.55 4.8 4.43l1.7.55a5.7 5.7 0 0 1 1.35-.78Zm1.8 5.1A2.4 2.4 0 1 0 12.4 10 2.4 2.4 0 0 0 10 7.6Z" />
      </svg>
    </span>
  );
}
