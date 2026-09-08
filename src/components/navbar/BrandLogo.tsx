import Link from "next/link";
import { BRAND } from "@/lib/site-config";

type BrandLogoProps = {
  variant?: "default" | "onBrand" | "onDark";
  className?: string;
};

const VARIANT_CLASS = {
  default: {
    fit: "text-ink",
    forge: "text-brand",
  },
  onBrand: {
    fit: "text-white",
    forge: "text-ink-dark",
  },
  onDark: {
    fit: "text-white",
    forge: "text-brand",
  },
} as const;

export default function BrandLogo({
  variant = "default",
  className = "",
}: BrandLogoProps) {
  const colors = VARIANT_CLASS[variant];

  return (
    <Link
      href="/"
      className={`text-[22px] font-bold uppercase tracking-tight ${className}`}
    >
      <span className={colors.fit}>{BRAND.fit}</span>
      <span className={colors.forge}>{BRAND.forge}</span>
    </Link>
  );
}
