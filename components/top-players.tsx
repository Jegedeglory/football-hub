import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function TopPlayers() {
  const players = [
    {
      id: 1,
      name: "Erling Haaland",
      team: "Manchester City",
      position: "Forward",
      value: "€180M",
      rating: 94,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Kylian Mbappé",
      team: "PSG",
      position: "Forward",
      value: "€200M",
      rating: 95,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Jude Bellingham",
      team: "Real Madrid",
      position: "Midfielder",
      value: "€150M",
      rating: 89,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 4,
      name: "Pedri",
      team: "Barcelona",
      position: "Midfielder",
      value: "€100M",
      rating: 87,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <span>Top Players</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {players.map((player, index) => (
          <div
            key={player.id}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
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
                <span className="text-xs font-medium text-green-600">{player.value}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-slate-900">{player.rating}</div>
              <div className="text-xs text-slate-500">Rating</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
