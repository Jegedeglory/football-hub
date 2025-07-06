import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, TrendingUp, Filter } from "lucide-react"

export default function TeamsPage() {
  const leagues = [
    {
      name: "Premier League",
      country: "England",
      teams: 20,
      slug: "premier-league",
    },
    {
      name: "La Liga",
      country: "Spain",
      teams: 20,
      slug: "la-liga",
    },
    {
      name: "Serie A",
      country: "Italy",
      teams: 20,
      slug: "serie-a",
    },
    {
      name: "Bundesliga",
      country: "Germany",
      teams: 18,
      slug: "bundesliga",
    },
  ]

  const featuredTeams = [
    {
      id: 1,
      name: "Manchester City",
      league: "Premier League",
      position: 1,
      points: 89,
      logo: "/placeholder.svg?height=80&width=80",
      form: ["W", "W", "W", "D", "W"],
      value: "€1.2B",
      slug: "manchester-city",
    },
    {
      id: 2,
      name: "Real Madrid",
      league: "La Liga",
      position: 1,
      points: 95,
      logo: "/placeholder.svg?height=80&width=80",
      form: ["W", "W", "L", "W", "W"],
      value: "€1.1B",
      slug: "real-madrid",
    },
    {
      id: 3,
      name: "Inter Milan",
      league: "Serie A",
      position: 1,
      points: 94,
      logo: "/placeholder.svg?height=80&width=80",
      form: ["W", "D", "W", "W", "W"],
      value: "€650M",
      slug: "inter-milan",
    },
    {
      id: 4,
      name: "Bayern Munich",
      league: "Bundesliga",
      position: 1,
      points: 71,
      logo: "/placeholder.svg?height=80&width=80",
      form: ["W", "W", "W", "W", "D"],
      value: "€1.0B",
      slug: "bayern-munich",
    },
    {
      id: 5,
      name: "Arsenal",
      league: "Premier League",
      position: 2,
      points: 84,
      logo: "/placeholder.svg?height=80&width=80",
      form: ["W", "L", "W", "W", "W"],
      value: "€800M",
      slug: "arsenal",
    },
    {
      id: 6,
      name: "Barcelona",
      league: "La Liga",
      position: 2,
      points: 85,
      logo: "/placeholder.svg?height=80&width=80",
      form: ["D", "W", "W", "W", "L"],
      value: "€900M",
      slug: "barcelona",
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Football Teams</h1>
          <p className="text-xl text-slate-600">Explore teams from top leagues around the world</p>
        </div>

        {/* Leagues Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Top Leagues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leagues.map((league) => (
              <Card key={league.slug} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{league.name}</h3>
                  <p className="text-slate-600 mb-2">{league.country}</p>
                  <div className="flex items-center justify-center space-x-1 text-sm text-slate-500 mb-4">
                    <Users className="w-4 h-4" />
                    <span>{league.teams} teams</span>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href={`/leagues/${league.slug}`}>View League</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-900">Filter teams:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Premier League", "La Liga", "Serie A", "Bundesliga", "Champions League"].map((filter) => (
              <Button
                key={filter}
                variant={filter === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Teams */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Featured Teams</h2>
            <Button variant="outline">View All Teams</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTeams.map((team) => (
              <Card key={team.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={team.logo || "/placeholder.svg"}
                      alt={`${team.name} logo`}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <Link href={`/teams/${team.slug}`}>
                        <h3 className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                          {team.name}
                        </h3>
                      </Link>
                      <p className="text-slate-600">{team.league}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          #{team.position}
                        </Badge>
                        <span className="text-sm text-slate-500">{team.points} pts</span>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-slate-600" />
                      <span className="text-sm font-medium text-slate-700">Recent Form</span>
                    </div>
                    <div className="flex space-x-1">
                      {team.form.map((result, index) => (
                        <div
                          key={index}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                            result === "W" ? "bg-green-500" : result === "D" ? "bg-yellow-500" : "bg-red-500"
                          }`}
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Team Value */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-sm text-slate-600">Squad Value</span>
                    <span className="font-bold text-green-600">{team.value}</span>
                  </div>

                  <Button asChild className="w-full mt-4 bg-transparent" variant="outline">
                    <Link href={`/teams/${team.slug}`}>View Team Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
