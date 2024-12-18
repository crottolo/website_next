import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Opponiti.com',
    default: 'Opponiti.com - Stop alle chiamate indesiderate',
  },
  description: 'Unisciti alla rivoluzione contro le chiamate indesiderate. Segnala, proteggi e ottieni un rimborso per ogni chiamata spam.',
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
  themeColor: '#A855F7',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  robots: {
    index: true,
    follow: true,
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
