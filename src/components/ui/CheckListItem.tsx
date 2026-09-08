type CheckListItemProps = {
  children: string;
  tone?: "dark" | "light";
};

export default function CheckListItem({
  children,
  tone = "dark",
}: CheckListItemProps) {
  return (
    <div
      className={`flex items-start gap-3 text-[15px] leading-6 ${
        tone === "light" ? "text-muted" : "text-ink"
      }`}
    >
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand">
        <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
          <path
            d="M2.4 6.2l2.3 2.3 5-5"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </div>
  );
}
