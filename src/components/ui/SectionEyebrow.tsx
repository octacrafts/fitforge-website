type SectionEyebrowProps = {
  children: string;
  className?: string;
};

export default function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand ${className}`}
    >
      <span className="h-px w-8 bg-brand" aria-hidden="true" />
      {children}
    </p>
  );
}
