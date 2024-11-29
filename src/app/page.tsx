import { Button } from "@/components/ui/button"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { HighlightText } from "@/components/ui/highlight-text"
import Link from "next/link"
import { ArrowRight, Shield, Download, Mail, Database, Clock, Eye, FileWarning, Lock } from "lucide-react"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Logger | Monitoraggio e Protezione Log Documentali',
  description: 'Soluzioni avanzate per il monitoraggio e la protezione dei log documentali. Garantiamo conformità GDPR e massima sicurezza dei dati aziendali.',
  openGraph: {
    title: 'Legal Logger | Monitoraggio e Protezione Log Documentali',
    description: 'Soluzioni avanzate per il monitoraggio e la protezione dei log documentali.',
    images: [
      {
        url: '/home-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Legal Logger - Homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Logger | Monitoraggio e Protezione Log Documentali',
    description: 'Soluzioni avanzate per il monitoraggio e la protezione dei log documentali.',
    images: ['/home-hero.jpg'],
  },
}

export default function HomePage() {
  const features = [
    {
      title: "Monitoraggio Attività",
      description: "Tracciamento in tempo reale di ogni interazione con i dati aziendali",
      icon: Eye,
      highlight: "Real-time tracking"
    },
    {
      title: "Log Certificati",
      description: "Marca temporale certificata per ogni evento registrato",
      icon: Clock,
      highlight: "Validità legale"
    },
    {
      title: "Protezione Dati",
      description: "Prevenzione delle fughe di dati e accessi non autorizzati",
      icon: Shield,
      highlight: "Data protection"
    }
  ]

  const useCases = [
    {
      title: "Download Massivi",
      description: "Identificazione immediata di download anomali di documenti aziendali",
      icon: Download,
      stats: "Riduzione del 95% delle fughe di dati"
    },
    {
      title: "Comunicazioni Sospette",
      description: "Monitoraggio delle comunicazioni verso destinatari esterni non autorizzati",
      icon: Mail,
      stats: "100% tracciabilità garantita"
    },
    {
      title: "Accessi al Database",
      description: "Controllo delle query e delle estrazioni massive dal database",
      icon: Database,
      stats: "Prevenzione accessi non autorizzati"
    }
  ]

  const benefits = [
    {
      title: "Conformità GDPR",
      description: "Rispetto completo delle normative sulla protezione dei dati",
      icon: Lock
    },
    {
      title: "Report Forensi",
      description: "Generazione di report dettagliati per analisi legali",
      icon: FileWarning
    },
    {
      title: "Alert in Tempo Reale",
      description: "Notifiche immediate per attività sospette",
      icon: Clock
    }
  ]

  const testimonials = [
    {
      quote: "L&apos;integrazione con i nostri sistemi esistenti è stata sorprendentemente semplice. In pochi giorni avevamo una visibilità completa su tutte le attività critiche.",
      name: "Marco Rossi",
      title: "CTO, TechCorp Italia"
    },
    {
      quote: "Legal Logger ci ha permesso di identificare e bloccare una fuga di dati sensibili prima che causasse danni irreparabili. Il sistema di alert in tempo reale è incredibilmente efficace.",
      name: "Laura Bianchi",
      title: "Legal Director, FinanceGroup"
    },
    {
      quote: "Grazie a Legal Logger abbiamo potuto dimostrare la nostra compliance GDPR in modo inequivocabile durante un audit. La documentazione automatica è impeccabile.",
      name: "Giuseppe Verdi",
      title: "Data Protection Officer, Healthcare Solutions"
    },
    {
      quote: "Il monitoraggio delle attività sospette ha rivelato pattern di comportamento che non avremmo mai individuato manualmente. Un vero game changer per la sicurezza.",
      name: "Anna Neri",
      title: "Security Manager, Industrial Tech"
    },
    {
      quote: "Il supporto del team di Legal Logger è eccezionale. Hanno compreso immediatamente le nostre esigenze e ci hanno guidato nell'implementazione ottimale.",
      name: "Sofia Marroni",
      title: "COO, Digital Services"
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
                  Proteggi i tuoi <HighlightText>dati sensibili</HighlightText> con prove legali
                </h1>
                <p className="mx-auto max-w-3xl text-gray-400 md:text-xl">
                  Monitora e proteggi la tua azienda con prove legali certificate di ogni evento
                </p>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Link href="/register">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Inizia Ora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
                  >
                    Scopri di più
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
                Caratteristiche Principali
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tecnologia avanzata per la protezione dei tuoi dati aziendali
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
                Casi d&apos;Uso
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Scopri come Legal Logger protegge la tua azienda
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
                Vantaggi
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Perché scegliere Legal Logger
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
                Le Aziende che si Fidano di Noi
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Scopri come Legal Logger sta aiutando le aziende a proteggere i loro dati sensibili
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

        <section className="w-full py-20 bg-black">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Pronto a Proteggere i Tuoi Dati?
            </h2>
            <p className="text-gray-400 mb-8">
              L&apos;innovativa soluzione per la sicurezza dei dati aziendali
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/register">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Prova Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
                >
                  Contattaci
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
