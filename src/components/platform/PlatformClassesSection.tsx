import { PLATFORM_PAGE } from "@/lib/site-config";
import PlatformSplitSection from "@/components/platform/PlatformSplitSection";

export default function PlatformClassesSection() {
  return (
    <PlatformSplitSection
      content={{
        ...PLATFORM_PAGE.classes,
        imagePosition: "left",
        imageObjectPosition: "left center",
      }}
    />
  );
}
