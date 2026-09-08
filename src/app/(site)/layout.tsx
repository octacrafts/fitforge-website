import Navbar from "@/components/navbar/Navbar";
import SiteFooterSwitch from "@/components/footer/SiteFooterSwitch";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col">{children}</div>
      <SiteFooterSwitch />
    </div>
  );
}
