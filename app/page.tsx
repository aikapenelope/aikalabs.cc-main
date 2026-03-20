import { LandingHero } from "@/components/landing/hero";
import { LandingMarquee } from "@/components/landing/marquee";
import { LandingCapabilities } from "@/components/landing/capabilities";
import { LandingEcosystem } from "@/components/landing/ecosystem";
import { LandingSolutions } from "@/components/landing/solutions";
import { LandingFooter } from "@/components/landing/landing-footer";

export default function HomePage() {
  return (
    <main className="sm:px-6 sm:py-12 flex flex-col sm:gap-16 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 gap-x-8 gap-y-8">
      <LandingHero />
      <LandingMarquee />
      <LandingCapabilities />
      <LandingEcosystem />
      <LandingSolutions />
      <LandingFooter />
    </main>
  );
}
