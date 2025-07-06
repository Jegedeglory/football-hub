import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function PlayersPage() {
  const topPlayers = [
    {
      id: 1,
      name: "Erling Haaland",
      team: "Manchester City",
      position: "Forward",
      nationality: "Norway",
      age: 23,
      value: "€180M",
      rating: 94,
      goals: 36,
      assists: 8,
      image: "/placeholder.svg?height=100&width=100",
      flag: "/placeholder.svg?height=20&width=30",
    },
    {
      id: 2,
      name: "Kylian Mbappé",
      team: "PSG",
      position: "Forward",
      nationality: "France",
      age: 25,
      value: "€200M",
      rating: 95,
      goals: 41,
      assists: 10,
      image: "/placeholder.svg?height=100&width=100",
      flag: "/placeholder.svg?height=20&width=30",
    },
    {
      id: 3,
      name: "Jude Bellingham",
      team: "Real Madrid",
      position: "Midfielder",
      nationality: "England",
      age: 20,
      value: "€150M",
      rating: 89,
      goals: 23,
      assists: 13,
      image: "/placeholder.svg?height=100&width=100",
      flag: "/placeholder.svg?height=20&width=30",
    },
    {
      id: 4,
      name: "Pedri",
      team: "Barcelona",
      position: "Midfielder",
      nationality: "Spain",
      age: 21,
      value: "€100M",
      rating: 87,
      goals: 7,
      assists: 8,
      image: "/placeholder.svg?height=100&width=100",
      flag: "/placeholder.svg?height=20&width=30",
    },
    {
      id: 5,
      name: "Vinicius Jr.",
      team: "Real Madrid",
      position: "Winger",
      nationality: "Brazil",
      age: 23,
      value: "€120M",
      rating: 88,
      goals: 24,
      assists: 11,
      image: "/placeholder.svg?height=100&width=100",
      flag: "/placeholder.svg?height=20&width=30",
    },
    {
      id: 6,
      name: "Phil Foden",
      team: "Manchester City",
      position: "Midfielder",
      nationality: "England",
      age: 24,
      value: "€110M",
      rating: 86,
      goals: 19,
      assists: 9,
      image: "/placeholder.svg?height=100&width=100",
      flag: "/placeholder.svg?height=20&width=30",
    },
  ]

  const risingStars = [
    {
      id: 7,
      name: "Jamal Musiala",
      team: "Bayern Munich",
      position: "Attacking Midfielder",
      nationality: "Germany",
      age: 21,
      value: "€90M",
      rating: 84,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 8,
      name: "Gavi",
      team: "Barcelona",
      position: "Midfielder",
      nationality: "Spain",
      age: 19,
      value: "€80M",
      rating: 82,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 9,
      name: "Eduardo Camavinga",
      team: "Real Madrid",
      position: "Midfielder",
      nationality: "France",
      age: 21,
      value: "€70M",
      rating: 81,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Football Players</h1>
          <p className="text-xl text-slate-600">Discover the world's best football talents and rising stars</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input type="search" placeholder="Search players..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
              <Filter className="w-4 h-4" />
              <span>Advanced Filters</span>
            </Button>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-900">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "All",
              "Forwards",
              "Midfielders",
              "Defenders",
              "Goalkeepers",
              "Under 21",
              "Premier League",
              "La Liga",
            ].map((filter) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Players Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Top Players</h2>
              <Button variant="outline">View All Players</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topPlayers.map((player) => (
                <Card key={player.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <Image
                          src={player.image || "/placeholder.svg"}
                          alt={player.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {player.rating}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-bold text-slate-900">{player.name}</h3>
                          <Image
                            src={player.flag || "/placeholder.svg"}
                            alt={player.nationality}
                            width={20}
                            height={15}
                            className="rounded"
                          />
                        </div>
                        <p className="text-slate-600 mb-1">{player.team}</p>
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {player.position}
                          </Badge>
                          <span className="text-sm text-slate-500">Age {player.age}</span>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{player.goals}</div>
                            <div className="text-xs text-slate-500">Goals</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">{player.assists}</div>
                            <div className="text-xs text-slate-500">Assists</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-green-600">{player.value}</span>
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rising Stars */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-bold text-slate-900">Rising Stars</h3>
                </div>
                <div className="space-y-4">
                  {risingStars.map((player, index) => (
                    <div key={player.id} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 text-center">
                        <span className="text-sm font-bold text-slate-500">#{index + 1}</span>
                      </div>
                      <Image
                        src={player.image || "/placeholder.svg"}
                        alt={player.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-slate-900 truncate">{player.name}</h4>
                        <p className="text-xs text-slate-600">{player.team}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {player.position}
                          </Badge>
                          <span className="text-xs text-slate-500">Age {player.age}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-slate-900">{player.rating}</div>
                        <div className="text-xs text-green-600">{player.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Player Stats */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Player Stats</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Most Goals</span>
                    <span className="font-bold text-slate-900">Mbappé (41)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Most Assists</span>
                    <span className="font-bold text-slate-900">Bellingham (13)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Highest Rating</span>
                    <span className="font-bold text-slate-900">Mbappé (95)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Most Valuable</span>
                    <span className="font-bold text-green-600">€200M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
