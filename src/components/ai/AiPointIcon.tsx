type AiPointIconId = "wand" | "refresh" | "target";

type AiPointIconProps = {
  id: AiPointIconId;
  className?: string;
};

export default function AiPointIcon({ id, className = "" }: AiPointIconProps) {
  const shared = `h-5 w-5 shrink-0 text-brand ${className}`;

  if (id === "wand") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <path
          d="M15 4l1.5 3.5L20 9l-3.5 1.5L15 14l-1.5-3.5L10 9l3.5-1.5L15 4z"
          fill="currentColor"
        />
        <path
          d="M4.5 19.5L12 12"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M5 14.5v3M3.5 16h3M18.5 3v2.5M17.2 4.25h2.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "refresh") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
        <path
          d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M19.5 4.5V9H15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={shared} aria-hidden="true">
      <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
      <path
        d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
