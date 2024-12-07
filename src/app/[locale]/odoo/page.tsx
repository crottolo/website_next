"use client";

import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Link } from '@/i18n/routing'
import { Code, Cloud, Settings, Zap, Shield, Users, Database, ArrowRight } from "lucide-react"

export default function OdooPage() {
  const t = useTranslations('OdooPage');

  const versions = [
    {
      version: "Odoo 18.0",
      status: t('versions.items.18.status'),
      features: t('versions.items.18.features'),
      icon: Zap
    },
    {
      version: "Odoo 17.0",
      status: t('versions.items.17.status'),
      features: t('versions.items.17.features'),
      icon: Shield
    },
    {
      version: "Odoo 16.0",
      status: t('versions.items.16.status'),
      features: t('versions.items.16.features'),
      icon: Database
    },
    {
      version: "Odoo 14.0-15.0",
      status: t('versions.items.14-15.status'),
      features: t('versions.items.14-15.features'),
      icon: Settings
    }
  ]

  const services = [
    {
      title: t('services.implementation.title'),
      description: t('services.implementation.description'),
      features: [
        t('services.implementation.features.analysis'),
        t('services.implementation.features.configuration'),
        t('services.implementation.features.migration'),
        t('services.implementation.features.training')
      ],
      icon: Cloud
    },
    {
      title: t('services.development.title'),
      description: t('services.development.description'),
      features: [
        t('services.development.features.modules'),
        t('services.development.features.api'),
        t('services.development.features.integration'),
        t('services.development.features.optimization')
      ],
      icon: Code
    },
    {
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: [
        t('services.support.features.assistance'),
        t('services.support.features.bugfix'),
        t('services.support.features.monitoring'),
        t('services.support.features.updates')
      ],
      icon: Users
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  {t('hero.title')}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">{t('versions.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {versions.map((version, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4 min-h-[180px]">
                    <version.icon className="h-8 w-8 text-[#44ff9a]" />
                    <h3 className="text-xl font-bold text-white">{version.version}</h3>
                    <p className="text-green-500 font-medium">{version.status}</p>
                    <p className="text-gray-400">{version.features}</p>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">{t('services.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4 min-h-[290px]">
                    <service.icon className="h-8 w-8 text-[#44b0ff]" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, j) => (
                        <li key={j} className="text-gray-400">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">{t('cta.title')}</h2>
              <p className="text-gray-400 max-w-[600px] mx-auto">
                {t('cta.subtitle')}
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    {t('cta.buttons.start')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/cases">
                  <Button
                    variant="outline"
                    className="border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
                  >
                    {t('cta.buttons.cases')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 