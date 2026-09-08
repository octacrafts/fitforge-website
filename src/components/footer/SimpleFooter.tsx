"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { FOOTER, NAV_LINKS } from "@/lib/site-config";
import BrandLogo from "@/components/navbar/BrandLogo";
import Reveal from "@/components/motion/Reveal";
import {
  easeOut,
  staggerContainer,
  fadeUp,
  viewOnce,
  transitionBase,
} from "@/lib/motion";

type SimpleFooterProps = {
  tone?: "light" | "dark";
  showNav?: boolean;
  tagline?: string;
};

export default function SimpleFooter({
  tone = "light",
  showNav = false,
  tagline,
}: SimpleFooterProps) {
  const dark = tone === "dark";
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <footer
      data-theme={dark ? "dark" : "light"}
      className={`px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-16 ${
        dark ? "bg-ink-alt" : "bg-background"
      }`}
    >
      <Reveal variant="up" className="flex flex-col items-center">
        <BrandLogo
          variant={dark ? "onDark" : "default"}
          className="inline-block text-[22px]"
        />

        {tagline ? (
          <motion.p
            className={`mt-3 max-w-md text-sm leading-6 ${
              dark ? "text-on-dark" : "text-muted"
            }`}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: easeOut }}
          >
            {tagline}
          </motion.p>
        ) : null}

        {showNav ? (
          reduceMotion ? (
            <nav aria-label="Footer" className="mt-6">
              <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                {NAV_LINKS.map((link) => {
                  const active =
                    pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`text-sm font-semibold transition-colors hover:text-brand ${
                          active
                            ? "text-brand"
                            : dark
                              ? "text-white"
                              : "text-ink"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : (
            <motion.nav
              aria-label="Footer"
              className="mt-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewOnce}
            >
              <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                {NAV_LINKS.map((link) => {
                  const active =
                    pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

                  return (
                    <motion.li
                      key={link.href}
                      variants={fadeUp}
                      transition={transitionBase}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`text-sm font-semibold transition-colors hover:text-brand ${
                          active
                            ? "text-brand"
                            : dark
                              ? "text-white"
                              : "text-ink"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          )
        ) : null}

        <motion.p
          className={`text-sm ${showNav || tagline ? "mt-6" : "mt-3"} ${
            dark ? "text-on-dark" : "text-muted"
          }`}
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.45,
            delay: showNav ? 0.25 : 0.08,
            ease: easeOut,
          }}
        >
          {FOOTER.copyright}
        </motion.p>
      </Reveal>
    </footer>
  );
}
