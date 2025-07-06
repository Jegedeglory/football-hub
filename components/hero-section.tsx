import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Breaking News</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Manchester United Set to Break Transfer Record
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              The Red Devils are reportedly preparing a massive bid that could reshape the summer transfer window and
              set new benchmarks in football transfers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/news/manchester-united-transfer-record">Read Full Story</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
              >
                <Link href="/transfers">View All Transfers</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Manchester United Transfer News"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
