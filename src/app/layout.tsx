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
  metadataBase: new URL('https://www.persevida.com'),
  title: {
    template: '%s | Persevida SL',
    default: 'Persevida SL | Software Development & Odoo Solutions',
  },
  description: 'Persevida SL: Professional software development company specializing in Odoo ERP solutions. ZEC registered company offering SAAS and custom development.',
  applicationName: 'Persevida',
  referrer: 'origin-when-cross-origin',
  keywords: ['persevida', 'odoo partner', 'software development', 'SAAS', 'ZEC', 'canary islands', 'ERP solutions', 'custom development'],
  authors: [{ name: 'Persevida Team' }],
  creator: 'Persevida SL',
  publisher: 'Persevida SL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.persevida.com',
    siteName: 'Persevida SL',
    title: 'Persevida SL | Software Development & Odoo Solutions',
    description: 'Professional software development company specializing in Odoo ERP solutions. ZEC registered company offering SAAS and custom development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Persevida SL Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Persevida SL | Software Development & Odoo Solutions',
    description: 'Professional software development company specializing in Odoo ERP solutions. ZEC registered company offering SAAS and custom development.',
    images: ['/twitter-image.jpg'],
    creator: '@persevida',
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
    canonical: 'https://www.persevida.com',
    languages: {
      'en-US': 'https://www.persevida.com',
      'es-ES': 'https://www.persevida.com/es',
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
    <html lang='en' suppressHydrationWarning className="dark">
      <body className={`${inter.className} min-h-screen bg-background antialiased dark`}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
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
