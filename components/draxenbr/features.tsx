"use client"

import { useEffect, useRef, useState } from "react"

interface FeatureCard {
  icon: string
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: "⚔️",
    title: "RPG Imersivo",
    description: "Roleplay profundo com história, progressão de personagem e missões épicas.",
  },
  {
    icon: "😇",
    title: "Anjos vs Demônios",
    description: "Escolha seu lado entre o bem e o mal e lute pela supremacia do servidor.",
  },
  {
    icon: "🏛️",
    title: "Templo dos Anjos",
    description: "Uma dimensão sagrada dominada pelos anjos, repleta de poderes celestiais.",
  },
  {
    icon: "🔥",
    title: "Reino dos Demônios",
    description: "O Nether pertence às forças demoníacas. Domine as chamas ou seja consumido.",
  },
  {
    icon: "🧩",
    title: "86 Mods",
    description: "Servidor modpack com dezenas de sistemas únicos que transformam a experiência.",
  },
  {
    icon: "🧭",
    title: "Hierarquia",
    description: "Sistema de ranks e progressão dentro do servidor. Suba na escala do poder.",
  },
]

function FeatureCard({ card, index }: { card: FeatureCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 flex flex-col gap-4 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
      style={{
        transitionDelay: `${index * 60}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 60}ms, transform 0.5s ease ${index * 60}ms, border-color 0.3s, box-shadow 0.3s`,
        boxShadow: "0 0 0 rgba(0,180,255,0)",
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 30px oklch(0.72 0.22 210 / 0.15), 0 8px 32px rgba(0,0,0,0.3)"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 rgba(0,180,255,0)"
      }}
    >
      {/* Glow corner */}
      <div
        className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at top right, oklch(0.72 0.22 210 / 0.12), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <span className="text-3xl" role="img" aria-label={card.title}>{card.icon}</span>
      <h3 className="font-heading text-lg font-bold text-foreground tracking-wide">{card.title}</h3>
      <p className="font-sans text-sm text-muted-foreground leading-relaxed">{card.description}</p>
    </div>
  )
}

export function Features() {
  const titleRef = useRef<HTMLDivElement>(null)
  const [titleVisible, setTitleVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true) },
      { threshold: 0.3 }
    )
    if (titleRef.current) observer.observe(titleRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div
          ref={titleRef}
          className="flex flex-col items-center text-center gap-4"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Sistemas do Servidor
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground text-balance">
            O que te espera em{" "}
            <span style={{ color: "oklch(0.72 0.22 210)", textShadow: "0 0 20px oklch(0.72 0.22 210 / 0.5)" }}>
              DRAXENBR
            </span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl text-pretty leading-relaxed">
            Cada sistema foi cuidadosamente desenvolvido para criar uma experiência única e imersiva.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((card, i) => (
            <FeatureCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
