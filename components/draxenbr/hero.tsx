"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Particles } from "./particles"

function CopyIpButton({ ip }: { ip: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(ip)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={copy}
      className="flex items-center gap-3 bg-secondary/60 border border-border/60 rounded-xl px-5 py-3 font-mono text-sm text-foreground hover:border-primary/60 transition-all group"
      aria-label="Copiar IP do servidor"
    >
      <span className="text-primary font-bold tracking-widest">{ip}</span>
      <span className="text-muted-foreground text-xs border border-border/50 rounded px-2 py-0.5 group-hover:border-primary/50 transition-colors">
        {copied ? "Copiado!" : "Copiar IP"}
      </span>
    </button>
  )
}

function PlayersOnline() {
  const [count, setCount] = useState(247)
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3) - 1)
    }, 3000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
      </span>
      <span className="text-sm text-muted-foreground font-heading">
        <span className="text-green-400 font-bold">{count}</span> jogadores online
      </span>
    </div>
  )
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => {
      if (!heroRef.current) return
      const y = window.scrollY
      heroRef.current.style.backgroundPositionY = `${y * 0.4}px`
    }
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/65" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto gap-8">
        {/* Logo text */}
        <div className="flex flex-col items-center gap-2">
          <h1
            className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-widest leading-none"
            style={{
              color: "oklch(0.72 0.22 210)",
              textShadow:
                "0 0 40px oklch(0.72 0.22 210 / 0.8), 0 0 80px oklch(0.72 0.22 210 / 0.4), 0 2px 0 rgba(0,0,0,0.8)",
            }}
          >
            DRAXENBR
          </h1>
          <div
            className="h-px w-48 md:w-72"
            style={{
              background:
                "linear-gradient(to right, transparent, oklch(0.72 0.22 210), transparent)",
            }}
          />
        </div>

        <p className="font-heading text-2xl md:text-3xl font-bold text-foreground text-balance">
          Um novo mundo para explorar
        </p>
        <p className="font-sans text-base md:text-lg text-muted-foreground max-w-xl text-pretty leading-relaxed">
          Servidor RPG com mods, facções e aventuras épicas. Escolha seu lado entre Anjos e Demônios e escreva sua história.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
          <a
            href="#features"
            className="flex-1 font-heading text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-xl text-primary-foreground text-center transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{
              background: "oklch(0.72 0.22 210)",
              boxShadow: "0 0 30px oklch(0.72 0.22 210 / 0.5), 0 4px 15px rgba(0,0,0,0.4)",
            }}
          >
            Jogar Agora
          </a>
          <a
            href="https://discord.gg/PkEe3pFbmm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 font-heading text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-xl text-foreground text-center border border-border/60 bg-secondary/40 backdrop-blur-sm hover:border-primary/60 hover:bg-secondary/60 transition-all duration-200"
          >
            Entrar no Discord
          </a>
        </div>

        {/* Server IP */}
        <CopyIpButton ip="DraxenBR.razehost.net" />

        {/* Players */}
        <PlayersOnline />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground font-heading uppercase tracking-widest">Explorar</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" aria-hidden="true">
          <path d="M8 2v20M2 16l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
        </svg>
      </div>
    </section>
  )
}
