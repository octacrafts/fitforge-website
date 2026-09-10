"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/theme/ThemeProvider";

type BrandLogoProps = {
  /** Background the logo sits on. `default` follows site chrome theme. */
  variant?: "default" | "onBrand" | "onDark" | "onLight";
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
} as const;

export default function BrandLogo({
  variant = "default",
  className = "",
}: BrandLogoProps) {
  const { theme } = useTheme();

  const useDarkSurfaceLogo =
    variant === "onDark" ||
    variant === "onBrand" ||
    (variant === "default" && theme === "dark");

  const logo =
    variant === "onLight"
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
      <Image
        src={logo.src}
        alt="FitForge — Smart Gym Management"
        width={logo.width}
        height={logo.height}
        className="h-8 w-auto sm:h-9"
        priority
      />
    </Link>
  );
}
