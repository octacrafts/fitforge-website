"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { SIGN_IN_PAGE } from "@/lib/site-config";
import FormField from "@/components/ui/FormField";
import { fadeUp, staggerContainer, transitionBase, viewOnce } from "@/lib/motion";

export default function SignInForm() {
  const { fields, submitLabel, forgotLabel, forgotHref, createPrompt, createLabel, createHref } =
    SIGN_IN_PAGE;
  const reduceMotion = useReducedMotion();

  return (
    <motion.form
      className="mt-8 space-y-5"
      variants={reduceMotion ? undefined : staggerContainer}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewOnce}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {fields.map((field) => (
        <motion.div
          key={field.id}
          variants={reduceMotion ? undefined : fadeUp}
          transition={transitionBase}
        >
          <FormField
            id={field.id}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            required
            labelAction={
              "showForgot" in field && field.showForgot ? (
                <Link
                  href={forgotHref}
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  {forgotLabel}
                </Link>
              ) : undefined
            }
          />
        </motion.div>
      ))}

      <motion.button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(255,127,39,0.35)] transition hover:bg-brand-hover"
        variants={reduceMotion ? undefined : fadeUp}
        transition={transitionBase}
        whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98, y: 0 }}
      >
        {submitLabel}
      </motion.button>

      <motion.p
        className="text-center text-sm text-muted"
        variants={reduceMotion ? undefined : fadeUp}
        transition={transitionBase}
      >
        {createPrompt}{" "}
        <Link href={createHref} className="font-semibold text-brand hover:underline">
          {createLabel}
        </Link>
      </motion.p>
    </motion.form>
  );
}
