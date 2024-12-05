import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    solutions: {
      title: "Solutions",
      links: [
        { href: "/services", label: "Services" },
        { href: "/odoo", label: "Odoo Solutions" },
        { href: "/contact", label: "Get Started" },
        { href: "/about", label: "About Us" },
      ],
    },
    technology: {
      title: "Technology",
      links: [
        { href: "/services#saas", label: "SAAS" },
        { href: "/services#cloud", label: "Cloud Solutions" },
        { href: "/services#custom", label: "Custom Development" },
        { href: "/services#support", label: "Support" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms of Service" },
      ],
    },
  }

  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Persevida SL</h3>
            <p className="text-sm text-muted-foreground">
              Professional software development and Odoo solutions
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Santa Cruz de Tenerife, Canary Islands</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+34 922 123 456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@persevida.com</span>
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
            © {currentYear} Persevida SL. All rights reserved.
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
              Terms & Conditions
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
            <span>ZEC Registered Company</span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>Odoo Partner</span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>ISO 9001</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 