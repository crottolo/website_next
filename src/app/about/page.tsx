"use client";

import { Button } from "@/components/ui/button"
import { FadeInImage } from "@/components/ui/fade-in-image"
import { Shield, Users, Building, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    {
      icon: Shield,
      value: "100%",
      label: "Conformità GDPR",
      description: "Piena conformità con le normative sulla protezione dei dati"
    },
    {
      icon: Users,
      value: "1000+",
      label: "Clienti Attivi",
      description: "Aziende che si fidano di noi ogni giorno"
    },
    {
      icon: Building,
      value: "50+",
      label: "Partner",
      description: "Network di partner certificati in tutta Italia"
    },
    {
      icon: Award,
      value: "10+",
      label: "Anni di Esperienza",
      description: "Nel campo della sicurezza informatica e compliance"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Proteggiamo il Futuro Digitale delle Aziende
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Dal 2013 aiutiamo le aziende a proteggere i loro dati sensibili con soluzioni innovative e certificate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center space-y-4 text-center">
                  <div className="p-4 bg-green-600/10 rounded-full">
                    <stat.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-white">{stat.value}</h2>
                    <p className="text-xl font-medium text-green-600">{stat.label}</p>
                    <p className="text-gray-400">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  La Nostra Missione
                </h2>
                <p className="text-gray-400 md:text-xl">
                  Crediamo che la sicurezza dei dati sia un diritto fondamentale per ogni azienda. 
                  La nostra missione è rendere la protezione dei dati accessibile, efficace e conforme alle normative.
                </p>
                <div className="space-y-2">
                  <p className="text-gray-400">
                    • Protezione proattiva contro le minacce informatiche
                  </p>
                  <p className="text-gray-400">
                    • Conformità garantita con le normative vigenti
                  </p>
                  <p className="text-gray-400">
                    • Supporto continuo e formazione dedicata
                  </p>
                </div>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Contattaci
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <FadeInImage
                  src="/about-image.jpg"
                  alt="Legal Logger Team"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Pronti a Proteggere i Tuoi Dati?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Scopri come Legal Logger può aiutare la tua azienda a proteggere i dati sensibili
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/register">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Inizia Ora
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
                  >
                    Parliamone
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