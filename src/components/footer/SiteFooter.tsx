import { FOOTER } from "@/lib/site-config";
import BrandLogo from "@/components/navbar/BrandLogo";
import FooterLinkColumn from "@/components/footer/FooterLinkColumn";
import SocialLinks from "@/components/footer/SocialLinks";
import Reveal from "@/components/motion/Reveal";

export default function SiteFooter() {
  return (
    <footer data-theme="light" className="border-t border-card-line bg-background px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
            <div className="max-w-sm">
              <BrandLogo />
              <p className="mt-5 text-[15px] leading-7 text-muted">{FOOTER.description}</p>
              <div className="mt-6">
                <SocialLinks links={FOOTER.socials} />
              </div>
            </div>

            {FOOTER.groups.map((group) => (
              <FooterLinkColumn
                key={group.title}
                title={group.title}
                links={group.links}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col gap-3 border-t border-card-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>{FOOTER.copyright}</p>
            <p className="italic">{FOOTER.tagline}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
