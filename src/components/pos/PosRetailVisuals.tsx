import type { PosRetailIconId } from "@/lib/site/pos";

type PosRetailVisualProps = {
  id: PosRetailIconId;
  className?: string;
};

export function PosRetailWhyIcon({
  id,
  className = "",
}: PosRetailVisualProps) {
  const shared = `h-5 w-5 text-brand ${className}`;

  if (id === "bolt") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <path
          d="M13 3L5.5 13.5H12L11 21l7.5-10.5H12L13 3z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "box") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <path
          d="M12 3.5l7.5 4v9L12 20.5 4.5 16.5v-9L12 3.5z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M12 12l7.5-4.5M12 12v8.5M12 12L4.5 7.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
      <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function PosRetailIllustration({
  id,
  className = "",
}: PosRetailVisualProps) {
  if (id === "bolt") {
    return (
      <svg
        viewBox="0 0 120 88"
        className={`h-[72px] w-[96px] ${className}`}
        aria-hidden="true"
      >
        <rect x="28" y="14" width="52" height="40" rx="6" fill="#2B3347" />
        <rect x="34" y="20" width="40" height="26" rx="3" fill="#EEF2FF" />
        <path d="M38 26h20M38 31h14M38 36h10" stroke="#94A3B8" strokeWidth="1.4" />
        <rect x="18" y="48" width="34" height="22" rx="4" fill="#1A1F2C" />
        <path d="M24 54h22M24 59h16M24 64h12" stroke="#E2E8F0" strokeWidth="1.4" />
        <rect x="58" y="52" width="36" height="18" rx="4" fill="#FF7F27" />
        <circle cx="88" cy="40" r="8" fill="#1A1F2C" />
        <path
          d="M84.8 40.1l2.2 2.2 4.4-4.6"
          fill="none"
          stroke="#FF7F27"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "box") {
    return (
      <svg
        viewBox="0 0 120 88"
        className={`h-[72px] w-[96px] ${className}`}
        aria-hidden="true"
      >
        <path d="M38 48l22-12 22 12v22L60 82 38 70V48z" fill="#2B3347" />
        <path d="M60 36l22 12-22 12-22-12 22-12z" fill="#3A455C" />
        <path d="M48 28l18-10 18 10v18L66 46 48 36V28z" fill="#FF7F27" />
        <path d="M66 18l18 10-18 10-18-10 18-10z" fill="#FF944D" />
        <rect x="22" y="52" width="34" height="26" rx="4" fill="#1A1F2C" />
        <path d="M28 58h22M28 63h18M28 68h14" stroke="#E2E8F0" strokeWidth="1.5" />
        <circle cx="50" cy="72" r="7" fill="#FF7F27" />
        <path
          d="M47.2 72.1l1.9 1.9 3.8-4"
          fill="none"
          stroke="#1A1F2C"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 120 88"
      className={`h-[72px] w-[96px] ${className}`}
      aria-hidden="true"
    >
      <rect x="22" y="16" width="44" height="56" rx="5" fill="#2B3347" />
      <rect x="28" y="24" width="32" height="6" rx="2" fill="#EEF2FF" />
      <path
        d="M30 36h8M30 42h8M30 48h8"
        stroke="#3DDC97"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M42 36h12M42 42h12M42 48h10" stroke="#94A3B8" strokeWidth="1.5" />
      <rect x="58" y="48" width="40" height="22" rx="4" fill="#FF7F27" />
      <circle cx="68" cy="70" r="5" fill="#1A1F2C" />
      <circle cx="88" cy="70" r="5" fill="#1A1F2C" />
      <path d="M62 54h20M62 59h14" stroke="#FFF7ED" strokeWidth="1.4" />
    </svg>
  );
}
