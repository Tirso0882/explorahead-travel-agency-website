import { Footer } from "@/components/ui/Footer";
import { Navigation } from "@/components/ui/Navigation";

// Enable Edge Runtime for faster global TTFB (sub-50ms worldwide)
// Edge runs in Vercel's global network, closer to users
export const runtime = "edge";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
