import { Shield, Database, ArrowRight, Download, Mail, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CasesPage() {
  const detectionScenarios = [
    {
      category: "Esportazione Dati",
      icon: Download,
      cases: [
        {
          title: "Download Massivo di File Sensibili",
          description: "Rilevamento di download di grandi quantità di file in breve tempo",
          indicators: [
            "Volume anomalo di download",
            "Orari non standard",
            "Pattern di accesso inusuali"
          ],
          action: "Alert immediato e blocco automatico dell'account"
        },
        {
          title: "Esportazione Database Clienti",
          description: "Monitoraggio delle query di esportazione dal CRM",
          indicators: [
            "Query di esportazione completa",
            "Accessi da IP non autorizzati",
            "Tentativi multipli di export"
          ],
          action: "Notifica al team di sicurezza e log certificato"
        }
      ]
    },
    {
      category: "Comunicazioni Sospette",
      icon: Mail,
      cases: [
        {
          title: "Invio Massivo di Email con Allegati",
          description: "Identificazione di pattern sospetti nell'invio di email",
          indicators: [
            "Alto volume di allegati",
            "Destinatari esterni all'organizzazione",
            "File sensibili in allegato"
          ],
          action: "Blocco preventivo e richiesta approvazione"
        },
        {
          title: "Condivisione File su Cloud",
          description: "Monitoraggio delle condivisioni su piattaforme cloud",
          indicators: [
            "Condivisioni multiple in sequenza",
            "Link pubblici a documenti riservati",
            "Upload massivo su servizi esterni"
          ],
          action: "Revoca automatica degli accessi e notifica"
        }
      ]
    },
    {
      category: "Accessi Anomali",
      icon: Users,
      cases: [
        {
          title: "Login da Posizioni Insolite",
          description: "Rilevamento di accessi da località sospette",
          indicators: [
            "IP da paesi non autorizzati",
            "Accessi simultanei da luoghi diversi",
            "Tentativi di bypass VPN"
          ],
          action: "Blocco immediato e richiesta 2FA"
        },
        {
          title: "Escalation di Privilegi",
          description: "Monitoraggio di modifiche ai permessi utente",
          indicators: [
            "Modifiche non autorizzate ai ruoli",
            "Creazione di utenti admin",
            "Alterazione log di sistema"
          ],
          action: "Ripristino automatico permessi e alert"
        }
      ]
    },
    {
      category: "Manipolazione Database",
      icon: Database,
      cases: [
        {
          title: "Query Dannose o non Autorizzate",
          description: "Identificazione di query potenzialmente pericolose",
          indicators: [
            "Tentativi di DROP o DELETE massivi",
            "Query di modifica strutturale",
            "Accessi diretti non autorizzati"
          ],
          action: "Blocco query e notifica DBA"
        },
        {
          title: "Esfiltrazione Dati via Query",
          description: "Rilevamento di query sospette per estrazione dati",
          indicators: [
            "Query con grandi risultati",
            "Join complessi non standard",
            "Utilizzo di funzioni di export"
          ],
          action: "Log certificato e limitazione risultati"
        }
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Scenari di Rilevamento
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Legal Logger monitora e protegge la tua azienda da attività sospette, fornendo prove legali certificate di ogni evento
        </p>
      </div>

      <div className="grid gap-12">
        {detectionScenarios.map((scenario) => (
          <div key={scenario.category} className="space-y-8">
            <div className="flex items-center gap-3">
              <scenario.icon className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-bold">{scenario.category}</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {scenario.cases.map((case_, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 space-y-4 bg-card hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold">{case_.title}</h3>
                  <p className="text-muted-foreground">{case_.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-primary">Indicatori di Rischio:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {case_.indicators.map((indicator, i) => (
                        <li key={i}>{indicator}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      <p className="text-sm font-medium text-green-600">
                        Azione: {case_.action}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl font-bold">
            Proteggi la Tua Azienda Oggi Stesso
          </h2>
          <p className="text-muted-foreground">
            Scopri come Legal Logger può aiutarti a prevenire e documentare ogni tentativo di accesso o utilizzo non autorizzato dei tuoi dati
          </p>
          <div className="pt-4">
            <Link href="/register">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Inizia Ora
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
      </div>
    </div>
  )
} 