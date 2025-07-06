import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Clock, Filter } from "lucide-react"

export default function TransfersPage() {
  const transfers = [
    {
      id: 1,
      player: "Kylian Mbappé",
      from: "PSG",
      to: "Real Madrid",
      value: "€180M",
      probability: "90%",
      image: "/placeholder.svg?height=80&width=80",
      status: "hot",
      trend: "up",
      lastUpdate: "2 hours ago",
    },
    {
      id: 2,
      player: "Victor Osimhen",
      from: "Napoli",
      to: "Chelsea",
      value: "€120M",
      probability: "75%",
      image: "/placeholder.svg?height=80&width=80",
      status: "hot",
      trend: "up",
      lastUpdate: "4 hours ago",
    },
    {
      id: 3,
      player: "Jamal Musiala",
      from: "Bayern Munich",
      to: "Manchester City",
      value: "€100M",
      probability: "45%",
      image: "/placeholder.svg?height=80&width=80",
      status: "warm",
      trend: "down",
      lastUpdate: "6 hours ago",
    },
    {
      id: 4,
      player: "Pedri",
      from: "Barcelona",
      to: "Liverpool",
      value: "€90M",
      probability: "30%",
      image: "/placeholder.svg?height=80&width=80",
      status: "rumor",
      trend: "up",
      lastUpdate: "8 hours ago",
    },
    {
      id: 5,
      player: "Jude Bellingham",
      from: "Real Madrid",
      to: "Manchester United",
      value: "€150M",
      probability: "20%",
      image: "/placeholder.svg?height=80&width=80",
      status: "rumor",
      trend: "down",
      lastUpdate: "12 hours ago",
    },
    {
      id: 6,
      player: "Erling Haaland",
      from: "Manchester City",
      to: "Barcelona",
      value: "€200M",
      probability: "15%",
      image: "/placeholder.svg?height=80&width=80",
      status: "cold",
      trend: "down",
      lastUpdate: "1 day ago",
    },
  ]

  const completedTransfers = [
    {
      id: 1,
      player: "Declan Rice",
      from: "West Ham",
      to: "Arsenal",
      value: "€116M",
      date: "July 15, 2024",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      player: "Mason Mount",
      from: "Chelsea",
      to: "Manchester United",
      value: "€64M",
      date: "July 5, 2024",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      player: "Kai Havertz",
      from: "Chelsea",
      to: "Arsenal",
      value: "€75M",
      date: "June 28, 2024",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Transfer Center</h1>
          <p className="text-xl text-slate-600">Latest transfer news, rumors, and completed deals</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-medium text-slate-900">Filter transfers:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "Hot", "Warm", "Rumors", "Completed"].map((filter) => (
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
          {/* Transfer Rumors */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Transfer Rumors & News</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {transfers.map((transfer) => (
                  <div
                    key={transfer.id}
                    className="flex items-center space-x-4 p-4 rounded-lg border hover:bg-slate-50 transition-colors"
                  >
                    <Image
                      src={transfer.image || "/placeholder.svg"}
                      alt={transfer.player}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-lg text-slate-900">{transfer.player}</h3>
                        <Badge
                          variant={
                            transfer.status === "hot" ? "default" : transfer.status === "warm" ? "secondary" : "outline"
                          }
                          className={`text-xs ${
                            transfer.status === "hot"
                              ? "bg-red-100 text-red-800"
                              : transfer.status === "warm"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-slate-100 text-slate-800"
                          }`}
                        >
                          {transfer.probability}
                        </Badge>
                        {transfer.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-600" />
                        )}
                      </div>
                      <p className="text-slate-600 mb-2">
                        <span className="font-medium">{transfer.from}</span> →{" "}
                        <span className="font-medium">{transfer.to}</span>
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-600">{transfer.value}</span>
                        <div className="flex items-center space-x-1 text-sm text-slate-500">
                          <Clock className="w-4 h-4" />
                          <span>{transfer.lastUpdate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Completed Transfers */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Completed Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {completedTransfers.map((transfer) => (
                  <div
                    key={transfer.id}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-green-50 border border-green-200"
                  >
                    <Image
                      src={transfer.image || "/placeholder.svg"}
                      alt={transfer.player}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-slate-900">{transfer.player}</h4>
                      <p className="text-xs text-slate-600 mb-1">
                        {transfer.from} → {transfer.to}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">{transfer.value}</span>
                        <span className="text-xs text-slate-500">{transfer.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  View All Completed Transfers
                </Button>
              </CardContent>
            </Card>

            {/* Transfer Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Transfer Window Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Spent</span>
                  <span className="font-bold text-xl text-slate-900">€2.1B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Completed Deals</span>
                  <span className="font-bold text-xl text-slate-900">247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Active Rumors</span>
                  <span className="font-bold text-xl text-slate-900">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Record Transfer</span>
                  <span className="font-bold text-lg text-green-600">€222M</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
