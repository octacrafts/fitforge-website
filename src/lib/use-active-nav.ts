"use client";

import { usePathname } from "next/navigation";

export function useActiveNavHref() {
  const pathname = usePathname();

  return (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
}
