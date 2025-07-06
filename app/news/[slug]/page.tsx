import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, User, Share2, Bookmark, ArrowLeft } from "lucide-react"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  // In a real app, you would fetch the article data based on the slug
  const article = {
    title: "Manchester United Set to Break Transfer Record with €200M Bid",
    excerpt:
      "The Red Devils are reportedly preparing a massive bid that could reshape the summer transfer window and set new benchmarks in football transfers.",
    content: `
      <p>Manchester United are reportedly preparing to make football history with a record-breaking €200 million bid for one of Europe's most coveted talents, according to sources close to the club.</p>
      
      <p>The move would surpass the current transfer record of €222 million paid by Paris Saint-Germain for Neymar in 2017, signaling United's serious intent to return to the pinnacle of European football.</p>
      
      <h2>The Target</h2>
      <p>While the club has remained tight-lipped about the specific player, sources suggest the target is a versatile forward who has been instrumental in their current team's recent success in both domestic and European competitions.</p>
      
      <p>The player, who is reportedly keen on a move to Old Trafford, has scored 41 goals in 39 appearances this season and has been a key figure in their team's Champions League campaign.</p>
      
      <h2>Financial Implications</h2>
      <p>The proposed transfer would represent a significant investment from United's ownership, demonstrating their commitment to competing with Europe's elite clubs. The deal would likely include performance-related bonuses that could push the total value even higher.</p>
      
      <p>Financial Fair Play regulations will need to be carefully navigated, but United's strong commercial revenue streams and recent player sales have positioned them well to make such a significant investment.</p>
      
      <h2>Manager's Vision</h2>
      <p>United's manager has been vocal about the need for a world-class addition to the forward line, and this potential signing would fulfill that requirement while also making a statement of intent to rivals.</p>
      
      <p>The acquisition would complete what many consider to be one of the most impressive transfer windows in recent memory for the Red Devils.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Transfer News",
    author: "James Wilson",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    tags: ["Manchester United", "Transfer Record", "Premier League", "Breaking News"],
  }

  const relatedArticles = [
    {
      id: 1,
      title: "Liverpool's Summer Rebuild: Five Key Targets Identified",
      image: "/placeholder.svg?height=200&width=300",
      slug: "liverpool-summer-rebuild-targets",
    },
    {
      id: 2,
      title: "Arsenal Close to Signing £60M Midfielder",
      image: "/placeholder.svg?height=200&width=300",
      slug: "arsenal-60m-midfielder-signing",
    },
    {
      id: 3,
      title: "Champions League Final: Tactical Analysis",
      image: "/placeholder.svg?height=200&width=300",
      slug: "champions-league-final-analysis",
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/news" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to News</span>
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article */}
          <article className="lg:col-span-3">
            <Card>
              <CardContent className="p-0">
                {/* Hero Image */}
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">{article.category}</Badge>
                </div>

                {/* Article Content */}
                <div className="p-6 md:p-8">
                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.publishedAt}</span>
                    </div>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">{article.title}</h1>

                  {/* Excerpt */}
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">{article.excerpt}</p>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 mb-8 pb-8 border-b">
                    <Button size="sm" variant="outline" className="flex items-center space-x-2 bg-transparent">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </Button>
                    <Button size="sm" variant="outline" className="flex items-center space-x-2 bg-transparent">
                      <Bookmark className="w-4 h-4" />
                      <span>Save</span>
                    </Button>
                  </div>

                  {/* Article Body */}
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />

                  {/* Tags */}
                  <div className="mt-8 pt-8 border-t">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="hover:bg-slate-100">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Articles */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <Link key={relatedArticle.id} href={`/news/${relatedArticle.slug}`}>
                      <div className="flex space-x-3 hover:bg-slate-50 p-2 rounded-lg transition-colors">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          width={80}
                          height={60}
                          className="rounded object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-slate-900 line-clamp-2 hover:text-blue-600 transition-colors">
                            {relatedArticle.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-slate-600 mb-4">Get the latest football news delivered to your inbox.</p>
                <Button className="w-full">Subscribe to Newsletter</Button>
              </CardContent>
            </Card>

            {/* Popular Articles */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Popular This Week</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {item}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href="#"
                          className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors line-clamp-2"
                        >
                          Sample popular article title that might be quite long
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
