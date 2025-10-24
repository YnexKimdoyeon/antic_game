import { HeroSection } from "@/components/hero-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ChannelsSection } from "@/components/channels-section"
import { ServicesSection } from "@/components/services-section"
import { TrustSection } from "@/components/trust-section"
import { FinalCtaSection } from "@/components/final-cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ReviewsSection />
      <ChannelsSection />
      <ServicesSection />
      <TrustSection />
      <FinalCtaSection />
    </main>
  )
}
