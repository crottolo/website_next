'use client';

import { motion } from 'framer-motion';
import { IconBrandGooglePlay, IconBrandApple, IconPhone } from '@tabler/icons-react';
import { useRef } from 'react';
import { BackgroundBeams } from './ui/background-beams';
import { SparklesCore } from './ui/sparkles';
import { TextGenerateEffect } from './ui/text-generate-effect';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative flex h-screen w-full overflow-hidden bg-black antialiased"
    >
      {/* Background Effects */}
      <BackgroundBeams className="opacity-20" />
      <SparklesCore
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={100}
        className="opacity-50"
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center justify-center px-5 text-center">
        {/* Main Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 20,
            duration: 0.8,
          }}
          className="mb-8"
        >
          <div className="rounded-full bg-gradient-to-br from-purple-600/20 to-white/5 p-4 backdrop-blur-md border border-purple-500/20 shadow-lg shadow-purple-500/10">
            <IconPhone className="h-12 w-12 text-purple-300" />
          </div>
        </motion.div>

        {/* Main heading with animation */}
        <TextGenerateEffect
          words="Stop alle Chiamate Indesiderate"
          className="bg-gradient-to-b from-white via-purple-100 to-purple-200 bg-clip-text pb-4 text-center text-5xl font-bold text-transparent md:text-7xl"
        />

        {/* Subheading with animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-center text-xl font-normal text-white/95 md:text-2xl backdrop-blur-sm"
        >
          Trasforma ogni chiamata indesiderata in un&apos;opportunità di giustizia.
          <br />
          Segnala, proteggi e ottieni un rimborso.
        </motion.p>

        {/* Download buttons with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 flex flex-col gap-4 md:flex-row"
        >
          <button
            className="group relative flex items-center gap-2 rounded-xl bg-gradient-to-br from-purple-600/20 to-white/5 px-8 py-4 font-medium text-white transition-all hover:bg-gradient-to-br hover:from-purple-600/30 hover:to-white/10 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10"
            onClick={() => window.open('#', '_blank')}
          >
            <IconBrandGooglePlay className="h-6 w-6 text-purple-300" />
            <div className="flex flex-col items-start">
              <span className="text-xs text-purple-200/70">Scarica da</span>
              <span className="text-sm font-semibold">Google Play</span>
            </div>
          </button>
          <button
            className="group relative flex items-center gap-2 rounded-xl bg-gradient-to-br from-purple-600/20 to-white/5 px-8 py-4 font-medium text-white transition-all hover:bg-gradient-to-br hover:from-purple-600/30 hover:to-white/10 backdrop-blur-sm border border-purple-500/20 shadow-lg shadow-purple-500/10"
            onClick={() => window.open('#', '_blank')}
          >
            <IconBrandApple className="h-6 w-6 text-purple-300" />
            <div className="flex flex-col items-start">
              <span className="text-xs text-purple-200/70">Scarica da</span>
              <span className="text-sm font-semibold">App Store</span>
            </div>
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          <div className="flex flex-col items-center backdrop-blur-sm rounded-lg p-4 bg-gradient-to-br from-purple-600/20 to-white/5 border border-purple-500/20 shadow-lg shadow-purple-500/10">
            <span className="text-3xl font-bold text-white">10K+</span>
            <span className="text-sm text-purple-200/70">Utenti Attivi</span>
          </div>
          <div className="flex flex-col items-center backdrop-blur-sm rounded-lg p-4 bg-gradient-to-br from-purple-600/20 to-white/5 border border-purple-500/20 shadow-lg shadow-purple-500/10">
            <span className="text-3xl font-bold text-white">50K+</span>
            <span className="text-sm text-purple-200/70">Segnalazioni</span>
          </div>
          <div className="flex flex-col items-center backdrop-blur-sm rounded-lg p-4 bg-gradient-to-br from-purple-600/20 to-white/5 border border-purple-500/20 shadow-lg shadow-purple-500/10">
            <span className="text-3xl font-bold text-white">100+</span>
            <span className="text-sm text-purple-200/70">Aziende Verificate</span>
          </div>
          <div className="flex flex-col items-center backdrop-blur-sm rounded-lg p-4 bg-gradient-to-br from-purple-600/20 to-white/5 border border-purple-500/20 shadow-lg shadow-purple-500/10">
            <span className="text-3xl font-bold text-white">€50K+</span>
            <span className="text-sm text-purple-200/70">Rimborsi Ottenuti</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
