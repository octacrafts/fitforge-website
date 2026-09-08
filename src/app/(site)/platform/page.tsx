import type { Metadata } from "next";
import { PLATFORM_PAGE } from "@/lib/site-config";
import PageIntro from "@/components/ui/PageIntro";
import MediaShowcase from "@/components/ui/MediaShowcase";
import PlatformOnboardingSection from "@/components/platform/PlatformOnboardingSection";
import PlatformClassesSection from "@/components/platform/PlatformClassesSection";

export const metadata: Metadata = {
  title: "Platform | FitForge",
  description: PLATFORM_PAGE.intro.description,
};

export default function PlatformPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageIntro
        titleLead={PLATFORM_PAGE.intro.titleLead}
        titleAccent={PLATFORM_PAGE.intro.titleAccent}
        description={PLATFORM_PAGE.intro.description}
      />
      <MediaShowcase image={PLATFORM_PAGE.showcase} />
      <PlatformOnboardingSection />
      <PlatformClassesSection />
    </div>
  );
}
