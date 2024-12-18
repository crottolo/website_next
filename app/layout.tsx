import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Opponiti.com',
    default: 'Opponiti.com - Stop alle chiamate indesiderate',
  },
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
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#A855F7'
      }
    ]
  },
  manifest: '/manifest.json',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="dark">
      <head />
      <body className={`${inter.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
