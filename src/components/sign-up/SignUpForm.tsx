"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { SIGN_UP_PAGE } from "@/lib/site-config";
import FormField from "@/components/ui/FormField";
import { fadeUp, staggerContainer, transitionBase, viewOnce } from "@/lib/motion";

export default function SignUpForm() {
  const { form } = SIGN_UP_PAGE;
  const halfFields = form.fields.filter(
    (field): field is (typeof form.fields)[number] & { half: true } =>
      Boolean(field.half),
  );
  const fullFields = form.fields.filter((field) => !field.half);
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
      <motion.div
        className="grid gap-5 sm:grid-cols-2"
        variants={reduceMotion ? undefined : fadeUp}
        transition={transitionBase}
      >
        {halfFields.map((field) => (
          <FormField
            key={field.id}
            id={field.id}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            required
          />
        ))}
      </motion.div>

      {fullFields.map((field) => (
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
          />
        </motion.div>
      ))}

      <motion.label
        className="flex items-start gap-3 text-sm leading-6 text-muted"
        variants={reduceMotion ? undefined : fadeUp}
        transition={transitionBase}
      >
        <input
          type="checkbox"
          name="terms"
          required
          className="mt-1 h-4 w-4 rounded border-card-line text-brand focus:ring-brand"
        />
        <span>
          {form.termsPrefix}{" "}
          <Link href={form.termsHref} className="font-semibold text-brand hover:underline">
            {form.termsLabel}
          </Link>{" "}
          and{" "}
          <Link href={form.privacyHref} className="font-semibold text-brand hover:underline">
            {form.privacyLabel}
          </Link>
          .
        </span>
      </motion.label>

      <motion.button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(255,127,39,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-hover active:translate-y-0"
        variants={reduceMotion ? undefined : fadeUp}
        transition={transitionBase}
      >
        {form.submitLabel}
      </motion.button>

      <motion.p
        className="text-center text-sm text-muted"
        variants={reduceMotion ? undefined : fadeUp}
        transition={transitionBase}
      >
        {form.signInPrompt}{" "}
        <Link href={form.signInHref} className="font-semibold text-brand hover:underline">
          {form.signInLabel}
        </Link>
      </motion.p>
    </motion.form>
  );
}
