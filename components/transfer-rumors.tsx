import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

export function TransferRumors() {
  const transfers = [
    {
      id: 1,
      player: "Kylian Mbappé",
      from: "PSG",
      to: "Real Madrid",
      value: "€180M",
      probability: "90%",
      image: "/placeholder.svg?height=60&width=60",
      status: "hot",
    },
    {
      id: 2,
      player: "Erling Haaland",
      from: "Man City",
      to: "Barcelona",
      value: "€200M",
      probability: "25%",
      image: "/placeholder.svg?height=60&width=60",
      status: "rumor",
    },
    {
      id: 3,
      player: "Jude Bellingham",
      from: "Real Madrid",
      to: "Liverpool",
      value: "€150M",
      probability: "15%",
      image: "/placeholder.svg?height=60&width=60",
      status: "rumor",
    },
    {
      id: 4,
      player: "Victor Osimhen",
      from: "Napoli",
      to: "Chelsea",
      value: "€120M",
      probability: "70%",
      image: "/placeholder.svg?height=60&width=60",
      status: "hot",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <span>Transfer Rumors</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {transfers.map((transfer) => (
          <div
            key={transfer.id}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Image
              src={transfer.image || "/placeholder.svg"}
              alt={transfer.player}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-semibold text-sm text-slate-900 truncate">{transfer.player}</h4>
                <Badge
                  variant={transfer.status === "hot" ? "default" : "secondary"}
                  className={`text-xs ${transfer.status === "hot" ? "bg-red-100 text-red-800" : ""}`}
                >
                  {transfer.probability}
                </Badge>
              </div>
              <p className="text-xs text-slate-600">
                {transfer.from} → {transfer.to}
              </p>
              <p className="text-xs font-medium text-green-600">{transfer.value}</p>
            </div>
          </div>
        ))}
        <Link
          href="/transfers"
          className="block text-center text-blue-600 hover:text-blue-800 font-medium text-sm pt-2 border-t"
        >
          View All Transfers →
        </Link>
      </CardContent>
    </Card>
  )
}
