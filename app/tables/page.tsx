import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react"
import Image from "next/image"

export default function TablesPage() {
  const premierLeagueTable = [
    {
      position: 1,
      team: "Manchester City",
      played: 38,
      won: 28,
      drawn: 5,
      lost: 5,
      goalsFor: 89,
      goalsAgainst: 31,
      goalDifference: 58,
      points: 89,
      form: ["W", "W", "W", "D", "W"],
      logo: "/placeholder.svg?height=30&width=30",
      change: "same",
    },
    {
      position: 2,
      team: "Arsenal",
      played: 38,
      won: 26,
      drawn: 6,
      lost: 6,
      goalsFor: 91,
      goalsAgainst: 29,
      goalDifference: 62,
      points: 84,
      form: ["W", "L", "W", "W", "W"],
      logo: "/placeholder.svg?height=30&width=30",
      change: "up",
    },
    {
      position: 3,
      team: "Manchester United",
      played: 38,
      won: 23,
      drawn: 6,
      lost: 9,
      goalsFor: 58,
      goalsAgainst: 43,
      goalDifference: 15,
      points: 75,
      form: ["D", "W", "W", "L", "W"],
      logo: "/placeholder.svg?height=30&width=30",
      change: "down",
    },
    {
      position: 4,
      team: "Newcastle United",
      played: 38,
      won: 19,
      drawn: 14,
      lost: 5,
      goalsFor: 68,
      goalsAgainst: 33,
      goalDifference: 35,
      points: 71,
      form: ["W", "D", "W", "W", "D"],
      logo: "/placeholder.svg?height=30&width=30",
      change: "up",
    },
    {
      position: 5,
      team: "Liverpool",
      played: 38,
      won: 19,
      drawn: 10,
      lost: 9,
      goalsFor: 75,
      goalsAgainst: 28,
      goalDifference: 47,
      points: 67,
      form: ["W", "W", "L", "W", "D"],
      logo: "/placeholder.svg?height=30&width=30",
      change: "down",
    },
    {
      position: 6,
      team: "Brighton",
      played: 38,
      won: 18,
      drawn: 8,
      lost: 12,
      goalsFor: 72,
      goalsAgainst: 53,
      goalDifference: 19,
      points: 62,
      form: ["L", "W", "W", "D", "W"],
      logo: "/placeholder.svg?height=30&width=30",
      change: "same",
    },
  ]

  const otherLeagues = [
    {
      name: "La Liga",
      leader: "Real Madrid",
      points: 95,
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Serie A",
      leader: "Inter Milan",
      points: 94,
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Bundesliga",
      leader: "Bayern Munich",
      points: 71,
      logo: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Ligue 1",
      leader: "PSG",
      points: 79,
      logo: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">League Tables</h1>
          <p className="text-xl text-slate-600">Current standings from top football leagues</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Table */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  <span>Premier League Table</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left">
                        <th className="pb-3 text-sm font-medium text-slate-600">#</th>
                        <th className="pb-3 text-sm font-medium text-slate-600">Team</th>
                        <th className="pb-3 text-sm font-medium text-slate-600 text-center">P</th>
                        <th className="pb-3 text-sm font-medium text-slate-600 text-center">W</th>
                        <th className="pb-3 text-sm font-medium text-slate-600 text-center">D</th>
                        <th className="pb-3 text-sm font-medium text-slate-600 text-center">L</th>
                        <th className="pb-3 text-sm font-medium text-slate-600 text-center">GF</th>
                        <th className="pb-3 text-sm font-medium text-slate-600 text-center">GA</th>
                        <th className="pb-3 text-sm font-medium text-slate-600 text-center">GD</th>
                        <th className="pb-3 text-sm font-medium text-slate-600 text-center">Pts</th>
                        <th className="pb-3 text-sm font-medium text-slate-600">Form</th>
                      </tr>
                    </thead>
                    <tbody>
                      {premierLeagueTable.map((team) => (
                        <tr key={team.position} className="border-b hover:bg-slate-50 transition-colors">
                          <td className="py-4">
                            <div className="flex items-center space-x-2">
                              <span
                                className={`font-bold ${
                                  team.position <= 4
                                    ? "text-blue-600"
                                    : team.position <= 6
                                      ? "text-orange-600"
                                      : team.position >= 18
                                        ? "text-red-600"
                                        : "text-slate-900"
                                }`}
                              >
                                {team.position}
                              </span>
                              {team.change === "up" && <TrendingUp className="w-3 h-3 text-green-600" />}
                              {team.change === "down" && <TrendingDown className="w-3 h-3 text-red-600" />}
                              {team.change === "same" && <Minus className="w-3 h-3 text-slate-400" />}
                            </div>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center space-x-3">
                              <Image
                                src={team.logo || "/placeholder.svg"}
                                alt={team.team}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              <span className="font-medium text-slate-900">{team.team}</span>
                            </div>
                          </td>
                          <td className="py-4 text-center text-sm">{team.played}</td>
                          <td className="py-4 text-center text-sm">{team.won}</td>
                          <td className="py-4 text-center text-sm">{team.drawn}</td>
                          <td className="py-4 text-center text-sm">{team.lost}</td>
                          <td className="py-4 text-center text-sm">{team.goalsFor}</td>
                          <td className="py-4 text-center text-sm">{team.goalsAgainst}</td>
                          <td className="py-4 text-center text-sm font-medium">
                            <span
                              className={
                                team.goalDifference > 0
                                  ? "text-green-600"
                                  : team.goalDifference < 0
                                    ? "text-red-600"
                                    : "text-slate-600"
                              }
                            >
                              {team.goalDifference > 0 ? "+" : ""}
                              {team.goalDifference}
                            </span>
                          </td>
                          <td className="py-4 text-center font-bold text-slate-900">{team.points}</td>
                          <td className="py-4">
                            <div className="flex space-x-1">
                              {team.form.map((result, index) => (
                                <div
                                  key={index}
                                  className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                                    result === "W" ? "bg-green-500" : result === "D" ? "bg-yellow-500" : "bg-red-500"
                                  }`}
                                >
                                  {result}
                                </div>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Legend */}
                <div className="mt-6 pt-4 border-t">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-600 rounded"></div>
                      <span className="text-slate-600">Champions League</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-orange-600 rounded"></div>
                      <span className="text-slate-600">Europa League</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-600 rounded"></div>
                      <span className="text-slate-600">Relegation</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Other League Leaders */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Other League Leaders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {otherLeagues.map((league) => (
                  <div
                    key={league.name}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Image
                        src={league.logo || "/placeholder.svg"}
                        alt={league.leader}
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium text-sm text-slate-900">{league.leader}</div>
                        <div className="text-xs text-slate-600">{league.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{league.points}</div>
                      <div className="text-xs text-slate-500">pts</div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  View All Tables
                </Button>
              </CardContent>
            </Card>

            {/* Top Scorers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Top Scorers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg?height=30&width=30"
                      alt="Erling Haaland"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium text-sm">E. Haaland</div>
                      <div className="text-xs text-slate-600">Man City</div>
                    </div>
                  </div>
                  <div className="font-bold text-blue-600">36</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg?height=30&width=30"
                      alt="Harry Kane"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium text-sm">H. Kane</div>
                      <div className="text-xs text-slate-600">Tottenham</div>
                    </div>
                  </div>
                  <div className="font-bold text-blue-600">30</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg?height=30&width=30"
                      alt="Ivan Toney"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium text-sm">I. Toney</div>
                      <div className="text-xs text-slate-600">Brentford</div>
                    </div>
                  </div>
                  <div className="font-bold text-blue-600">21</div>
                </div>
              </CardContent>
            </Card>

            {/* League Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">League Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Goals</span>
                  <span className="font-bold text-slate-900">1,084</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Avg Goals/Game</span>
                  <span className="font-bold text-slate-900">2.86</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Clean Sheets</span>
                  <span className="font-bold text-slate-900">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Red Cards</span>
                  <span className="font-bold text-red-600">89</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
