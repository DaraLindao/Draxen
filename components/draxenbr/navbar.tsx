"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Servidor", href: "#features" },
  { label: "Mapas", href: "#maps" },
  { label: "Comunidade", href: "#community" },
  { label: "Discord", href: "https://discord.gg/PkEe3pFbmm", external: true },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-[0_4px_30px_rgba(0,180,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <span
            className="font-display text-2xl font-black tracking-widest"
            style={{
              color: "oklch(0.72 0.22 210)",
              textShadow: "0 0 20px oklch(0.72 0.22 210 / 0.6)",
            }}
          >
            DRAXEN
          </span>
          <span className="font-display text-2xl font-black tracking-widest text-foreground">BR</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="font-heading text-sm font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#home"
          className="hidden md:block font-heading text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          style={{ boxShadow: "0 0 12px oklch(0.72 0.22 210 / 0.3)" }}
        >
          Jogar Agora
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-base font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#home"
            className="mt-2 font-heading text-sm font-bold uppercase tracking-widest px-5 py-3 rounded-lg border border-primary text-primary text-center hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Jogar Agora
          </a>
        </div>
      )}
    </header>
  )
}
