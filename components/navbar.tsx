"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const resolveHref = (href: string) => (pathname === "/" ? href : `/${href}`)

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between py-5 md:py-6">
          <Link href="/" className="flex flex-col gap-1 leading-none no-underline">
            <span className="text-[1.2rem] font-bold tracking-tight text-foreground md:text-[1.35rem]">
              Rihua V.
            </span>
            <span className="font-mono text-[0.8rem] font-semibold tracking-[0.20em] text-primary uppercase md:text-xs">
              Data Scientist • Applied AI
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={resolveHref(link.href)}
                  className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-b border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 pb-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={resolveHref(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
