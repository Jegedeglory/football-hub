import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"

export function LatestNews() {
  const latestArticles = [
    {
      id: 3,
      title: "Arsenal Close to Signing £60M Midfielder",
      excerpt:
        "The Gunners are in advanced talks with the Spanish international as they look to strengthen their squad.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Transfer News",
      author: "Mike Thompson",
      publishedAt: "1 hour ago",
      slug: "arsenal-60m-midfielder-signing",
    },
    {
      id: 4,
      title: "Messi's Impact on Inter Miami: Statistical Analysis",
      excerpt: "How the Argentine legend has transformed the MLS club both on and off the pitch.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Analysis",
      author: "Carlos Rodriguez",
      publishedAt: "3 hours ago",
      slug: "messi-inter-miami-impact-analysis",
    },
    {
      id: 5,
      title: "Premier League Top 4 Race: Final Day Scenarios",
      excerpt: "Breaking down all possible outcomes for Champions League qualification on the final matchday.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Premier League",
      author: "Emma Davis",
      publishedAt: "5 hours ago",
      slug: "premier-league-top-4-final-day",
    },
    {
      id: 6,
      title: "World Cup 2026: Venue Selection Update",
      excerpt: "Latest developments on stadium selections for the upcoming World Cup in North America.",
      image: "/placeholder.svg?height=200&width=300",
      category: "World Cup",
      author: "David Kim",
      publishedAt: "6 hours ago",
      slug: "world-cup-2026-venue-update",
    },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Latest News</h2>
        <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {latestArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex">
              <Link href={`/news/${article.slug}`} className="flex-shrink-0">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={150}
                  height={120}
                  className="w-32 h-24 object-cover"
                />
              </Link>
              <CardContent className="flex-1 p-4">
                <Badge className="mb-2 text-xs bg-slate-100 text-slate-700 hover:bg-slate-200">
                  {article.category}
                </Badge>
                <Link href={`/news/${article.slug}`}>
                  <h3 className="font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                <div className="flex items-center text-xs text-slate-500 space-x-3">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{article.publishedAt}</span>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
