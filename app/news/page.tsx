import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, Filter } from "lucide-react"

export default function NewsPage() {
  const newsArticles = [
    {
      id: 1,
      title: "Manchester United Set to Break Transfer Record with €200M Bid",
      excerpt: "The Red Devils are reportedly preparing a massive bid that could reshape the summer transfer window.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Transfer News",
      author: "James Wilson",
      publishedAt: "2 hours ago",
      slug: "manchester-united-transfer-record",
      featured: true,
    },
    {
      id: 2,
      title: "Liverpool's Summer Rebuild: Five Key Targets Identified",
      excerpt: "Jurgen Klopp's side are planning a major overhaul with focus on midfield reinforcements.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Transfer News",
      author: "Sarah Martinez",
      publishedAt: "4 hours ago",
      slug: "liverpool-summer-rebuild-targets",
    },
    {
      id: 3,
      title: "Champions League Final: Tactical Analysis and Predictions",
      excerpt: "An in-depth look at both teams' strategies and key battles that could decide the European crown.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Analysis",
      author: "Mike Thompson",
      publishedAt: "6 hours ago",
      slug: "champions-league-final-analysis",
    },
    {
      id: 4,
      title: "Arsenal Close to Signing £60M Midfielder",
      excerpt: "The Gunners are in advanced talks with the Spanish international.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Transfer News",
      author: "Emma Davis",
      publishedAt: "8 hours ago",
      slug: "arsenal-60m-midfielder-signing",
    },
    {
      id: 5,
      title: "Premier League Top 4 Race: Final Day Scenarios",
      excerpt: "Breaking down all possible outcomes for Champions League qualification.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Premier League",
      author: "David Kim",
      publishedAt: "10 hours ago",
      slug: "premier-league-top-4-final-day",
    },
    {
      id: 6,
      title: "Messi's Impact on Inter Miami: Statistical Deep Dive",
      excerpt: "How the Argentine legend has transformed the MLS club both on and off the pitch.",
      image: "/placeholder.svg?height=300&width=500",
      category: "MLS",
      author: "Carlos Rodriguez",
      publishedAt: "12 hours ago",
      slug: "messi-inter-miami-impact",
    },
  ]

  const categories = ["All", "Transfer News", "Premier League", "Champions League", "Analysis", "MLS"]

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Latest Football News</h1>
          <p className="text-xl text-slate-600">Stay updated with the latest happenings in the football world</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-900">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${article.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <Link href={`/news/${article.slug}`}>
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={500}
                    height={300}
                    className={`w-full object-cover ${article.featured ? "h-64" : "h-48"}`}
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">{article.category}</Badge>
                  {article.featured && (
                    <Badge className="absolute top-4 right-4 bg-red-600 hover:bg-red-700">Featured</Badge>
                  )}
                </div>
              </Link>
              <CardContent className="p-6">
                <Link href={`/news/${article.slug}`}>
                  <h3
                    className={`font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors ${article.featured ? "text-2xl" : "text-xl"}`}
                  >
                    {article.title}
                  </h3>
                </Link>
                <p className="text-slate-600 mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.publishedAt}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}
