'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Book, BookOpen, FileCode2, Database, Menu, Search } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

const navItems = [
  { name: 'Introduction', href: '/', icon: Book },
  { name: 'Getting Started', href: '/getting-started', icon: BookOpen },
  { name: 'API Reference', href: '/api-reference', icon: FileCode2 },
  { name: 'Data Sources', href: '/data-sources', icon: Database },
]

export default function Navigation() {
  const pathname = usePathname()

  const NavContent = () => (
    <>
      <div className="mb-4 px-4">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input className="pl-8" placeholder="Search documentation..." />
        </div>
      </div>
      <div className="space-y-1 px-2">
        {navItems.map(({ name, href, icon: Icon }, index) => (
          <Button
            key={href}
            asChild
            variant="ghost"
            className={cn(
              "w-full justify-start gap-2 hover:bg-muted animate-fade-in",
              pathname === href ? "bg-muted font-semibold" : ""
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Link href={href}>
              <Icon className="h-4 w-4" />
              {name}
            </Link>
          </Button>
        ))}
      </div>
    </>
  )

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="border-b px-6 py-4 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Link href="/" className="flex items-center space-x-2 group">
            <Book className="h-6 w-6 bg-primary text-primary-foreground rounded-md p-1 group-hover:animate-float hover-lift" />
            <span className="font-bold text-2xl text-primary">Quran JSON <span className="text-sm">v1.0.0</span></span>
          </Link>
          <ThemeToggle />
        </div>
        <ScrollArea className="flex-1 py-4 border-r">
          <nav>
            <NavContent />
          </nav>
        </ScrollArea>
      </div>

      {/* Mobile Navigation */}
      <div className="flex lg:hidden fixed top-0 inset-x-0 h-16 items-center justify-between border-b px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <Link href="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6 bg-primary text-primary-foreground rounded-md p-1 hover-lift" />
          <span className="font-bold text-xl text-primary">Quran JSON <span className="text-sm">v1.0.0</span></span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-8">
                <NavContent />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}

