import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    product: {
      title: "Prodotto",
      links: [
        { href: "/features", label: "Caratteristiche" },
        { href: "/security", label: "Sicurezza" },
        { href: "/integrations", label: "Integrazioni" },
        { href: "/pricing", label: "Prezzi" },
      ],
    },
    resources: {
      title: "Risorse",
      links: [
        { href: "/docs", label: "Documentazione" },
        { href: "/api", label: "API" },
        { href: "/blog", label: "Blog" },
        { href: "/guides", label: "Guide" },
      ],
    },
    company: {
      title: "Azienda",
      links: [
        { href: "/about", label: "Chi Siamo" },
        { href: "/contact", label: "Contatti" },
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Termini di Servizio" },
      ],
    },
  }

  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Legal Logger</h3>
            <p className="text-sm text-muted-foreground">
              Protezione dei dati con validità legale per la tua azienda
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Via Roma 123, Milano</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+39 02 1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@legallogger.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-lg font-bold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-t border-border/40">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Legal Logger. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Termini e Condizioni
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex justify-center items-center gap-6 py-6 border-t border-border/40">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>ISO 27001</span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>GDPR Compliant</span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 