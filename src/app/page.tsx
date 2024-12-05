import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { HighlightText } from "@/components/ui/highlight-text"
import Link from "next/link"
import { ArrowRight, Code, Cloud, Database, Cog, Users, Rocket, Server, Laptop } from "lucide-react"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Persevida SL | Software Development & Odoo Solutions',
  description: 'Professional software development company specializing in Odoo ERP solutions. ZEC registered company offering SAAS and custom development.',
  openGraph: {
    title: 'Persevida SL | Software Development & Odoo Solutions',
    description: 'Professional software development company specializing in Odoo ERP solutions.',
    images: [
      {
        url: '/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Persevida SL - Homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Persevida SL | Software Development & Odoo Solutions',
    description: 'Professional software development company specializing in Odoo ERP solutions.',
    images: ['/home-hero.jpg'],
  },
}

export default function HomePage() {
  const features = [
    {
      title: "Odoo Development",
      description: "Custom modules and implementations for Odoo 14.0 to 18.0",
      icon: Code,
      highlight: "Expert Partner"
    },
    {
      title: "SAAS Solutions",
      description: "Cloud-based software solutions with high availability",
      icon: Cloud,
      highlight: "Enterprise Ready"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions for your business needs",
      icon: Cog,
      highlight: "Bespoke Solutions"
    }
  ]

  const useCases = [
    {
      title: "ERP Implementation",
      description: "Full-scale Odoo ERP implementation and customization",
      icon: Database,
      stats: "100+ successful implementations"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration of your systems to cloud infrastructure",
      icon: Server,
      stats: "99.9% uptime guaranteed"
    },
    {
      title: "Business Integration",
      description: "Connect your systems with custom API development",
      icon: Laptop,
      stats: "50+ integrations delivered"
    }
  ]

  const benefits = [
    {
      title: "ZEC Advantages",
      description: "Benefit from Canary Islands Special Zone tax incentives",
      icon: Rocket
    },
    {
      title: "Expert Team",
      description: "Skilled developers with years of Odoo experience",
      icon: Users
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support for your systems",
      icon: Cloud
    }
  ]

  const testimonials = [
    {
      quote: "Persevida's Odoo expertise helped us streamline our entire business operations. Their custom modules perfectly fit our needs.",
      name: "John Smith",
      title: "CTO, TechCorp Spain"
    },
    {
      quote: "The cloud migration was seamless, and their support team is always there when we need them. Excellent service!",
      name: "Maria Garcia",
      title: "Operations Director, LogisticsPro"
    },
    {
      quote: "Their understanding of business processes and technical expertise made our ERP implementation a success.",
      name: "David Wilson",
      title: "CEO, Manufacturing Solutions"
    },
    {
      quote: "The SAAS solution they developed has transformed how we handle our customer relationships. Highly recommended!",
      name: "Ana Rodriguez",
      title: "Sales Manager, RetailTech"
    },
    {
      quote: "Working with Persevida has been a game-changer for our business. Their technical support is outstanding.",
      name: "Michael Brown",
      title: "IT Director, Global Services"
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
                  Transform Your Business with <HighlightText>Odoo Solutions</HighlightText>
                </h1>
                <p className="mx-auto max-w-3xl text-gray-400 md:text-xl">
                  Expert Odoo development and custom software solutions for your growing business
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
                  >
                    Our Services
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
                Core Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Advanced technology solutions for your business growth
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
                Solutions
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover how Persevida can transform your business
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
                Why Choose Us
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                The Persevida advantage
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
                Companies That Trust Us
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See how Persevida is helping businesses grow with custom solutions
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
