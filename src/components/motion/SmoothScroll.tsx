"use client";

import { useEffect, useRef } from "react";
import { cancelFrame, frame } from "motion";
import { useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { ReactLenis, type LenisRef } from "lenis/react";

type SmoothScrollProps = {
  children: React.ReactNode;
};

const LOCKED_SCROLL_PATHS = new Set(["/sign-up", "/sign-in"]);

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const lockScroll = LOCKED_SCROLL_PATHS.has(pathname);

  useEffect(() => {
    if (reduceMotion || lockScroll) return;

    function update({ timestamp }: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(timestamp);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, [reduceMotion, lockScroll]);

  useEffect(() => {
    if (!lockScroll) return;

    const html = document.documentElement;
    const body = document.body;
    html.classList.add("overflow-hidden");
    body.classList.add("overflow-hidden");

    return () => {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
    };
  }, [lockScroll]);

  if (reduceMotion || lockScroll) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        anchors: true,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
