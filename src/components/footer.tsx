"use client"

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing'
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const t = useTranslations('Footer.simple');

  const navigation = {
    main: [
      { name: t('navigation.about'), href: "/about" },
      { name: t('navigation.features'), href: "/features" },
      { name: t('navigation.pricing'), href: "/pricing" },
      { name: t('navigation.contact'), href: "#" },
      { name: t('navigation.privacy'), href: "#" },
      { name: t('navigation.legal'), href: "#" },
    ],
    social: [
      {
        name: "LinkedIn",
        href: "#",
        icon: Linkedin,
      },
      {
        name: "GitHub",
        href: "#",
        icon: Github,
      },
      {
        name: "Twitter",
        href: "#",
        icon: Twitter,
      },
      {
        name: "Instagram",
        href: "#",
        icon: Instagram,
      },
    ],
  }

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center mb-8">
            <Link href="/" className="text-2xl font-bold">
              {t('company.name')}
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
              {t('company.tagline')}
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center">
              {t('company.zec')}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-8">
            {navigation.social.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-6 w-6" />
                </Link>
              )
            })}
          </div>

          {/* Address and Legal */}
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('company.address')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} {t('legal.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 