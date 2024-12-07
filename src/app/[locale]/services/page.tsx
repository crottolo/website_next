"use client";

import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Link } from '@/i18n/routing'
import { Code, Cloud, Cog, Database, Server, Users, Rocket, Laptop } from "lucide-react"

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');

  const services = [
    {
      title: t('mainServices.odoo.title'),
      description: t('mainServices.odoo.description'),
      icon: Code,
      features: [
        t('mainServices.odoo.features.modules'),
        t('mainServices.odoo.features.upgrades'),
        t('mainServices.odoo.features.integration'),
        t('mainServices.odoo.features.optimization')
      ]
    },
    {
      title: t('mainServices.saas.title'),
      description: t('mainServices.saas.description'),
      icon: Cloud,
      features: [
        t('mainServices.saas.features.hosting'),
        t('mainServices.saas.features.backups'),
        t('mainServices.saas.features.availability'),
        t('mainServices.saas.features.security')
      ]
    },
    {
      title: t('mainServices.erp.title'),
      description: t('mainServices.erp.description'),
      icon: Database,
      features: [
        t('mainServices.erp.features.analysis'),
        t('mainServices.erp.features.migration'),
        t('mainServices.erp.features.training'),
        t('mainServices.erp.features.support')
      ]
    },
    {
      title: t('mainServices.custom.title'),
      description: t('mainServices.custom.description'),
      icon: Cog,
      features: [
        t('mainServices.custom.features.web'),
        t('mainServices.custom.features.api'),
        t('mainServices.custom.features.integration'),
        t('mainServices.custom.features.modernization')
      ]
    }
  ]

  const additionalServices = [
    {
      title: t('additional.support.title'),
      description: t('additional.support.description'),
      icon: Users
    },
    {
      title: t('additional.cloud.title'),
      description: t('additional.cloud.description'),
      icon: Server
    },
    {
      title: t('additional.zec.title'),
      description: t('additional.zec.description'),
      icon: Rocket
    },
    {
      title: t('additional.integration.title'),
      description: t('additional.integration.description'),
      icon: Laptop
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4">
                    <service.icon className="h-8 w-8 text-[#44ff9a]" />
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">{t('additional.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4">
                    <service.icon className="h-8 w-8 text-[#44b0ff]" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
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
                    {t('cta.buttons.contact')}
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