import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "onBrand" | "dark" | "ghost";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
} & Omit<ComponentProps<"a">, "href" | "children">;

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-[0_8px_20px_rgba(255,127,39,0.35)] hover:bg-brand-hover",
  secondary:
    "border border-card-line bg-card text-ink hover:bg-surface",
  onBrand: "bg-card text-brand hover:bg-badge",
  dark: "bg-ink-dark text-white hover:bg-[#141820]",
  ghost:
    "border border-white/35 bg-transparent text-white hover:border-white/60 hover:bg-white/5",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${VARIANT_CLASS[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
