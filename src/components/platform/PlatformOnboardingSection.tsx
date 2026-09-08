import { PLATFORM_PAGE } from "@/lib/site-config";
import PlatformSplitSection from "@/components/platform/PlatformSplitSection";

export default function PlatformOnboardingSection() {
  return (
    <PlatformSplitSection
      content={{
        ...PLATFORM_PAGE.onboarding,
        imagePosition: "right",
        imageObjectPosition: "right center",
      }}
    />
  );
}
