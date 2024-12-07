import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { HighlightText } from "@/components/ui/highlight-text"
import { ArrowRight, Code, Cloud, Database, Cog, Users, Rocket, Server, Laptop } from "lucide-react"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('HomePage');

  const features = [
    {
      title: t('features.odoo.title'),
      description: t('features.odoo.description'),
      icon: Code,
      highlight: t('features.odoo.highlight')
    },
    {
      title: t('features.saas.title'),
      description: t('features.saas.description'),
      icon: Cloud,
      highlight: t('features.saas.highlight')
    },
    {
      title: t('features.custom.title'),
      description: t('features.custom.description'),
      icon: Cog,
      highlight: t('features.custom.highlight')
    }
  ]

  const useCases = [
    {
      title: t('useCases.erp.title'),
      description: t('useCases.erp.description'),
      icon: Database,
      stats: t('useCases.erp.stats')
    },
    {
      title: t('useCases.cloud.title'),
      description: t('useCases.cloud.description'),
      icon: Server,
      stats: t('useCases.cloud.stats')
    },
    {
      title: t('useCases.integration.title'),
      description: t('useCases.integration.description'),
      icon: Laptop,
      stats: t('useCases.integration.stats')
    }
  ]

  const benefits = [
    {
      title: t('benefits.zec.title'),
      description: t('benefits.zec.description'),
      icon: Rocket
    },
    {
      title: t('benefits.team.title'),
      description: t('benefits.team.description'),
      icon: Users
    },
    {
      title: t('benefits.support.title'),
      description: t('benefits.support.description'),
      icon: Cloud
    }
  ]

  const testimonials = [
    {
      quote: t('testimonials.1.quote'),
      name: t('testimonials.1.name'),
      title: t('testimonials.1.title')
    },
    {
      quote: t('testimonials.2.quote'),
      name: t('testimonials.2.name'),
      title: t('testimonials.2.title')
    },
    {
      quote: t('testimonials.3.quote'),
      name: t('testimonials.3.name'),
      title: t('testimonials.3.title')
    },
    {
      quote: t('testimonials.4.quote'),
      name: t('testimonials.4.name'),
      title: t('testimonials.4.title')
    },
    {
      quote: t('testimonials.5.quote'),
      name: t('testimonials.5.name'),
      title: t('testimonials.5.title')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
          <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  {t('hero.title')} <HighlightText>{t('hero.highlight')}</HighlightText>
                </h1>
                <p className="mx-auto max-w-3xl text-gray-400 md:text-xl">
                  {t('hero.subtitle')}
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    {t('hero.cta.primary')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
                  >
                    {t('hero.cta.secondary')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('services.title')}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t('services.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4">
                    <feature.icon className="h-8 w-8 text-[#44ff9a]" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                    <span className="inline-block px-3 py-1 text-sm font-medium text-[#44ff9a] bg-[#44ff9a]/10 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-black/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold mb-8">
                {t('solutions.title')}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t('solutions.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4">
                    <useCase.icon className="h-8 w-8 text-[#44b0ff]" />
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    <p className="text-gray-400">{useCase.description}</p>
                    <div className="pt-4 border-t border-gray-800">
                      <p className="text-[#44ff9a] font-semibold">{useCase.stats}</p>
                    </div>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-gradient-to-t from-gray-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('whyUs.title')}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t('whyUs.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <BackgroundGradient key={i}>
                  <div className="space-y-4">
                    <benefit.icon className="h-8 w-8 text-[#8b44ff]" />
                    <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('testimonials.title')}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t('testimonials.subtitle')}
              </p>
            </div>
          </div>
          <div className="w-full">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
