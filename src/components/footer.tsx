"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from "lucide-react"

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Legal", href: "#" },
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

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center mb-8">
            <Link href="/" className="text-2xl font-bold">
              Persevida SL
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
              Innovación tecnológica desde Tenerife
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-center">
              Empresa inscrita en la Zona Especial Canaria (ZEC)
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
              Santa Cruz de Tenerife, Islas Canarias, España
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Persevida SL. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 