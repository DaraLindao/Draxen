"use client"

import { useEffect, useRef, useState } from "react"

interface Stat {
  value: number
  suffix: string
  label: string
  icon: string
}

const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Jogadores Online", icon: "👥" },
  { value: 86+, suffix: "", label: "Mods Instalados", icon: "🧩" },
  { value: 50+, suffix: "", label: "Construções Únicas", icon: "🗺️" },
  { value: 200+, suffix: "+", label: "Comunidade Ativa", icon: "💬" },
]

function AnimatedCounter({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [current, setCurrent] = useState(0)
  const startedRef = useRef(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCurrent(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl font-black" style={{ color: "oklch(0.72 0.22 210)" }}>
      {current.toLocaleString("pt-BR")}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section id="stats" className="relative py-20 px-6 border-y border-border/40 overflow-hidden">
      {/* Ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, oklch(0.72 0.22 210 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300"
            >
              <span className="text-2xl" role="img" aria-label={stat.label}>{stat.icon}</span>
              <div className="flex items-end gap-0.5">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-heading text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
