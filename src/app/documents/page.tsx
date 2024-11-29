import { FileText, Download, Upload, History, Search, ArrowRight, Shield, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DocumentsPage() {
  const documentFeatures = [
    {
      title: "Monitoraggio Accessi ai Documenti",
      description: "Tracciamento completo di ogni visualizzazione, download e modifica",
      icon: FileText,
      details: [
        "Log dettagliato di ogni accesso",
        "Marca temporale certificata",
        "Identificazione utente e dispositivo",
        "Geolocalizzazione degli accessi"
      ]
    },
    {
      title: "Tracciamento Download",
      description: "Controllo completo su ogni download effettuato",
      icon: Download,
      details: [
        "Volume e frequenza dei download",
        "Tipologia di file scaricati",
        "Pattern di comportamento anomali",
        "Alert per download massivi"
      ]
    },
    {
      title: "Monitoraggio Upload",
      description: "Analisi degli upload e delle modifiche ai documenti",
      icon: Upload,
      details: [
        "Verifica integrità dei file",
        "Scansione contenuti malevoli",
        "Tracciamento versioni",
        "Controllo formato file"
      ]
    },
    {
      title: "Cronologia Completa",
      description: "Storico dettagliato di tutte le operazioni",
      icon: History,
      details: [
        "Timeline delle attività",
        "Filtri avanzati di ricerca",
        "Export report certificati",
        "Retention configurabile"
      ]
    }
  ]

  const alertTypes = [
    {
      title: "Download Massivi",
      description: "Rilevamento automatico di download anomali per volume o frequenza",
      triggers: [
        "Più di 100 file in un'ora",
        "Download completo di cartelle",
        "Pattern temporali inusuali",
        "Download da IP non autorizzati"
      ]
    },
    {
      title: "Accessi Sospetti",
      description: "Identificazione di comportamenti anomali nell'accesso ai documenti",
      triggers: [
        "Accessi fuori orario",
        "Multiple sessioni simultanee",
        "Tentativi di accesso falliti",
        "Navigazione anomala"
      ]
    },
    {
      title: "Modifiche Non Autorizzate",
      description: "Monitoraggio delle alterazioni non conformi alle policy",
      triggers: [
        "Modifiche a documenti critici",
        "Cancellazioni multiple",
        "Alterazioni di permessi",
        "Upload di file non consentiti"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section with Image */}
      <div className="relative mb-16">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/20 dark:to-gray-900/20" />
        </div>
        <div className="relative z-10 text-center py-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Monitoraggio Documenti
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tracciamento completo e certificato di ogni interazione con i documenti aziendali
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {documentFeatures.map((feature, i) => (
          <div
            key={i}
            className="border rounded-lg p-6 bg-card hover:shadow-lg transition-shadow relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <feature.icon className="h-8 w-8 text-green-600" />
                <h2 className="text-2xl font-bold">{feature.title}</h2>
              </div>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/20 dark:to-gray-900/20 rounded-tl-lg" />
          </div>
        ))}
      </div>

      {/* Alert Types Section with Dashboard Preview */}
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sistema di Alert Intelligente</h2>
          <p className="text-muted-foreground">
            Rilevamento automatico di attività sospette e notifiche in tempo reale
          </p>
        </div>

        <div className="relative mb-12 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/20 dark:to-gray-900/20 rounded-lg p-8">
          <div className="aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-2xl text-green-600 dark:text-green-400 font-semibold">
                Dashboard Preview
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {alertTypes.map((alert, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-4"
            >
              <Shield className="h-8 w-8 text-amber-500" />
              <h3 className="text-xl font-bold">{alert.title}</h3>
              <p className="text-sm text-muted-foreground">{alert.description}</p>
              <ul className="space-y-2">
                {alert.triggers.map((trigger, j) => (
                  <li key={j} className="text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {trigger}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Export Section */}
      <div className="text-center bg-green-600 text-white rounded-lg p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block">
          <div className="w-full h-full bg-gradient-to-l from-green-500 to-green-600" />
        </div>
        <div className="max-w-2xl mx-auto relative z-10">
          <Search className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            Ricerca Avanzata e Export Certificato
          </h2>
          <p className="mb-8">
            Trova rapidamente qualsiasi documento o attività e genera report con validità legale
          </p>
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

      {/* Interactive Demo Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-8">Vedi Legal Logger in Azione</h2>
        <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/20 dark:to-gray-900/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <Button 
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700"
            >
              Guarda la Demo
              <Play className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 