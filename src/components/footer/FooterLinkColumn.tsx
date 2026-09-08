import Link from "next/link";
import type { NavLink } from "@/lib/site-config";

type FooterLinkColumnProps = {
  title: string;
  links: readonly NavLink[];
};

export default function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <h3 className="text-base font-bold text-ink">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-[15px] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
