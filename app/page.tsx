import { Metadata, Viewport } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const features = [
  {
    title: 'Segnalazione Immediata',
    description:
      'Segnala le chiamate indesiderate istantaneamente attraverso la nostra app intuitiva. Traccia e documenta ogni chiamata spam.',
    link: '#',
  },
  {
    title: 'Azione Legale Collettiva',
    description:
      'Unisciti ad altri utenti per intraprendere azioni legali contro call center e truffatori persistenti.',
    link: '#',
  },
  {
    title: 'Identificazione Chiamate',
    description:
      'Sistema avanzato di identificazione delle chiamate per riconoscere e avvisarti di potenziali chiamate spam prima di rispondere.',
    link: '#',
  },
  {
    title: 'Rimborso Garantito',
    description:
      'Possibilità di ottenere un rimborso per ogni chiamata indesiderata documentata attraverso il nostro processo legale.',
    link: '#',
  },
  {
    title: 'Business Verification',
    description:
      'Le aziende legittime possono registrare i propri call center per aumentare la fiducia e il tasso di risposta.',
    link: '#',
  },
  {
    title: 'Community Protection',
    description:
      'Unisciti a una community in crescita che lavora insieme per fermare le chiamate indesiderate e proteggere i diritti dei consumatori.',
    link: '#',
  },
];

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#A855F7',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Opponiti.com - Stop alle chiamate indesiderate',
  description:
    'Unisciti alla rivoluzione contro le chiamate indesiderate. Segnala, proteggi e ottieni un rimborso per ogni chiamata spam.',
  keywords: [
    'chiamate indesiderate',
    'spam telefonico',
    'protezione consumatori',
    'call center',
    'rimborso chiamate',
    'azione legale',
    'app anti spam',
    'tutela privacy',
  ],
  authors: [{ name: 'Opponiti.com' }],
  creator: 'Opponiti.com',
  publisher: 'Opponiti.com',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Opponiti.com - Stop alle chiamate indesiderate',
    description:
      'Unisciti alla rivoluzione contro le chiamate indesiderate. Segnala, proteggi e ottieni un rimborso per ogni chiamata spam.',
    url: 'https://opponiti.com',
    siteName: 'Opponiti.com',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opponiti.com - Stop alle chiamate indesiderate',
    description:
      'Unisciti alla rivoluzione contro le chiamate indesiderate. Segnala, proteggi e ottieni un rimborso per ogni chiamata spam.',
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <HeroSection />
      
      {/* Features Section */}
      <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black/[0.96] px-4 py-24">
        <div className="container">
          <div className="mb-12 flex flex-col justify-center gap-4 items-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-7xl text-center">
              Come Funziona
            </h2>
            <p className="max-w-2xl text-base text-white/95 md:text-lg text-center">
              Trasforma ogni chiamata indesiderata in un&apos;opportunità di cambiamento
            </p>
          </div>
          <HoverEffect items={features} />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative w-full bg-gradient-to-b from-black via-purple-950/50 to-purple-900 px-4 py-24">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
            Unisciti alla Rivoluzione
          </h2>
          <p className="mb-8 mx-auto max-w-2xl text-lg text-white/95">
            Se per ogni call center che ti ha chiamato ricevessi un euro, saresti milionario?
            È ora di dire basta e far valere i tuoi diritti.
          </p>
          <button className="rounded-full bg-gradient-to-br from-purple-600/20 to-white/5 px-8 py-4 text-lg font-semibold text-white hover:from-purple-600/30 hover:to-white/10 transition-all border border-purple-500/20 shadow-lg shadow-purple-500/10">
            Scarica l&apos;App
          </button>
        </div>
      </section>
    </main>
  );
}
