import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FH</span>
              </div>
              <span className="text-xl font-bold">FootballHub</span>
            </Link>
            <p className="text-slate-400 mb-4">Your ultimate destination for football news, transfers, and insights.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-slate-400 hover:text-white transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/transfers" className="text-slate-400 hover:text-white transition-colors">
                  Transfer News
                </Link>
              </li>
              <li>
                <Link href="/teams" className="text-slate-400 hover:text-white transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link href="/players" className="text-slate-400 hover:text-white transition-colors">
                  Players
                </Link>
              </li>
            </ul>
          </div>

          {/* Leagues */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leagues</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/leagues/premier-league" className="text-slate-400 hover:text-white transition-colors">
                  Premier League
                </Link>
              </li>
              <li>
                <Link href="/leagues/la-liga" className="text-slate-400 hover:text-white transition-colors">
                  La Liga
                </Link>
              </li>
              <li>
                <Link href="/leagues/serie-a" className="text-slate-400 hover:text-white transition-colors">
                  Serie A
                </Link>
              </li>
              <li>
                <Link href="/leagues/bundesliga" className="text-slate-400 hover:text-white transition-colors">
                  Bundesliga
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 FootballHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
