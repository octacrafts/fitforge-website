type MenuToggleProps = {
  open: boolean;
  onToggle: () => void;
};

export default function MenuToggle({ open, onToggle }: MenuToggleProps) {
  return (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink lg:hidden"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={onToggle}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-6 w-6"
        aria-hidden="true"
      >
        {open ? (
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        ) : (
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        )}
      </svg>
    </button>
  );
}
