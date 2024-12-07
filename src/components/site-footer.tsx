import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl';
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('Footer');

  const footerSections = {
    solutions: {
      title: t('sections.solutions.title'),
      links: [
        { href: "/services", label: t('sections.solutions.links.services') },
        { href: "/odoo", label: t('sections.solutions.links.odoo') },
        { href: "/contact", label: t('sections.solutions.links.getStarted') },
        { href: "/about", label: t('sections.solutions.links.about') },
      ],
    },
    technology: {
      title: t('sections.technology.title'),
      links: [
        { href: "/services#saas", label: t('sections.technology.links.saas') },
        { href: "/services#cloud", label: t('sections.technology.links.cloud') },
        { href: "/services#custom", label: t('sections.technology.links.custom') },
        { href: "/services#support", label: t('sections.technology.links.support') },
      ],
    },
    company: {
      title: t('sections.company.title'),
      links: [
        { href: "/about", label: t('sections.company.links.about') },
        { href: "/contact", label: t('sections.company.links.contact') },
        { href: "/privacy", label: t('sections.company.links.privacy') },
        { href: "/terms", label: t('sections.company.links.terms') },
      ],
    },
  }

  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t('company.name')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('company.description')}
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{t('company.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{t('company.phone')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{t('company.email')}</span>
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
            © {currentYear} {t('legal.copyright')}
          </p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t('legal.privacy')}
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t('legal.terms')}
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t('legal.cookies')}
            </Link>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex justify-center items-center gap-6 py-6 border-t border-border/40">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>{t('certifications.zec')}</span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>{t('certifications.odoo')}</span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>{t('certifications.iso')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
} 