"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Castelo épico construído por jogadores", span: "col-span-2" },
  { src: "/images/gallery-2.jpg", alt: "Cidade medieval com marketplace", span: "col-span-1" },
  { src: "/images/gallery-3.jpg", alt: "Batalha PvP épica entre facções", span: "col-span-1" },
  { src: "/images/gallery-4.jpg", alt: "Cena de roleplay ao redor da fogueira", span: "col-span-1" },
  { src: "/images/gallery-5.jpg", alt: "Ilhas flutuantes com cristais mágicos", span: "col-span-2" },
  { src: "/images/gallery-6.jpg", alt: "Dungeon subterrâneo com ruínas antigas", span: "col-span-1" },
]

export function Gallery() {
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
    <section id="gallery" className="relative py-24 px-6">
      <div ref={sectionRef} className="max-w-6xl mx-auto flex flex-col gap-12">
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
            Galeria
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground text-balance">
            Momentos{" "}
            <span style={{ color: "oklch(0.72 0.22 210)", textShadow: "0 0 20px oklch(0.72 0.22 210 / 0.5)" }}>
              Épicos
            </span>
          </h2>
          <p className="font-sans text-muted-foreground max-w-xl text-pretty leading-relaxed">
            Cada screenshot conta uma história de batalhas, alianças e descobertas no universo DRAXENBR.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`group relative rounded-xl overflow-hidden aspect-video ${img.span}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.95)",
                transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300" />
              {/* Glow overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                aria-hidden="true"
                style={{
                  boxShadow: "inset 0 0 0 1.5px oklch(0.72 0.22 210 / 0.5)",
                }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-heading text-xs text-muted-foreground">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
