type NumberedRowProps = {
  step: number;
  children: string;
};

export default function NumberedRow({ step, children }: NumberedRowProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-card-line bg-card-dark px-4 py-3.5 transition-transform duration-300 hover:translate-x-1">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/25 text-sm font-bold text-brand">
        {step}
      </span>
      <span className="text-[15px] leading-6 text-ink">{children}</span>
    </div>
  );
}
