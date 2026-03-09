"use client"

import { useEffect, useRef, useState } from "react"

export function Community() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="community" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse, oklch(0.72 0.22 210 / 0.08) 0%, transparent 70%)",
        }}
      />

      <div
        ref={sectionRef}
        className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-primary">
          Comunidade
        </span>

        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-balance leading-tight">
          Entre para o universo{" "}
          <span
            style={{
              color: "oklch(0.72 0.22 210)",
              textShadow: "0 0 30px oklch(0.72 0.22 210 / 0.5)",
            }}
          >
            DRAXENBR
          </span>{" "}
          e comece sua jornada.
        </h2>

        <p className="font-sans text-lg text-muted-foreground max-w-lg text-pretty leading-relaxed">
          Milhares de jogadores já escrevem suas histórias. Facções batalham, alianças são formadas e o mundo evolui a cada dia.
        </p>

        {/* Feature list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {[
            { label: "Eventos Semanais", desc: "Torneios e missões especiais toda semana" },
            { label: "Suporte 24h", desc: "Equipe de moderadores sempre disponível" },
            { label: "Updates Constantes", desc: "Novos conteúdos e sistemas regularmente" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-2 p-4 rounded-xl border border-border/40 bg-card/30 text-left"
            >
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "oklch(0.72 0.22 210)" }}
                aria-hidden="true"
              />
              <p className="font-heading text-sm font-bold text-foreground">{item.label}</p>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-sm">
          <a
            href="https://discord.gg/PkEe3pFbmm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 font-heading text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-xl text-primary-foreground text-center transition-all duration-200 hover:scale-105 hover:brightness-110"
            style={{
              background: "oklch(0.72 0.22 210)",
              boxShadow: "0 0 25px oklch(0.72 0.22 210 / 0.4), 0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            Join Discord
          </a>
          <a
            href="#home"
            className="flex-1 font-heading text-sm font-bold uppercase tracking-widest px-6 py-4 rounded-xl text-foreground text-center border border-border/60 bg-secondary/40 hover:border-primary/60 transition-all duration-200"
          >
            Start Playing
          </a>
        </div>
      </div>
    </section>
  )
}
