"use client";

import Link from "next/link";
import type { NavLink } from "@/lib/site-config";
import { useActiveNavHref } from "@/lib/use-active-nav";

type NavLinksProps = {
  links: readonly NavLink[];
  className?: string;
  onNavigate?: () => void;
};

export default function NavLinks({ links, className = "", onNavigate }: NavLinksProps) {
  const isActive = useActiveNavHref();

  return (
    <ul className={className}>
      {links.map((link) => {
        const active = isActive(link.href);

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`text-[15px] font-medium transition-colors hover:text-brand ${
                active ? "text-brand" : "text-ink"
              }`}
              onClick={() => onNavigate?.()}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
