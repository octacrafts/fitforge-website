import type { ComponentProps, ReactNode } from "react";

type FormFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  autoComplete?: string;
  labelAction?: ReactNode;
  className?: string;
} & Omit<ComponentProps<"input">, "id" | "name" | "type" | "placeholder" | "autoComplete" | "className">;

export default function FormField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  autoComplete,
  labelAction,
  className = "",
  ...props
}: FormFieldProps) {
  return (
    <div className={`block ${className}`}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-ink">
          {label}
        </label>
        {labelAction}
      </div>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-card-line bg-card px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/20"
        {...props}
      />
    </div>
  );
}
