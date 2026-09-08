"use client";

import { useCallback, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CTA, NAV_LINKS } from "@/lib/site-config";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/navbar/BrandLogo";
import MenuToggle from "@/components/navbar/MenuToggle";
import NavLinks from "@/components/navbar/NavLinks";
import ThemeToggle from "@/components/navbar/ThemeToggle";
import { easeOut } from "@/lib/motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-navbar-border bg-navbar backdrop-blur-xl backdrop-saturate-150"
      initial={reduceMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: easeOut }}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-6 sm:px-10 lg:px-16">
        <BrandLogo />

        <div className="hidden items-center gap-6 lg:flex">
          <NavLinks links={NAV_LINKS} className="flex items-center gap-8" />
          <ThemeToggle />
          <Button href={CTA.href} className="rounded-full px-5 py-2.5">
            {CTA.navLabel}
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <MenuToggle open={open} onToggle={() => setOpen((value) => !value)} />
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="overflow-hidden border-t border-navbar-border bg-navbar px-6 py-4 backdrop-blur-xl lg:hidden"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
          >
            <NavLinks
              links={NAV_LINKS}
              className="flex flex-col gap-4"
              onNavigate={close}
            />
            <Button
              href={CTA.href}
              className="mt-4 w-fit rounded-full"
              onClick={close}
            >
              {CTA.navLabel}
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
