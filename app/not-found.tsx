'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#A855F7',
};

export const metadata: Metadata = {
  title: 'Pagina non trovata - 404 | Opponiti.com',
  description: 'La pagina che stai cercando non esiste o è stata spostata.',
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'Pagina non trovata - 404 | Opponiti.com',
    description: 'La pagina che stai cercando non esiste o è stata spostata.',
    images: [
      {
        url: '/og-404.jpg',
        width: 1200,
        height: 630,
        alt: 'Pagina 404 - Opponiti.com',
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Animated glowing orb */}
      <div className="absolute h-56 w-56 animate-pulse rounded-full bg-purple-500/30 blur-3xl" />
      <div className="absolute h-56 w-56 animate-pulse rounded-full bg-blue-500/20 blur-3xl [animation-delay:2s]" />

      {/* Content container */}
      <div className="relative z-10 text-center">
        {/* Animated 404 text */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          className="bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-9xl font-bold text-transparent"
        >
          404
        </motion.h1>

        {/* Animated description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-2xl font-light text-neutral-300"
        >
          Oops! Questa pagina si è persa nel cyberspazio
        </motion.p>

        {/* Animated button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="group relative mt-8 inline-block overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-[2px] hover:shadow-2xl hover:shadow-purple-500/40"
          >
            <span className="relative inline-block rounded-full bg-black px-6 py-3 text-white transition-all duration-300 group-hover:bg-transparent">
              Torna alla Home
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-firefly rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
