"use client";

import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button"
import { FadeInImage } from "@/components/ui/fade-in-image"
import { Code, Building, Award, Globe } from "lucide-react"
import { Link } from '@/i18n/routing';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  const stats = [
    {
      icon: Code,
      value: t('stats.odoo.value'),
      label: t('stats.odoo.label'),
      description: t('stats.odoo.description')
    },
    {
      icon: Globe,
      value: t('stats.zec.value'),
      label: t('stats.zec.label'),
      description: t('stats.zec.description')
    },
    {
      icon: Building,
      value: t('stats.clients.value'),
      label: t('stats.clients.label'),
      description: t('stats.clients.description')
    },
    {
      icon: Award,
      value: t('stats.experience.value'),
      label: t('stats.experience.label'),
      description: t('stats.experience.description')
    }
  ]

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white'>
                  {t('hero.title')}
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-400 md:text-xl'>
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-black'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {stats.map((stat, i) => (
                <div key={i} className='flex flex-col items-center space-y-4 text-center'>
                  <div className='p-4 bg-green-600/10 rounded-full'>
                    <stat.icon className='h-6 w-6 text-green-600' />
                  </div>
                  <div className='space-y-2'>
                    <h2 className='text-3xl font-bold text-white'>{stat.value}</h2>
                    <p className='text-xl font-medium text-green-600'>{stat.label}</p>
                    <p className='text-gray-400'>{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white'>
                  {t('mission.title')}
                </h2>
                <p className='text-gray-400 md:text-xl'>
                  {t('mission.description')}
                </p>
                <div className='space-y-2'>
                  <p className='text-gray-400'>
                    {t('mission.points.odoo')}
                  </p>
                  <p className='text-gray-400'>{t('mission.points.saas')}</p>
                  <p className='text-gray-400'>{t('mission.points.support')}</p>
                </div>
                <div className='pt-4'>
                  <Link href='/contact'>
                    <Button className='bg-green-600 hover:bg-green-700 text-white'>
                      {t('mission.cta')}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='relative'>
                <FadeInImage
                  src='/images/team.png'
                  alt={t('mission.image.alt')}
                  width={600}
                  height={400}
                  className='rounded-xl shadow-2xl'
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-black'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white'>
                  {t('cta.title')}
                </h2>
                <p className='mx-auto max-w-[700px] text-gray-400 md:text-xl'>
                  {t('cta.description')}
                </p>
              </div>
              <div className='space-x-4'>
                <Link href='/contact'>
                  <Button className='bg-green-600 hover:bg-green-700 text-white'>
                    {t('cta.primary')}
                  </Button>
                </Link>
                <Link href='/services'>
                  <Button
                    variant='outline'
                    className='border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50'>
                    {t('cta.secondary')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 