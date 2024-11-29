"use client";

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PricingPage() {
  const plans = [
    {
      name: "Base",
      price: "Gratis",
      description: "Perfetto per provare la nostra piattaforma",
      features: [
        "Fino a 3 progetti",
        "Analisi di base",
        "Supporto 24/7",
        "Accesso alla community",
        "1 membro del team"
      ],
      cta: "Inizia Ora",
      popular: false
    },
    {
      name: "Pro",
      price: "29€",
      period: "/mese",
      description: "Ideale per professionisti",
      features: [
        "Progetti illimitati",
        "Analisi avanzate",
        "Supporto prioritario",
        "Domini personalizzati",
        "10 membri del team",
        "Sicurezza avanzata",
        "Accesso API"
      ],
      cta: "Prova Gratuita",
      popular: true
    },
    {
      name: "Enterprise",
      price: "99€",
      period: "/mese",
      description: "Per grandi team e organizzazioni",
      features: [
        "Tutto del piano Pro",
        "Membri del team illimitati",
        "Integrazioni personalizzate",
        "Supporto dedicato",
        "Garanzia SLA",
        "Sicurezza avanzata",
        "Contratti personalizzati"
      ],
      cta: "Contattaci",
      popular: false
    }
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Prezzi semplici e trasparenti
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Scegli il piano perfetto per le tue esigenze. Saprai sempre quanto pagherai.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-6 bg-background rounded-xl border ${
                  plan.popular
                    ? "border-green-600 shadow-lg scale-105"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-green-600 px-3 py-1 text-center text-sm text-primary-foreground">
                    Più Popolare
                  </div>
                )}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="ml-1 text-gray-500 dark:text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    className={cn(
                      "w-full",
                      plan.popular
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
                    )}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Hai bisogno di qualcosa di diverso?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Contatta il nostro team commerciale per opzioni di prezzo personalizzate. Siamo qui per aiutarti a trovare la soluzione perfetta.
              </p>
            </div>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-11 px-8 border-green-600 text-green-600 hover:text-green-600 hover:bg-green-50/50 dark:border-green-400 dark:text-green-400 dark:hover:text-green-400 dark:hover:bg-green-950/50"
            >
              Contatta Vendite
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 