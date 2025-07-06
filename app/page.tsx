import { HeroSection } from "@/components/hero-section"
import { FeaturedNews } from "@/components/featured-news"
import { LatestNews } from "@/components/latest-news"
import { TransferRumors } from "@/components/transfer-rumors"
import { TopPlayers } from "@/components/top-players"

export default function HomePage() {
  return (
    <div className="bg-slate-50">
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FeaturedNews />
            <LatestNews />
          </div>
          <div className="space-y-8">
            <TransferRumors />
            <TopPlayers />
          </div>
        </div>
      </div>
    </div>
  )
}
