import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"

export function FeaturedNews() {
  const featuredArticles = [
    {
      id: 1,
      title: "Liverpool's Summer Rebuild: Five Key Targets Identified",
      excerpt:
        "Jurgen Klopp's side are planning a major overhaul with focus on midfield reinforcements and defensive stability.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Transfer News",
      author: "James Wilson",
      publishedAt: "2 hours ago",
      slug: "liverpool-summer-rebuild-targets",
    },
    {
      id: 2,
      title: "Champions League Final: City vs Inter Tactical Preview",
      excerpt: "An in-depth analysis of both teams' strategies and key battles that could decide the European crown.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Analysis",
      author: "Sarah Martinez",
      publishedAt: "4 hours ago",
      slug: "champions-league-final-tactical-preview",
    },
  ]

  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Featured Stories</h2>
        <Link href="/news" className="text-blue-600 hover:text-blue-800 font-medium">
          View All News →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredArticles.map((article) => (
          <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/news/${article.slug}`}>
              <div className="relative">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">{article.category}</Badge>
              </div>
            </Link>
            <CardContent className="p-6">
              <Link href={`/news/${article.slug}`}>
                <h3 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
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
    </section>
  )
}
