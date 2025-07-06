import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Filter } from "lucide-react"
import Image from "next/image"

export default function FixturesPage() {
  const todayFixtures = [
    {
      id: 1,
      homeTeam: "Manchester City",
      awayTeam: "Arsenal",
      homeScore: null,
      awayScore: null,
      time: "17:30",
      competition: "Premier League",
      venue: "Etihad Stadium",
      homeLogo: "/placeholder.svg?height=40&width=40",
      awayLogo: "/placeholder.svg?height=40&width=40",
      status: "upcoming",
    },
    {
      id: 2,
      homeTeam: "Liverpool",
      awayTeam: "Chelsea",
      homeScore: 2,
      awayScore: 1,
      time: "15:00",
      competition: "Premier League",
      venue: "Anfield",
      homeLogo: "/placeholder.svg?height=40&width=40",
      awayLogo: "/placeholder.svg?height=40&width=40",
      status: "finished",
    },
    {
      id: 3,
      homeTeam: "Real Madrid",
      awayTeam: "Barcelona",
      homeScore: 1,
      awayScore: 1,
      time: "21:00",
      competition: "La Liga",
      venue: "Santiago Bernabéu",
      homeLogo: "/placeholder.svg?height=40&width=40",
      awayLogo: "/placeholder.svg?height=40&width=40",
      status: "live",
    },
  ]

  const upcomingFixtures = [
    {
      id: 4,
      homeTeam: "Bayern Munich",
      awayTeam: "Borussia Dortmund",
      date: "Tomorrow",
      time: "18:30",
      competition: "Bundesliga",
      venue: "Allianz Arena",
      homeLogo: "/placeholder.svg?height=40&width=40",
      awayLogo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 5,
      homeTeam: "Juventus",
      awayTeam: "AC Milan",
      date: "Sunday",
      time: "20:45",
      competition: "Serie A",
      venue: "Allianz Stadium",
      homeLogo: "/placeholder.svg?height=40&width=40",
      awayLogo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      homeTeam: "PSG",
      awayTeam: "Marseille",
      date: "Monday",
      time: "21:00",
      competition: "Ligue 1",
      venue: "Parc des Princes",
      homeLogo: "/placeholder.svg?height=40&width=40",
      awayLogo: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Fixtures & Results</h1>
          <p className="text-xl text-slate-600">Stay updated with match schedules and live scores</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-900">Filter by competition:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Premier League", "Champions League", "La Liga", "Serie A", "Bundesliga"].map((filter) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Fixtures */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Today's Fixtures</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {todayFixtures.map((fixture) => (
                  <div key={fixture.id} className="p-4 rounded-lg border hover:bg-slate-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant={fixture.status === "live" ? "default" : "outline"}
                        className={fixture.status === "live" ? "bg-red-600 animate-pulse" : ""}
                      >
                        {fixture.competition}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span>{fixture.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Home Team */}
                      <div className="flex items-center space-x-3 flex-1">
                        <Image
                          src={fixture.homeLogo || "/placeholder.svg"}
                          alt={fixture.homeTeam}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <span className="font-semibold text-slate-900">{fixture.homeTeam}</span>
                      </div>

                      {/* Score */}
                      <div className="px-6">
                        {fixture.status === "upcoming" ? (
                          <div className="text-2xl font-bold text-slate-400">VS</div>
                        ) : (
                          <div className="text-2xl font-bold text-slate-900">
                            {fixture.homeScore} - {fixture.awayScore}
                          </div>
                        )}
                      </div>

                      {/* Away Team */}
                      <div className="flex items-center space-x-3 flex-1 justify-end">
                        <span className="font-semibold text-slate-900">{fixture.awayTeam}</span>
                        <Image
                          src={fixture.awayLogo || "/placeholder.svg"}
                          alt={fixture.awayTeam}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t">
                      <div className="flex items-center space-x-1 text-sm text-slate-500">
                        <MapPin className="w-4 h-4" />
                        <span>{fixture.venue}</span>
                      </div>
                      <Button size="sm" variant="outline">
                        {fixture.status === "upcoming" ? "Preview" : "Match Report"}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Fixtures */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Upcoming Fixtures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingFixtures.map((fixture) => (
                  <div
                    key={fixture.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={fixture.homeLogo || "/placeholder.svg"}
                          alt={fixture.homeTeam}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                        <span className="font-medium text-sm">{fixture.homeTeam}</span>
                      </div>
                      <span className="text-slate-400">vs</span>
                      <div className="flex items-center space-x-2">
                        <Image
                          src={fixture.awayLogo || "/placeholder.svg"}
                          alt={fixture.awayTeam}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                        <span className="font-medium text-sm">{fixture.awayTeam}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-slate-900">{fixture.date}</div>
                      <div className="text-xs text-slate-500">{fixture.time}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Live Scores */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Live Scores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Real Madrid vs Barcelona</span>
                  </div>
                  <span className="text-sm font-bold">1-1</span>
                </div>
                <div className="text-center text-sm text-slate-500">No other live matches</div>
              </CardContent>
            </Card>

            {/* Match of the Day */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Match of the Day</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="text-center">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Manchester City"
                        width={50}
                        height={50}
                        className="rounded-full mx-auto mb-2"
                      />
                      <div className="text-sm font-medium">Man City</div>
                    </div>
                    <div className="text-2xl font-bold text-slate-400">VS</div>
                    <div className="text-center">
                      <Image
                        src="/placeholder.svg?height=50&width=50"
                        alt="Arsenal"
                        width={50}
                        height={50}
                        className="rounded-full mx-auto mb-2"
                      />
                      <div className="text-sm font-medium">Arsenal</div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-600 mb-2">Premier League</div>
                  <div className="text-lg font-bold text-blue-600 mb-4">Today 17:30</div>
                  <Button size="sm" className="w-full">
                    Match Preview
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Today's Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Matches</span>
                  <span className="font-bold text-slate-900">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Goals Scored</span>
                  <span className="font-bold text-slate-900">28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Live Matches</span>
                  <span className="font-bold text-red-600">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Upcoming</span>
                  <span className="font-bold text-blue-600">8</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
