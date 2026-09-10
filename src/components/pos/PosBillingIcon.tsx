import type { PosBillingIconId } from "@/lib/site/pos";

type PosBillingIconProps = {
  id: PosBillingIconId;
  className?: string;
};

export default function PosBillingIcon({
  id,
  className = "",
}: PosBillingIconProps) {
  const shared = `h-5 w-5 text-brand ${className}`;

  if (id === "card") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2.2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M7 15h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "tax") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <path
          d="M7 3.5h7.2L19 8.3V20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M14 3.5V8h4.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 13.2h6M9 16.5h4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M15.2 11.2l1.6 1.6M16.8 11.2l-1.6 1.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
      <path
        d="M4.5 16.5V19M9 12.5V19M13.5 14.5V19M18 9.5V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 12.5l4.2-4.2 3.3 2.4 5.7-6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.2 4.5H18v2.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
