import { Navbar } from "@/components/draxenbr/navbar"
import { Hero } from "@/components/draxenbr/hero"
import { Features } from "@/components/draxenbr/features"
import { Stats } from "@/components/draxenbr/stats"
import { Maps } from "@/components/draxenbr/maps"
import { Gallery } from "@/components/draxenbr/gallery"
import { Community } from "@/components/draxenbr/community"
import { FinalCTA } from "@/components/draxenbr/final-cta"
import { Footer } from "@/components/draxenbr/footer"

export default function DraxenBRPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Maps />
      <Gallery />
      <Community />
      <FinalCTA />
      <Footer />
    </main>
  )
}
