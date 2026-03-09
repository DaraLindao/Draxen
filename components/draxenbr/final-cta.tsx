"use client"

import { useEffect, useRef, useState } from "react"
import { Particles } from "./particles"

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="cta"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 100% 100% at 50% 50%, oklch(0.15 0.04 240) 0%, oklch(0.09 0.02 240) 60%)",
      }}
    >
      {/* Particles layer */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles />
      </div>

      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.72 0.22 210 / 0.6), transparent)",
        }}
      />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <span
            className="font-heading text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "oklch(0.82 0.18 195)" }}
          >
            Sua aventura começa agora
          </span>
          <h2
            className="font-display text-5xl md:text-7xl font-black text-balance leading-none"
            style={{
              textShadow: "0 0 60px oklch(0.72 0.22 210 / 0.4)",
            }}
          >
            <span style={{ color: "oklch(0.72 0.22 210)" }}>Seu destino</span>
            <br />
            <span className="text-foreground">começa em DRAXENBR.</span>
          </h2>
        </div>

        <p className="font-sans text-lg text-muted-foreground max-w-lg text-pretty leading-relaxed">
          Não espere mais. Entre no servidor, escolha seu lado e deixe sua marca no universo DRAXENBR.
        </p>

        <a
          href="#home"
          className="font-heading text-base font-black uppercase tracking-widest px-12 py-5 rounded-xl text-primary-foreground transition-all duration-200 hover:scale-105 hover:brightness-110"
          style={{
            background: "oklch(0.72 0.22 210)",
            boxShadow:
              "0 0 50px oklch(0.72 0.22 210 / 0.6), 0 0 100px oklch(0.72 0.22 210 / 0.2), 0 8px 30px rgba(0,0,0,0.5)",
          }}
        >
          JOGAR AGORA
        </a>

        {/* Server IP */}
        <p className="font-mono text-sm text-muted-foreground">
          IP:{" "}
          <span style={{ color: "oklch(0.72 0.22 210)" }} className="font-bold">
          DraxenBR.razehost.net
          </span>
        </p>
      </div>
    </section>
  )
}
