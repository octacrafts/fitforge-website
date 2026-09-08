import type { ReactNode } from "react";
import type { SocialLink } from "@/lib/site-config";

type IconProps = {
  className?: string;
};

function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TwitterIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 3.2h2.7l-5.9 6.7L23 20.8h-5.7l-4.5-5.9-5.1 5.9H5l6.3-7.3L1.5 3.2h5.9l4 5.3 5.5-5.3zm-1 15.8h1.5L6.7 4.9H5.1L17.9 19z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.3 9.3H3.4V20.5h2.9V9.3zM4.9 3.5A1.7 1.7 0 1 0 4.9 6.9 1.7 1.7 0 0 0 4.9 3.5zM20.6 20.5h-2.9v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H10.9V9.3h2.8v1.5h.1c.4-.7 1.3-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1v6.4z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<SocialLink["id"], (props: IconProps) => ReactNode> = {
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
};

type SocialLinksProps = {
  links: readonly SocialLink[];
};

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="flex items-center gap-3">
      {links.map((link) => {
        const Icon = SOCIAL_ICONS[link.id];
        return (
          <li key={link.id}>
            <a
              href={link.href}
              aria-label={link.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-card-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
