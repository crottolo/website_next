import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AuthProvider } from "@/context/AuthContext"
import { Metadata, Viewport } from 'next'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.legallogger.com'),
  title: {
    template: '%s | Legal Logger',
    default: 'Legal Logger | Monitoraggio Log Documentale',
  },
  description: 'Legal Logger: soluzione professionale per il monitoraggio e la protezione dei log documentali. Conformità GDPR e sicurezza dei dati garantita.',
  applicationName: 'Legal Logger',
  referrer: 'origin-when-cross-origin',
  keywords: ['legal logger', 'monitoraggio log', 'GDPR', 'sicurezza documentale', 'protezione dati', 'compliance'],
  authors: [{ name: 'Legal Logger Team' }],
  creator: 'Legal Logger',
  publisher: 'Legal Logger',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://www.legallogger.com',
    siteName: 'Legal Logger',
    title: 'Legal Logger | Monitoraggio Log Documentale',
    description: 'Legal Logger: soluzione professionale per il monitoraggio e la protezione dei log documentali.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Legal Logger Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Logger | Monitoraggio Log Documentale',
    description: 'Legal Logger: soluzione professionale per il monitoraggio e la protezione dei log documentali.',
    images: ['/twitter-image.jpg'],
    creator: '@legallogger',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.legallogger.com',
    languages: {
      'it-IT': 'https://www.legallogger.com',
      'en-US': 'https://www.legallogger.com/en',
    },
  },
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon/safari-pinned-tab.svg', color: '#000000' }
    ]
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='it' suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <AuthProvider>
            <div className='relative flex min-h-screen flex-col'>
              <SiteHeader />
              <main className='flex-1 flex flex-col'>{children}</main>
              <SiteFooter />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
