"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, User, Bell } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Teams", href: "/teams" },
    { name: "Transfers", href: "/transfers" },
    { name: "Players", href: "/players" },
    { name: "Fixtures", href: "/fixtures" },
    { name: "Tables", href: "/tables" },
  ]

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FH</span>
            </div>
            <span className="text-xl font-bold">FootballHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-64 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-slate-500 hover:bg-transparent">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-slate-500 hover:bg-transparent">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-300 hover:text-slate-500 hover:bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-slate-800">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-full bg-slate-800 border-slate-700 text-white placeholder-slate-400"
                />
              </div>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-slate-500 hover:bg-transparent"
                >
                  <Bell className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-slate-300 hover:text-slate-500 hover:bg-transparent"
                >
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
