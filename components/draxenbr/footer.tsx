const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Servidor", href: "#features" },
  { label: "Mapas", href: "#maps" },
  { label: "Comunidade", href: "#community" },
  { label: "Discord", href: "https://discord.gg/PkEe3pFbmm" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-display text-3xl font-black tracking-widest"
            style={{
              color: "oklch(0.72 0.22 210)",
              textShadow: "0 0 20px oklch(0.72 0.22 210 / 0.5)",
            }}
          >
            DRAXEN
            <span className="text-foreground">BR</span>
          </span>
          <p className="font-sans text-xs text-muted-foreground">
            Servidor RPG Minecraft — Anjos vs Demônios
          </p>
        </div>

        {/* Links */}
        <nav aria-label="Links do rodapé">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Divider */}
        <div
          className="w-full h-px"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, transparent, oklch(0.72 0.22 210 / 0.3), transparent)",
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-xs text-muted-foreground font-sans">
          <p>© 2026 DRAXENBR. Todos os direitos reservados.</p>
          <p>Não afiliado ao Mojang Studios.</p>
        </div>
      </div>
    </footer>
  )
}
