"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const maps = [
  {
    title: "Favela",
    description: "Mapa urbano com exploração e roleplay social. Construa sua reputação nas ruas.",
    image: "/images/map-favela.jpg",
    tag: "Urbano",
    tagColor: "#f59e0b",
  },
  {
    title: "Templo dos Anjos",
    description: "Cidade celestial protegida pelos anjos. Paz e poder divino em cada estrutura.",
    image: "/images/map-templo.jpg",
    tag: "Celestial",
    tagColor: "#38bdf8",
  },
  {
    title: "Nether Demoníaco",
    description: "Dimensão controlada pelos demônios. Apenas os mais fortes sobrevivem aqui.",
    image: "/images/map-nether.jpg",
    tag: "Infernal",
    tagColor: "#ef4444",
  },
  {
    title: "Mapas de Aventura",
    description: "Diversos mapas épicos para explorar. Cada jornada revela novos segredos.",
    image: "/images/map-adventure.jpg",
    tag: "Aventura",
    tagColor: "#22c55e",
  },
]

export function Maps() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="maps" className="relative py-24 px-6 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse, oklch(0.72 0.22 210 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div ref={sectionRef} className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div
          className="flex flex-col items-center text-center gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Mundos do Servidor
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground text-balance">
            Explore os{" "}
            <span style={{ color: "oklch(0.72 0.22 210)", textShadow: "0 0 20px oklch(0.72 0.22 210 / 0.5)" }}>
              Mapas
            </span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl text-pretty leading-relaxed">
            Cada mundo conta uma história diferente. De favelas urbanas a paraísos celestiais.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {maps.map((map, i) => (
            <div
              key={map.title}
              className="group relative rounded-2xl overflow-hidden border border-border/50 aspect-video cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
                transition: `opacity 0.6s ease ${i * 80}ms, transform 0.6s ease ${i * 80}ms`,
              }}
            >
              <Image
                src={map.image}
                alt={`Mapa ${map.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* overlay */}
              <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300" />

              {/* Glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `inset 0 0 0 1.5px ${map.tagColor}80`,
                }}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 gap-2">
                <span
                  className="font-heading text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit"
                  style={{
                    background: `${map.tagColor}22`,
                    color: map.tagColor,
                    border: `1px solid ${map.tagColor}55`,
                  }}
                >
                  {map.tag}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-black text-foreground tracking-wide">
                  {map.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {map.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
