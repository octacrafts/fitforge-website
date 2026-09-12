"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "@/components/theme/ThemeProvider";
import { easeOut } from "@/lib/motion";

type BrandLogoProps = {
  /** Background the logo sits on. `default` follows site chrome theme. */
  variant?: "default" | "onBrand" | "onDark" | "onLight" | "signIn";
  className?: string;
};

const LOGO = {
  /** Light wordmark — dark / brand surfaces */
  darkSurface: {
    src: "/brand/fitforge-logo.png",
    width: 220,
    height: 56,
  },
  /** Dark wordmark — light surfaces */
  lightSurface: {
    src: "/brand/fitforge-logo-light.png",
    width: 220,
    height: 56,
  },
  /** Sign-up panel only */
  onBrand: {
    src: "/brand/fitforge-logo-sign-up.png",
    width: 1024,
    height: 341,
  },
} as const;

export default function BrandLogo({
  variant = "default",
  className = "",
}: BrandLogoProps) {
  const { theme, inverted } = useTheme();
  const reduceMotion = useReducedMotion();

  const useDarkSurfaceLogo =
    variant === "onDark" || (variant === "default" && theme === "dark");

  const logo =
    variant === "onBrand"
      ? LOGO.onBrand
      : variant === "signIn"
        ? inverted
          ? LOGO.lightSurface
          : LOGO.darkSurface
        : variant === "onLight"
          ? LOGO.lightSurface
          : useDarkSurfaceLogo
            ? LOGO.darkSurface
            : LOGO.lightSurface;

  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="FitForge home"
    >
      {variant === "onBrand" ? (
        <motion.span
          className="relative inline-flex"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <Image
            src={logo.src}
            alt="FitForge — Smart Gym Management"
            width={logo.width}
            height={logo.height}
            className="h-10 w-auto max-w-[220px] object-contain object-right mix-blend-screen sm:h-12 sm:max-w-[260px]"
            priority
          />
        </motion.span>
      ) : (
        <Image
          src={logo.src}
          alt="FitForge — Smart Gym Management"
          width={logo.width}
          height={logo.height}
          className="h-8 w-auto sm:h-9"
          priority
        />
      )}
    </Link>
  );
}
