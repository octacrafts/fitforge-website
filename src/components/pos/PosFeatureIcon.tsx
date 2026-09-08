type PosFeatureIconId = "barcode" | "card" | "tag";

type PosFeatureIconProps = {
  id: PosFeatureIconId;
  className?: string;
};

export default function PosFeatureIcon({
  id,
  className = "",
}: PosFeatureIconProps) {
  const shared = `h-5 w-5 text-brand ${className}`;

  if (id === "barcode") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <path
          d="M4 6v12M7 6v12M9.5 6v12M13 6v12M15.5 6v12M18 6v12M20 6v12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

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

  return (
    <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
      <path
        d="M12.5 4.5l7 7-7.8 7.8a2.2 2.2 0 0 1-3.1 0L4.5 15.2a2.2 2.2 0 0 1 0-3.1l8-7.6z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="15.2" cy="8.8" r="1.2" fill="currentColor" />
    </svg>
  );
}
